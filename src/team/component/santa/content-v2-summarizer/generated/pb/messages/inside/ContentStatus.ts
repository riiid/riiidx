export declare namespace $.inside {
  export type ContentStatus =
    | "UNSPECIFIED_CONTENT_STATUS"
    | "TO_BE_FIXED"
    | "OUTDATED"
    | "EDITING"
    | "READY"
    | "PUBLISHED"
    | "DELETED";
}
export type Type = $.inside.ContentStatus;

export const num2name = {
  0: "UNSPECIFIED_CONTENT_STATUS",
  1: "TO_BE_FIXED",
  2: "OUTDATED",
  3: "EDITING",
  4: "READY",
  5: "PUBLISHED",
  6: "DELETED",
} as const;

export const name2num = {
  UNSPECIFIED_CONTENT_STATUS: 0,
  TO_BE_FIXED: 1,
  OUTDATED: 2,
  EDITING: 3,
  READY: 4,
  PUBLISHED: 5,
  DELETED: 6,
} as const;
