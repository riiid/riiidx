import {
  Type as LanguageTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./LanguageTag.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Timestamp.ts";
import {
  Type as ContentVersionReviewType,
  name2num,
  num2name,
} from "./(ContentVersionReview)/ContentVersionReviewType.ts";
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
  export interface ContentVersionReview {
    id: string;
    versionId: string;
    contentId: string;
    languageTag?: LanguageTag;
    createTime?: Timestamp;
    createdBy: string;
    type: ContentVersionReviewType;
    comment: string;
  }
}
export type Type = $.inside.ContentVersionReview;

export function getDefaultValue(): $.inside.ContentVersionReview {
  return {
    id: "0",
    versionId: "0",
    contentId: "",
    languageTag: undefined,
    createTime: undefined,
    createdBy: "",
    type: "UNSPECIFIED",
    comment: "",
  };
}

export function createValue(partialValue: Partial<$.inside.ContentVersionReview>): $.inside.ContentVersionReview {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentVersionReview): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.uint64(value.id);
  if (value.versionId !== undefined) result.versionId = tsValueToJsonValueFns.uint64(value.versionId);
  if (value.contentId !== undefined) result.contentId = tsValueToJsonValueFns.string(value.contentId);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  if (value.createTime !== undefined) result.createTime = encodeJson_2(value.createTime);
  if (value.createdBy !== undefined) result.createdBy = tsValueToJsonValueFns.string(value.createdBy);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  if (value.comment !== undefined) result.comment = tsValueToJsonValueFns.string(value.comment);
  return result;
}

export function decodeJson(value: any): $.inside.ContentVersionReview {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.uint64(value.id);
  if (value.versionId !== undefined) result.versionId = jsonValueToTsValueFns.uint64(value.versionId);
  if (value.contentId !== undefined) result.contentId = jsonValueToTsValueFns.string(value.contentId);
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  if (value.createTime !== undefined) result.createTime = decodeJson_2(value.createTime);
  if (value.createdBy !== undefined) result.createdBy = jsonValueToTsValueFns.string(value.createdBy);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as ContentVersionReviewType;
  if (value.comment !== undefined) result.comment = jsonValueToTsValueFns.string(value.comment);
  return result;
}

export function encodeBinary(value: $.inside.ContentVersionReview): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.versionId !== undefined) {
    const tsValue = value.versionId;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.contentId !== undefined) {
    const tsValue = value.contentId;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.languageTag !== undefined) {
    const tsValue = value.languageTag;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.createdBy !== undefined) {
    const tsValue = value.createdBy;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [7, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.comment !== undefined) {
    const tsValue = value.comment;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentVersionReview {
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
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.versionId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentId = value;
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
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.createdBy = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.comment = value;
  }
  return result;
}
