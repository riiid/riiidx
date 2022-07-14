export declare namespace $.inside {
  export type Country =
    | "UNSPECIFIED_COUNTRY"
    | "KR"
    | "JP"
    | "US"
    | "BR"
    | "CO"
    | "VN"
    | "TW";
}
export type Type = $.inside.Country;

export const num2name = {
  0: "UNSPECIFIED_COUNTRY",
  1: "KR",
  2: "JP",
  3: "US",
  4: "BR",
  5: "CO",
  6: "VN",
  7: "TW",
} as const;

export const name2num = {
  UNSPECIFIED_COUNTRY: 0,
  KR: 1,
  JP: 2,
  US: 3,
  BR: 4,
  CO: 5,
  VN: 6,
  TW: 7,
} as const;
