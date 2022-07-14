export declare namespace $.inside.contentlearning.VocaState {
  export type SelfReport =
    | "UNSPECIFIED"
    | "KNOWLEDGE"
    | "UNKNOWLEDGE";
}
export type Type = $.inside.contentlearning.VocaState.SelfReport;

export const num2name = {
  0: "UNSPECIFIED",
  1: "KNOWLEDGE",
  2: "UNKNOWLEDGE",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  KNOWLEDGE: 1,
  UNKNOWLEDGE: 2,
} as const;
