export declare namespace $.inside.ContentTagField {
  export type ValueType =
    | "UNSPECIFIED"
    | "SINGLE_STRING"
    | "LIST_STRING"
    | "SINGLE_INT"
    | "LIST_INT"
    | "SINGLE_DOUBLE"
    | "LIST_DOUBLE"
    | "BOOL"
    | "JSON";
}
export type Type = $.inside.ContentTagField.ValueType;

export const num2name = {
  0: "UNSPECIFIED",
  1: "SINGLE_STRING",
  2: "LIST_STRING",
  3: "SINGLE_INT",
  4: "LIST_INT",
  5: "SINGLE_DOUBLE",
  6: "LIST_DOUBLE",
  7: "BOOL",
  8: "JSON",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  SINGLE_STRING: 1,
  LIST_STRING: 2,
  SINGLE_INT: 3,
  LIST_INT: 4,
  SINGLE_DOUBLE: 5,
  LIST_DOUBLE: 6,
  BOOL: 7,
  JSON: 8,
} as const;
