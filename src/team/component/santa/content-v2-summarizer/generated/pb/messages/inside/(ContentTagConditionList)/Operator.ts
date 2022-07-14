export declare namespace $.inside.ContentTagConditionList {
  export type Operator =
    | "UNSPECIFIED"
    | "AND"
    | "OR";
}
export type Type = $.inside.ContentTagConditionList.Operator;

export const num2name = {
  0: "UNSPECIFIED",
  1: "AND",
  2: "OR",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  AND: 1,
  OR: 2,
} as const;
