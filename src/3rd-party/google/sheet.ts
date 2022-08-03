const SPREADSHEET_API = "https://sheets.googleapis.com/v4/spreadsheets/";

export interface Sheet {
  properties: {
    sheetId: number;
    title: string;
    index: string;
  };
}

export interface GetSpreadsheetConfig {
  apiKey: string;
  spreadsheetId: string;
  accessToken: string;
}
export interface GetSpreadsheetResult {
  spreadsheetId: string;
  properties: {
    title: string;
  };
  sheets: Sheet[];
}
export async function getSpreadsheet(
  config: GetSpreadsheetConfig,
): Promise<GetSpreadsheetResult> {
  const { apiKey, spreadsheetId, accessToken } = config;
  const res = await fetch(
    SPREADSHEET_API + `${spreadsheetId}/?key=${apiKey}`,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );
  if (res.status != 200) throw new Error(await res.text());
  return await res.json();
}

export interface GetValueConfig {
  apiKey: string;
  spreadsheetId: string;
  range: string;
  accessToken: string;
}
export interface GetValuesResult {
  range: string;
  majorDimension: "ROWS" | "COLUMNS";
  values: string[][];
}
export async function getValues(
  config: GetValueConfig,
): Promise<GetValuesResult> {
  const { apiKey, spreadsheetId, range, accessToken } = config;
  const res = await fetch(
    SPREADSHEET_API + `${spreadsheetId}/values/${range}?key=${apiKey}`,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );
  if (res.status != 200) throw new Error(await res.text());
  return await res.json();
}
