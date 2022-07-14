export declare namespace $.inside {
  export type UserStatus =
    | "USER_STATUS_UNSPECIFIED"
    | "ACTIVATED"
    | "DEACTIVATED"
    | "WITHDRAW";
}
export type Type = $.inside.UserStatus;

export const num2name = {
  0: "USER_STATUS_UNSPECIFIED",
  1: "ACTIVATED",
  2: "DEACTIVATED",
  3: "WITHDRAW",
} as const;

export const name2num = {
  USER_STATUS_UNSPECIFIED: 0,
  ACTIVATED: 1,
  DEACTIVATED: 2,
  WITHDRAW: 3,
} as const;
