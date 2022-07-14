export declare namespace $ {
  export type LogicalOperator =
    | "AND"
    | "OR";
}
export type Type = $.LogicalOperator;

export const num2name = {
  0: "AND",
  1: "OR",
} as const;

export const name2num = {
  AND: 0,
  OR: 1,
} as const;
