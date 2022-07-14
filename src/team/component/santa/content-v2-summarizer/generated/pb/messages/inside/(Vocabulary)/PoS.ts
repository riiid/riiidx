export declare namespace $.inside.Vocabulary {
  export type PoS =
    | "NOUN"
    | "PRONOUN"
    | "VERB"
    | "ADJECTIVE"
    | "ADVERB"
    | "CONJUNCTION"
    | "PREPOSITION"
    | "INTERJECTION";
}
export type Type = $.inside.Vocabulary.PoS;

export const num2name = {
  0: "NOUN",
  1: "PRONOUN",
  2: "VERB",
  3: "ADJECTIVE",
  4: "ADVERB",
  5: "CONJUNCTION",
  6: "PREPOSITION",
  7: "INTERJECTION",
} as const;

export const name2num = {
  NOUN: 0,
  PRONOUN: 1,
  VERB: 2,
  ADJECTIVE: 3,
  ADVERB: 4,
  CONJUNCTION: 5,
  PREPOSITION: 6,
  INTERJECTION: 7,
} as const;
