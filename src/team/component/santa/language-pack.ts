import * as path from "https://deno.land/std@0.135.0/path/mod.ts";
import { signIn } from "../../../3rd-party/google/auth.ts";
import { getValues } from "../../../3rd-party/google/sheet.ts";
import { getRoot } from "../../../misc/git.ts";
import { fetchGoogleSecret } from "../../../misc/secret.ts";
import { createJsonStorage } from "../../../misc/storage.ts";

// Even if you know the sheet id, you cannot access the document unless you are signed in.
const spreadsheetId = "1YGPkXaPmdwUkg01J4zIKPR75WQPw0UsKgBdgR3iMdTY";
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

if (import.meta.main) {
  const { clientId, clientSecret } = await fetchGoogleSecret();
  const root = await getRoot();
  const tokenStorage = await createJsonStorage(
    root + "/tmp/" + "santa-language-pack-google-login.json",
  );
  const token = await signIn({ clientId, clientSecret, scopes, tokenStorage });
  const platform = (Deno.args[0] as "web" | "android" | "ios") || "web";
  const pathPrefix = Deno.args[1] || {
    web: "locales",
    android: "modules/presentation/src/main/res",
    ios: "Sources/Toeic/SantaResources/Localizables",
  }[platform] || "";
  console.error("Fetching language pack from google sheet...");
  const languagePack = platform === "web"
    ? await getLanguagePackForWeb({ accessToken: token.access_token })
    : platform === "android"
    ? await getLanguagePackForAndroid({ accessToken: token.access_token })
    : await getLanguagePackForIos({ accessToken: token.access_token });
  for (const [file, data] of Object.entries(languagePack)) {
    console.error(`Writing ${path.join(pathPrefix, file)}...`);
    await Deno.mkdir(path.resolve(root, pathPrefix), { recursive: true });
    await Deno.writeTextFile(path.resolve(root, pathPrefix, file), data);
  }
  Deno.exit();
}

export interface LanguagePack {
  [filePath: string]: string;
}
export interface GetLanguagePackConfig {
  accessToken: string;
}

export async function getLanguagePackForWeb(
  { accessToken }: GetLanguagePackConfig,
): Promise<LanguagePack> {
  const { apiKey } = await fetchGoogleSecret();
  const sheets = ["Web(service)", "Web(toeic speaking)", "Web(admin)"] as const;
  const fileNameMap = {
    "Web(service)": "service",
    "Web(toeic speaking)": "toeic-speaking",
    "Web(admin)": "admin",
  };

  const charMap = {
    "0": "\x00",
    "a": "\x07",
    "b": "\x08",
    "f": "\x0C",
    "n": "\x0A",
    "r": "\x0D",
    "t": "\x09",
    "v": "\x0B",
    "\\": "\x5C",
    "'": "\x27",
    '"': "\x22",
  };
  function evalString(str: string): string {
    return str.replaceAll(
      /(?:\\x([0-9a-f]{2})|\\([0-7]{3})|\\([0abfnrtv\\'"]))/ig,
      (input, hex, octal, char: string) => {
        if (hex) return String.fromCodePoint(parseInt(hex, 16));
        if (octal) return String.fromCharCode(parseInt(octal, 8) % 0x100);
        if (char) return charMap[char.toLowerCase() as keyof typeof charMap];
        return input;
      },
    );
  }

  return (await Promise.all(sheets.map(async (sheet) => {
    const range = `${sheet}!B2:I9999`;
    const v = await getValues({ apiKey, spreadsheetId, range, accessToken });
    const values = v.values
      .filter((row) => row.length)
      .sort((a, b) => a[0] < b[0] ? -1 : 1);
    let [ko, ja, en, vi, zhHant, th]: {
      [key: string]: string;
    }[] = [{}, {}, {}, {}, {}, {}];
    const json = (x: any) => JSON.stringify(x, null, 2) + "\n";
    for (const row of values) {
      const _row = Object.assign(Array(8).fill(""), row);
      const key = _row[0];
      ko[key] = evalString(_row[2]);
      ja[key] = evalString(_row[3]);
      en[key] = evalString(_row[4]);
      vi[key] = evalString(_row[5]);
      zhHant[key] = evalString(_row[6]);
      th[key] = evalString(_row[7]);
    }
    return [
      `${fileNameMap[sheet]}.json`,
      json({
        "ko-KR": ko,
        "ja-JP": ja,
        "en-US": en,
        "vi-VN": vi,
        "zh-TW": zhHant,
        "th-TH": th,
      }),
    ];
  }))).reduce((prev, [key, json]) => ({
    ...prev,
    [key]: json,
  }), {});
}

export async function getLanguagePackForAndroid(
  { accessToken }: GetLanguagePackConfig,
): Promise<LanguagePack> {
  const { apiKey } = await fetchGoogleSecret();
  const range = "'For ANDROID'!B2:G9999";
  const v = await getValues({ apiKey, spreadsheetId, range, accessToken });
  let [ko, ja, en, vi, zhHant, th] = Array(6).fill("");
  const values = v.values.filter((row) => row.length);
  for (const row of values) {
    const indent = row[0].startsWith("<string ") ? "    " : "";
    const replace = (str: string) =>
      `${indent}${str.replace(/\s+<resources>/, "\n<resources>")}\n`;
    ko += replace(row[0]);
    ja += replace(row[1]);
    en += replace(row[2]);
    vi += replace(row[3]);
    zhHant += replace(row[4]);
    th += replace(row[5]);
  }
  return {
    "values-ko/lang-pack.xml": ko,
    "values-ja/lang-pack.xml": ja,
    "values/lang-pack.xml": en,
    "values-vi/lang-pack.xml": vi,
    "values-zh-rTW/lang-pack.xml": zhHant,
    "values-th/lang-pack.xml": th,
  };
}

export async function getLanguagePackForIos(
  { accessToken }: GetLanguagePackConfig,
): Promise<LanguagePack> {
  const { apiKey } = await fetchGoogleSecret();
  const range = "'Localizable.strings (iOS)'!B3:G9999";
  const v = await getValues({ apiKey, spreadsheetId, range, accessToken });
  let [ko, ja, en, vi, zhHant, th] = Array(6).fill("");
  const values = v.values.filter((row) => row.length);
  for (const row of values) {
    ko += row[0] + "\n";
    ja += row[1] + "\n";
    en += row[2] + "\n";
    vi += row[3] + "\n";
    zhHant += row[4] + "\n";
    th += row[5] + "\n";
  }
  return {
    "ko.lproj/Localizable.strings": ko,
    "ja.lproj/Localizable.strings": ja,
    "en.lproj/Localizable.strings": en,
    "vi.lproj/Localizable.strings": vi,
    "zh-Hant-TW.lproj/Localizable.strings": zhHant,
    "th.lproj/Localizable.strings": th,
  };
}
