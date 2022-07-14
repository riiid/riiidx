import {
  Type as ContentTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ContentTag.ts";
import {
  Type as ContentTranslationStatus,
  name2num,
  num2name,
} from "./ContentTranslationStatus.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Timestamp.ts";
import {
  Type as ContentType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./ContentType.ts";
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
  export interface ContentTranslation {
    id: string;
    contentId: string;
    sourceContentUrl: string;
    targetContentUrl: string;
    tags: ContentTag[];
    status: ContentTranslationStatus;
    creator: string;
    translator: string;
    reviewer: string;
    createTime?: Timestamp;
    translateTime?: Timestamp;
    reviewTime?: Timestamp;
    contentTranslationSetId: string;
    contentType: ContentType;
  }
}
export type Type = $.inside.ContentTranslation;

export function getDefaultValue(): $.inside.ContentTranslation {
  return {
    id: "0",
    contentId: "",
    sourceContentUrl: "",
    targetContentUrl: "",
    tags: [],
    status: "UNSPECIFIED_CONTENT_TRANSLATION_STATUS",
    creator: "",
    translator: "",
    reviewer: "",
    createTime: undefined,
    translateTime: undefined,
    reviewTime: undefined,
    contentTranslationSetId: "0",
    contentType: "UNSPECIFIED_CONTENT_TYPE",
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTranslation>): $.inside.ContentTranslation {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTranslation): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.uint64(value.id);
  if (value.contentId !== undefined) result.contentId = tsValueToJsonValueFns.string(value.contentId);
  if (value.sourceContentUrl !== undefined) result.sourceContentUrl = tsValueToJsonValueFns.string(value.sourceContentUrl);
  if (value.targetContentUrl !== undefined) result.targetContentUrl = tsValueToJsonValueFns.string(value.targetContentUrl);
  result.tags = value.tags.map(value => encodeJson_1(value));
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.creator !== undefined) result.creator = tsValueToJsonValueFns.string(value.creator);
  if (value.translator !== undefined) result.translator = tsValueToJsonValueFns.string(value.translator);
  if (value.reviewer !== undefined) result.reviewer = tsValueToJsonValueFns.string(value.reviewer);
  if (value.createTime !== undefined) result.createTime = encodeJson_2(value.createTime);
  if (value.translateTime !== undefined) result.translateTime = encodeJson_2(value.translateTime);
  if (value.reviewTime !== undefined) result.reviewTime = encodeJson_2(value.reviewTime);
  if (value.contentTranslationSetId !== undefined) result.contentTranslationSetId = tsValueToJsonValueFns.uint64(value.contentTranslationSetId);
  if (value.contentType !== undefined) result.contentType = tsValueToJsonValueFns.enum(value.contentType);
  return result;
}

export function decodeJson(value: any): $.inside.ContentTranslation {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.uint64(value.id);
  if (value.contentId !== undefined) result.contentId = jsonValueToTsValueFns.string(value.contentId);
  if (value.sourceContentUrl !== undefined) result.sourceContentUrl = jsonValueToTsValueFns.string(value.sourceContentUrl);
  if (value.targetContentUrl !== undefined) result.targetContentUrl = jsonValueToTsValueFns.string(value.targetContentUrl);
  result.tags = value.tags?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as ContentTranslationStatus;
  if (value.creator !== undefined) result.creator = jsonValueToTsValueFns.string(value.creator);
  if (value.translator !== undefined) result.translator = jsonValueToTsValueFns.string(value.translator);
  if (value.reviewer !== undefined) result.reviewer = jsonValueToTsValueFns.string(value.reviewer);
  if (value.createTime !== undefined) result.createTime = decodeJson_2(value.createTime);
  if (value.translateTime !== undefined) result.translateTime = decodeJson_2(value.translateTime);
  if (value.reviewTime !== undefined) result.reviewTime = decodeJson_2(value.reviewTime);
  if (value.contentTranslationSetId !== undefined) result.contentTranslationSetId = jsonValueToTsValueFns.uint64(value.contentTranslationSetId);
  if (value.contentType !== undefined) result.contentType = jsonValueToTsValueFns.enum(value.contentType) as ContentType;
  return result;
}

export function encodeBinary(value: $.inside.ContentTranslation): Uint8Array {
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
  if (value.sourceContentUrl !== undefined) {
    const tsValue = value.sourceContentUrl;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.targetContentUrl !== undefined) {
    const tsValue = value.targetContentUrl;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.tags) {
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.creator !== undefined) {
    const tsValue = value.creator;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.translator !== undefined) {
    const tsValue = value.translator;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.reviewer !== undefined) {
    const tsValue = value.reviewer;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.translateTime !== undefined) {
    const tsValue = value.translateTime;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.reviewTime !== undefined) {
    const tsValue = value.reviewTime;
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.contentTranslationSetId !== undefined) {
    const tsValue = value.contentTranslationSetId;
    result.push(
      [13, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.contentType !== undefined) {
    const tsValue = value.contentType;
    result.push(
      [14, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentTranslation {
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.sourceContentUrl = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.targetContentUrl = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tags = value as any;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.creator = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.translator = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.reviewer = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.translateTime = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.reviewTime = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.contentTranslationSetId = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.contentType = value;
  }
  return result;
}
