import { Select } from "https://deno.land/x/cliffy@v0.24.3/prompt/mod.ts";
import { signIn } from "../../../3rd-party/google/auth.ts";
import * as fs from "https://deno.land/std@0.150.0/fs/mod.ts";
import { dirname } from "https://deno.land/std@0.150.0/path/mod.ts";
import { getSpreadsheet, getValues } from "../../../3rd-party/google/sheet.ts";
import { getRoot } from "../../../misc/git.ts";
import { fetchGoogleSecret } from "../../../misc/secret.ts";
import { createJsonStorage } from "../../../misc/storage.ts";

const spreadsheetId = "1UjczOTryPqDoHD6mGMKoUwMq3__zFVkdN7lu8iWK3lE";
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

if (import.meta.main) {
  const { clientId, clientSecret } = await fetchGoogleSecret();
  const root = await getRoot();
  const tokenStorage = await createJsonStorage(
    root + "/tmp/" + "santa-app-store-google-login.json",
  );
  const token = await signIn({ clientId, clientSecret, scopes, tokenStorage });
  const entries = await getSheets({ accessToken: token.access_token });
  const title = await Select.prompt({
    message: "Select a sheet",
    options: entries.map(([_, name]) => ({
      name,
      value: name,
    })),
  });
  const metadata = await getMetadata({
    accessToken: token.access_token,
    title,
  });
  for (const _path in metadata) {
    const path = root + "/fastlane/metadata/" + _path;
    console.error(`Writing ${path}...`);
    await fs.ensureDir(dirname(path));
    await Deno.writeTextFile(path, metadata[_path]);
  }
  Deno.exit();
}

export interface GetAllSheetNamesConfig {
  accessToken: string;
}
export type SheetEntry = [number, string];
export async function getSheets(
  { accessToken }: GetAllSheetNamesConfig,
): Promise<SheetEntry[]> {
  const { apiKey } = await fetchGoogleSecret();
  const v = await getSpreadsheet({ apiKey, spreadsheetId, accessToken });
  const entries = v.sheets.map<SheetEntry>(
    (sheet) => [sheet.properties.sheetId, sheet.properties.title],
  );
  return entries;
}

export interface GetMetadataConfig {
  accessToken: string;
  title: string;
}
export interface Metadata {
  [filePath: string]: string;
}
export async function getMetadata(
  { accessToken, title }: GetMetadataConfig,
): Promise<Metadata> {
  const { apiKey } = await fetchGoogleSecret();
  const range = `'${title}'!C3:J3`;
  const v = await getValues({ apiKey, spreadsheetId, range, accessToken });
  const [[category, ko, _, ja, vn, tw, us, th]] = v.values;
  if (category !== "업데이트 안내") {
    throw new Error("Invalid metadata sheet");
  }
  return {
    "ko/release_notes.txt": ko,
    "ja/release_notes.txt": ja,
    "vi/release_notes.txt": vn,
    "zh-Hant/release_notes.txt": tw,
    "en-US/release_notes.txt": us,
    "th/release_notes.txt": th,
  };
}
