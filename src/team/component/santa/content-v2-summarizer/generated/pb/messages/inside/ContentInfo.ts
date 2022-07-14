import {
  Type as Domain,
  name2num,
  num2name,
} from "./Domain.ts";
import {
  Type as LanguageTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./LanguageTag.ts";
import {
  Type as ContentStatus,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./ContentStatus.ts";
import {
  Type as ContentType,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./ContentType.ts";
import {
  Type as ContentTag,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./ContentTag.ts";
import {
  Type as Country,
  name2num as name2num_3,
  num2name as num2name_3,
} from "./Country.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../google/protobuf/Timestamp.ts";
import {
  Type as ContentUploadValidationStatus,
  name2num as name2num_4,
  num2name as num2name_4,
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
  unpackFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface ContentInfo {
    contentId: string;
    versionId: string;
    domain: Domain;
    languageTag?: LanguageTag;
    status: ContentStatus;
    contentType: ContentType;
    tags: ContentTag[];
    regions: Country[];
    createTime?: Timestamp;
    initialCreateTime?: Timestamp;
    updateTime?: Timestamp;
    contentUrl: string;
    contentUploadValidationStatus: ContentUploadValidationStatus;
    /** @deprecated */
    createdBy: string;
    updatedBy: string;
    /** @deprecated */
    reviewedBy: string;
    /** @deprecated */
    isReviewed: boolean;
  }
}
export type Type = $.inside.ContentInfo;

export function getDefaultValue(): $.inside.ContentInfo {
  return {
    contentId: "",
    versionId: "0",
    domain: "UNSPECIFIED_DOMAIN",
    languageTag: undefined,
    status: "UNSPECIFIED_CONTENT_STATUS",
    contentType: "UNSPECIFIED_CONTENT_TYPE",
    tags: [],
    regions: [],
    createTime: undefined,
    initialCreateTime: undefined,
    updateTime: undefined,
    contentUrl: "",
    contentUploadValidationStatus: "UNSPECIFIED_CONTENT_UPLOAD_VALIDATION_STATUS",
    createdBy: "",
    updatedBy: "",
    reviewedBy: "",
    isReviewed: false,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentInfo>): $.inside.ContentInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentInfo): unknown {
  const result: any = {};
  if (value.contentId !== undefined) result.contentId = tsValueToJsonValueFns.string(value.contentId);
  if (value.versionId !== undefined) result.versionId = tsValueToJsonValueFns.uint64(value.versionId);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.contentType !== undefined) result.contentType = tsValueToJsonValueFns.enum(value.contentType);
  result.tags = value.tags.map(value => encodeJson_2(value));
  result.regions = value.regions.map(value => tsValueToJsonValueFns.enum(value));
  if (value.createTime !== undefined) result.createTime = encodeJson_3(value.createTime);
  if (value.initialCreateTime !== undefined) result.initialCreateTime = encodeJson_3(value.initialCreateTime);
  if (value.updateTime !== undefined) result.updateTime = encodeJson_3(value.updateTime);
  if (value.contentUrl !== undefined) result.contentUrl = tsValueToJsonValueFns.string(value.contentUrl);
  if (value.contentUploadValidationStatus !== undefined) result.contentUploadValidationStatus = tsValueToJsonValueFns.enum(value.contentUploadValidationStatus);
  if (value.createdBy !== undefined) result.createdBy = tsValueToJsonValueFns.string(value.createdBy);
  if (value.updatedBy !== undefined) result.updatedBy = tsValueToJsonValueFns.string(value.updatedBy);
  if (value.reviewedBy !== undefined) result.reviewedBy = tsValueToJsonValueFns.string(value.reviewedBy);
  if (value.isReviewed !== undefined) result.isReviewed = tsValueToJsonValueFns.bool(value.isReviewed);
  return result;
}

export function decodeJson(value: any): $.inside.ContentInfo {
  const result = getDefaultValue();
  if (value.contentId !== undefined) result.contentId = jsonValueToTsValueFns.string(value.contentId);
  if (value.versionId !== undefined) result.versionId = jsonValueToTsValueFns.uint64(value.versionId);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as ContentStatus;
  if (value.contentType !== undefined) result.contentType = jsonValueToTsValueFns.enum(value.contentType) as ContentType;
  result.tags = value.tags?.map((value: any) => decodeJson_2(value)) ?? [];
  result.regions = value.regions?.map((value: any) => jsonValueToTsValueFns.enum(value) as Country) ?? [];
  if (value.createTime !== undefined) result.createTime = decodeJson_3(value.createTime);
  if (value.initialCreateTime !== undefined) result.initialCreateTime = decodeJson_3(value.initialCreateTime);
  if (value.updateTime !== undefined) result.updateTime = decodeJson_3(value.updateTime);
  if (value.contentUrl !== undefined) result.contentUrl = jsonValueToTsValueFns.string(value.contentUrl);
  if (value.contentUploadValidationStatus !== undefined) result.contentUploadValidationStatus = jsonValueToTsValueFns.enum(value.contentUploadValidationStatus) as ContentUploadValidationStatus;
  if (value.createdBy !== undefined) result.createdBy = jsonValueToTsValueFns.string(value.createdBy);
  if (value.updatedBy !== undefined) result.updatedBy = jsonValueToTsValueFns.string(value.updatedBy);
  if (value.reviewedBy !== undefined) result.reviewedBy = jsonValueToTsValueFns.string(value.reviewedBy);
  if (value.isReviewed !== undefined) result.isReviewed = jsonValueToTsValueFns.bool(value.isReviewed);
  return result;
}

export function encodeBinary(value: $.inside.ContentInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.contentId !== undefined) {
    const tsValue = value.contentId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.versionId !== undefined) {
    const tsValue = value.versionId;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.languageTag !== undefined) {
    const tsValue = value.languageTag;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.contentType !== undefined) {
    const tsValue = value.contentType;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  for (const tsValue of value.tags) {
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.regions) {
    result.push(
      [8, { type: WireType.Varint as const, value: new Long(name2num_3[tsValue as keyof typeof name2num_3]) }],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.initialCreateTime !== undefined) {
    const tsValue = value.initialCreateTime;
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.updateTime !== undefined) {
    const tsValue = value.updateTime;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.contentUrl !== undefined) {
    const tsValue = value.contentUrl;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contentUploadValidationStatus !== undefined) {
    const tsValue = value.contentUploadValidationStatus;
    result.push(
      [13, { type: WireType.Varint as const, value: new Long(name2num_4[tsValue as keyof typeof name2num_4]) }],
    );
  }
  if (value.createdBy !== undefined) {
    const tsValue = value.createdBy;
    result.push(
      [14, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.updatedBy !== undefined) {
    const tsValue = value.updatedBy;
    result.push(
      [15, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.reviewedBy !== undefined) {
    const tsValue = value.reviewedBy;
    result.push(
      [16, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isReviewed !== undefined) {
    const tsValue = value.isReviewed;
    result.push(
      [17, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.versionId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.languageTag = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.contentType = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tags = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name_3[num as keyof typeof num2name_3]);
    if (!value.length) break collection;
    result.regions = value as any;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.initialCreateTime = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.updateTime = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentUrl = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_4[wireValue.value[0] as keyof typeof num2name_4] : undefined;
    if (value === undefined) break field;
    result.contentUploadValidationStatus = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.createdBy = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.updatedBy = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.reviewedBy = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isReviewed = value;
  }
  return result;
}
