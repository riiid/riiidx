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
  const values = v.values.filter((row) => row.length);
  let [ko, ja, en, vi, zhHant, th] = Array(6).fill("{\n");
  function append(s: string, k: string, v: string) {
    if (!k || !v) return s;
    return s + `  ${JSON.stringify(k)}: ${JSON.stringify(v)},\n`;
  }
  for (const row of values) {
    const _row = Object.assign(Array(6).fill(""), row);
    const key = _row[0];
    ko = append(ko, key, _row[1]);
    ja = append(ja, key, _row[2]);
    en = append(en, key, _row[3]);
    vi = append(vi, key, _row[4]);
    zhHant = append(zhHant, key, _row[5]);
    th = append(th, key, _row[6]);
  }
  return {
    "packages/testprep/app/locales/ko-KR/translation.json": ko + "}\n",
    "packages/testprep/app/locales/ja-JP/translation.json": ja + "}\n",
    "packages/testprep/app/locales/en-US/translation.json": en + "}\n",
    "packages/testprep/app/locales/vi-VN/translation.json": vi + "}\n",
    "packages/testprep/app/locales/zh-TW/translation.json": zhHant + "}\n",
    "packages/testprep/app/locales/th-TH/translation.json": th + "}\n",
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
    ko += row[0] + "\n";
    ja += row[1] + "\n";
    en += row[2] + "\n";
    vi += row[3] + "\n";
    zhHant += row[4] + "\n";
    th += row[5] + "\n";
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
