export declare namespace $.inside.contentlearning.QuestionState {
  export type AnswerState =
    | "ANSWER_STATE_UNSPECIFIED"
    | "ANSWER_STATE_CORRECT"
    | "ANSWER_STATE_INCORRECT"
    | "ANSWER_STATE_NO_ANSWER";
}
export type Type = $.inside.contentlearning.QuestionState.AnswerState;

export const num2name = {
  0: "ANSWER_STATE_UNSPECIFIED",
  1: "ANSWER_STATE_CORRECT",
  2: "ANSWER_STATE_INCORRECT",
  3: "ANSWER_STATE_NO_ANSWER",
} as const;

export const name2num = {
  ANSWER_STATE_UNSPECIFIED: 0,
  ANSWER_STATE_CORRECT: 1,
  ANSWER_STATE_INCORRECT: 2,
  ANSWER_STATE_NO_ANSWER: 3,
} as const;
