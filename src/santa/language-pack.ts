import { signIn } from "../3rd-party/google/auth.ts";
import { getValues } from "../3rd-party/google/sheet.ts";
import { getGoogleSecret } from "../secret.ts";

// Even if you know the sheet id, you cannot access the document unless you are signed in.
const spreadsheetId = "1YGPkXaPmdwUkg01J4zIKPR75WQPw0UsKgBdgR3iMdTY";
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

if (import.meta.main) {
  const { clientId, clientSecret } = await getGoogleSecret();
  const token = await signIn({ clientId, clientSecret, scopes });
  console.log(
    await getLanguagePackForIos({ accessToken: token.access_token }),
  );
}

export interface GetLanguagePackForIosConfig {
  accessToken: string;
}
export async function getLanguagePackForIos(
  { accessToken }: GetLanguagePackForIosConfig,
) {
  const { apiKey } = await getGoogleSecret();
  const range = "'Localizable.strings (iOS)'!B3:G9999";
  const v = await getValues({ apiKey, spreadsheetId, range, accessToken });
  let [ko, ja, en, vi, zhHant, th] = ["", "", "", "", "", ""];
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
