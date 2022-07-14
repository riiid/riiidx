export declare namespace $.inside.Content {
  export type Status =
    | "UNSPECIFIED"
    | "ERROR"
    | "READY"
    | "OUTDATED";
}
export type Type = $.inside.Content.Status;

export const num2name = {
  0: "UNSPECIFIED",
  1: "ERROR",
  2: "READY",
  3: "OUTDATED",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  ERROR: 1,
  READY: 2,
  OUTDATED: 3,
} as const;
