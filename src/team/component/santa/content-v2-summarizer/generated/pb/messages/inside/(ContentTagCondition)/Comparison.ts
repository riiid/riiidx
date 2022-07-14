export declare namespace $.inside.ContentTagCondition {
  export type Comparison =
    | "UNSPECIFIED"
    | "CONTAINS"
    | "EXCLUDES"
    | "EQUALS"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL"
    | "NOT_EQUAL"
    | "LIKE";
}
export type Type = $.inside.ContentTagCondition.Comparison;

export const num2name = {
  0: "UNSPECIFIED",
  1: "CONTAINS",
  2: "EXCLUDES",
  3: "EQUALS",
  4: "GREATER_THAN",
  5: "GREATER_THAN_OR_EQUAL",
  6: "LESS_THAN",
  7: "LESS_THAN_OR_EQUAL",
  8: "NOT_EQUAL",
  9: "LIKE",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  CONTAINS: 1,
  EXCLUDES: 2,
  EQUALS: 3,
  GREATER_THAN: 4,
  GREATER_THAN_OR_EQUAL: 5,
  LESS_THAN: 6,
  LESS_THAN_OR_EQUAL: 7,
  NOT_EQUAL: 8,
  LIKE: 9,
} as const;
