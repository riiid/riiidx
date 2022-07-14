export declare namespace $.inside {
  export type Language =
    | "UNSPECIFIED_LANGUAGE"
    | "KO"
    | "JA"
    | "EN"
    | "PT"
    | "ES"
    | "VI"
    | "ZH";
}
export type Type = $.inside.Language;

export const num2name = {
  0: "UNSPECIFIED_LANGUAGE",
  1: "KO",
  2: "JA",
  3: "EN",
  4: "PT",
  5: "ES",
  6: "VI",
  7: "ZH",
} as const;

export const name2num = {
  UNSPECIFIED_LANGUAGE: 0,
  KO: 1,
  JA: 2,
  EN: 3,
  PT: 4,
  ES: 5,
  VI: 6,
  ZH: 7,
} as const;
