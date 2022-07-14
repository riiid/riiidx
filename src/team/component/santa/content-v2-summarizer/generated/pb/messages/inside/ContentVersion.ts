import {
  Type as LanguageTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./LanguageTag.ts";
import {
  Type as Domain,
  name2num,
  num2name,
} from "./Domain.ts";
import {
  Type as ContentVersionReview,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./ContentVersionReview.ts";
import {
  Type as ContentVersionStatusType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(ContentVersion)/ContentVersionStatusType.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../google/protobuf/Timestamp.ts";
import {
  Type as ContentUploadValidationStatus,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./ContentUploadValidationStatus.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/index.ts";
import {
  default as serialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface ContentVersion {
    id: string;
    contentId: string;
    languageTag?: LanguageTag;
    domain: Domain;
    reviews: ContentVersionReview[];
    status: ContentVersionStatusType;
    createTime?: Timestamp;
    createdBy: string;
    contentBodyUrl: string;
    contentBodyUploadValidationStatus: ContentUploadValidationStatus;
    isSelected: boolean;
  }
}
export type Type = $.inside.ContentVersion;

export function getDefaultValue(): $.inside.ContentVersion {
  return {
    id: "0",
    contentId: "",
    languageTag: undefined,
    domain: "UNSPECIFIED_DOMAIN",
    reviews: [],
    status: "UNSPECIFIED",
    createTime: undefined,
    createdBy: "",
    contentBodyUrl: "",
    contentBodyUploadValidationStatus: "UNSPECIFIED_CONTENT_UPLOAD_VALIDATION_STATUS",
    isSelected: false,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentVersion>): $.inside.ContentVersion {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentVersion): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.uint64(value.id);
  if (value.contentId !== undefined) result.contentId = tsValueToJsonValueFns.string(value.contentId);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  result.reviews = value.reviews.map(value => encodeJson_2(value));
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.createTime !== undefined) result.createTime = encodeJson_3(value.createTime);
  if (value.createdBy !== undefined) result.createdBy = tsValueToJsonValueFns.string(value.createdBy);
  if (value.contentBodyUrl !== undefined) result.contentBodyUrl = tsValueToJsonValueFns.string(value.contentBodyUrl);
  if (value.contentBodyUploadValidationStatus !== undefined) result.contentBodyUploadValidationStatus = tsValueToJsonValueFns.enum(value.contentBodyUploadValidationStatus);
  if (value.isSelected !== undefined) result.isSelected = tsValueToJsonValueFns.bool(value.isSelected);
  return result;
}

export function decodeJson(value: any): $.inside.ContentVersion {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.uint64(value.id);
  if (value.contentId !== undefined) result.contentId = jsonValueToTsValueFns.string(value.contentId);
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  result.reviews = value.reviews?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as ContentVersionStatusType;
  if (value.createTime !== undefined) result.createTime = decodeJson_3(value.createTime);
  if (value.createdBy !== undefined) result.createdBy = jsonValueToTsValueFns.string(value.createdBy);
  if (value.contentBodyUrl !== undefined) result.contentBodyUrl = jsonValueToTsValueFns.string(value.contentBodyUrl);
  if (value.contentBodyUploadValidationStatus !== undefined) result.contentBodyUploadValidationStatus = jsonValueToTsValueFns.enum(value.contentBodyUploadValidationStatus) as ContentUploadValidationStatus;
  if (value.isSelected !== undefined) result.isSelected = jsonValueToTsValueFns.bool(value.isSelected);
  return result;
}

export function encodeBinary(value: $.inside.ContentVersion): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.contentId !== undefined) {
    const tsValue = value.contentId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.languageTag !== undefined) {
    const tsValue = value.languageTag;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.reviews) {
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.createdBy !== undefined) {
    const tsValue = value.createdBy;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contentBodyUrl !== undefined) {
    const tsValue = value.contentBodyUrl;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contentBodyUploadValidationStatus !== undefined) {
    const tsValue = value.contentBodyUploadValidationStatus;
    result.push(
      [10, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.isSelected !== undefined) {
    const tsValue = value.isSelected;
    result.push(
      [11, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentVersion {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.languageTag = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.reviews = value as any;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.createdBy = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentBodyUrl = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.contentBodyUploadValidationStatus = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isSelected = value;
  }
  return result;
}
