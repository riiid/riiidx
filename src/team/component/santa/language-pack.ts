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
  console.error("Fetching language pack from google sheet...");
  const languagePack = (
    platform === "web"
      ? await getLanguagePackForWeb({ accessToken: token.access_token })
      : platform === "android"
      ? await getLanguagePackForAndroid({ accessToken: token.access_token })
      : await getLanguagePackForIos({ accessToken: token.access_token })
  );
  for (const path in languagePack) {
    console.error(`Writing ${path}...`);
    await Deno.writeTextFile(root + "/" + path, languagePack[path]);
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
  const range = "Web!B2:I9999";
  const v = await getValues({ apiKey, spreadsheetId, range, accessToken });
  const values = v.values
    .filter((row) => row.length)
    .sort((a, b) => a[0] < b[0] ? -1 : 1);
  let [ko, ja, en, vi, zhHant, th]: {
    [key: string]: string;
  }[] = [{}, {}, {}, {}, {}, {}];
  const json = (x: any) => JSON.stringify(x, null, 2) + "\n";
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
  return {
    "service/app/locales/ko-KR/translation.json": json(ko),
    "service/app/locales/ja-JP/translation.json": json(ja),
    "service/app/locales/en-US/translation.json": json(en),
    "service/app/locales/vi-VN/translation.json": json(vi),
    "service/app/locales/zh-TW/translation.json": json(zhHant),
    "service/app/locales/th-TH/translation.json": json(th),
  };
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
    "modules/presentation/src/main/res/values-ko/lang-pack.xml": ko,
    "modules/presentation/src/main/res/values-ja/lang-pack.xml": ja,
    "modules/presentation/src/main/res/values/lang-pack.xml": en,
    "modules/presentation/src/main/res/values-vi/lang-pack.xml": vi,
    "modules/presentation/src/main/res/values-zh-rTW/lang-pack.xml": zhHant,
    "modules/presentation/src/main/res/values-th/lang-pack.xml": th,
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
    "Toeic/Resources/ko.lproj/Localizable.strings": ko,
    "Toeic/Resources/ja.lproj/Localizable.strings": ja,
    "Toeic/Resources/en.lproj/Localizable.strings": en,
    "Toeic/Resources/vi.lproj/Localizable.strings": vi,
    "Toeic/Resources/zh-Hant-TW.lproj/Localizable.strings": zhHant,
    "Toeic/Resources/th.lproj/Localizable.strings": th,
  };
}
