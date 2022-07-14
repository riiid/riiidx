export declare namespace $.inside.ContentVersion {
  export type ContentVersionStatusType =
    | "UNSPECIFIED"
    | "APPROVED"
    | "REJECTED"
    | "WAITING_FOR_APPROVAL"
    | "OUTDATED";
}
export type Type = $.inside.ContentVersion.ContentVersionStatusType;

export const num2name = {
  0: "UNSPECIFIED",
  1: "APPROVED",
  2: "REJECTED",
  3: "WAITING_FOR_APPROVAL",
  4: "OUTDATED",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  APPROVED: 1,
  REJECTED: 2,
  WAITING_FOR_APPROVAL: 3,
  OUTDATED: 4,
} as const;
