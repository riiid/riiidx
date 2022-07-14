export declare namespace $.inside.Header {
  export type Type =
    | "UNSPECIFIED"
    | "INTRO"
    | "DESCRIPTION"
    | "DIRECTION"
    | "NOTE"
    | "REFERENCE";
}
export type Type = $.inside.Header.Type;

export const num2name = {
  0: "UNSPECIFIED",
  1: "INTRO",
  2: "DESCRIPTION",
  3: "DIRECTION",
  4: "NOTE",
  5: "REFERENCE",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  INTRO: 1,
  DESCRIPTION: 2,
  DIRECTION: 3,
  NOTE: 4,
  REFERENCE: 5,
} as const;
