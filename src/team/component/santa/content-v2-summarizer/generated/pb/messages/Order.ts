export declare namespace $ {
  export type Order =
    | "UNSPECIFIED"
    | "ASC"
    | "DESC";
}
export type Type = $.Order;

export const num2name = {
  0: "UNSPECIFIED",
  1: "ASC",
  2: "DESC",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  ASC: 1,
  DESC: 2,
} as const;
