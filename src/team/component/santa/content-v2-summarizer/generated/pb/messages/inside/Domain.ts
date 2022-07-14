export declare namespace $.inside {
  export type Domain =
    | "UNSPECIFIED_DOMAIN"
    | "KAPLAN_GMAT"
    | "REALTOR"
    | "SAT"
    | "TOEIC"
    | "B2B_HANHWA"
    | "CONNECME_ACT"
    | "IVY_GLOBAL_SAT"
    | "INICIE_ENEM"
    | "CASA_GRANDE_SABER11"
    | "PLAYGROUND";
}
export type Type = $.inside.Domain;

export const num2name = {
  0: "UNSPECIFIED_DOMAIN",
  1: "KAPLAN_GMAT",
  2: "REALTOR",
  3: "SAT",
  4: "TOEIC",
  5: "B2B_HANHWA",
  6: "CONNECME_ACT",
  7: "IVY_GLOBAL_SAT",
  8: "INICIE_ENEM",
  9: "CASA_GRANDE_SABER11",
  10: "PLAYGROUND",
} as const;

export const name2num = {
  UNSPECIFIED_DOMAIN: 0,
  KAPLAN_GMAT: 1,
  REALTOR: 2,
  SAT: 3,
  TOEIC: 4,
  B2B_HANHWA: 5,
  CONNECME_ACT: 6,
  IVY_GLOBAL_SAT: 7,
  INICIE_ENEM: 8,
  CASA_GRANDE_SABER11: 9,
  PLAYGROUND: 10,
} as const;
