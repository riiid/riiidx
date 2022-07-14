export declare namespace $.inside.ContentVersionReview {
  export type ContentVersionReviewType =
    | "UNSPECIFIED"
    | "APPROVE"
    | "COMMENT"
    | "REJECT";
}
export type Type = $.inside.ContentVersionReview.ContentVersionReviewType;

export const num2name = {
  0: "UNSPECIFIED",
  1: "APPROVE",
  2: "COMMENT",
  3: "REJECT",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  APPROVE: 1,
  COMMENT: 2,
  REJECT: 3,
} as const;
