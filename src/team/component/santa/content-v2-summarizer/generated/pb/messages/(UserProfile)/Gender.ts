export declare namespace $.UserProfile {
  export type Gender =
    | "GENDER_UNSPECIFIED"
    | "MALE"
    | "FEMALE"
    | "OTHER";
}
export type Type = $.UserProfile.Gender;

export const num2name = {
  0: "GENDER_UNSPECIFIED",
  1: "MALE",
  2: "FEMALE",
  3: "OTHER",
} as const;

export const name2num = {
  GENDER_UNSPECIFIED: 0,
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
} as const;
