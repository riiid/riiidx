export declare namespace $.inside {
  export type ContentTranslationStatus =
    | "UNSPECIFIED_CONTENT_TRANSLATION_STATUS"
    | "UNTRANSLATED"
    | "UNREVIEWED"
    | "TRANSLATION_READY";
}
export type Type = $.inside.ContentTranslationStatus;

export const num2name = {
  0: "UNSPECIFIED_CONTENT_TRANSLATION_STATUS",
  1: "UNTRANSLATED",
  2: "UNREVIEWED",
  3: "TRANSLATION_READY",
} as const;

export const name2num = {
  UNSPECIFIED_CONTENT_TRANSLATION_STATUS: 0,
  UNTRANSLATED: 1,
  UNREVIEWED: 2,
  TRANSLATION_READY: 3,
} as const;
