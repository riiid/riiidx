export declare namespace $.presentation.content.Admin {
  export type Role =
    | "UNSPECIFIED"
    | "SUPER_ADMIN"
    | "INTERNAL_ADMIN"
    | "EXTERNAL_ADMIN";
}
export type Type = $.presentation.content.Admin.Role;

export const num2name = {
  0: "UNSPECIFIED",
  2: "SUPER_ADMIN",
  3: "INTERNAL_ADMIN",
  4: "EXTERNAL_ADMIN",
} as const;

export const name2num = {
  UNSPECIFIED: 0,
  SUPER_ADMIN: 2,
  INTERNAL_ADMIN: 3,
  EXTERNAL_ADMIN: 4,
} as const;
