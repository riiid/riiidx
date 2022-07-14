export declare namespace $.inside {
  export type ContentUploadValidationStatus =
    | "UNSPECIFIED_CONTENT_UPLOAD_VALIDATION_STATUS"
    | "CONTENT_BODY_NOT_UPLOADED"
    | "VALIDATION_FAILED"
    | "VALIDATION_SUCCESS";
}
export type Type = $.inside.ContentUploadValidationStatus;

export const num2name = {
  0: "UNSPECIFIED_CONTENT_UPLOAD_VALIDATION_STATUS",
  1: "CONTENT_BODY_NOT_UPLOADED",
  2: "VALIDATION_FAILED",
  3: "VALIDATION_SUCCESS",
} as const;

export const name2num = {
  UNSPECIFIED_CONTENT_UPLOAD_VALIDATION_STATUS: 0,
  CONTENT_BODY_NOT_UPLOADED: 1,
  VALIDATION_FAILED: 2,
  VALIDATION_SUCCESS: 3,
} as const;
