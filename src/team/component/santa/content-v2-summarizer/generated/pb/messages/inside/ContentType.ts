export declare namespace $.inside {
  export type ContentType =
    | "UNSPECIFIED_CONTENT_TYPE"
    | "QUESTION_SET"
    | "QUESTION"
    | "LESSON_SET"
    | "LESSON"
    | "VOCABULARY";
}
export type Type = $.inside.ContentType;

export const num2name = {
  0: "UNSPECIFIED_CONTENT_TYPE",
  1: "QUESTION_SET",
  2: "QUESTION",
  3: "LESSON_SET",
  4: "LESSON",
  5: "VOCABULARY",
} as const;

export const name2num = {
  UNSPECIFIED_CONTENT_TYPE: 0,
  QUESTION_SET: 1,
  QUESTION: 2,
  LESSON_SET: 3,
  LESSON: 4,
  VOCABULARY: 5,
} as const;
