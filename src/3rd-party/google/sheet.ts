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
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`,
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
