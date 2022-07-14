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
  Type as StringList,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../StringList.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../google/protobuf/Timestamp.ts";
import {
  Type as CountStatistics,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(ContentTranslationSet)/CountStatistics.ts";
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
  export interface ContentTranslationSet {
    id: string;
    domain: Domain;
    sourceLanguageTag?: LanguageTag;
    targetLanguageTag?: LanguageTag;
    reviewers?: StringList;
    translators?: StringList;
    creator: string;
    createTime?: Timestamp;
    description: string;
    countStatistics?: CountStatistics;
  }
}
export type Type = $.inside.ContentTranslationSet;

export function getDefaultValue(): $.inside.ContentTranslationSet {
  return {
    id: "0",
    domain: "UNSPECIFIED_DOMAIN",
    sourceLanguageTag: undefined,
    targetLanguageTag: undefined,
    reviewers: undefined,
    translators: undefined,
    creator: "",
    createTime: undefined,
    description: "",
    countStatistics: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTranslationSet>): $.inside.ContentTranslationSet {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTranslationSet): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.uint64(value.id);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.sourceLanguageTag !== undefined) result.sourceLanguageTag = encodeJson_1(value.sourceLanguageTag);
  if (value.targetLanguageTag !== undefined) result.targetLanguageTag = encodeJson_1(value.targetLanguageTag);
  if (value.reviewers !== undefined) result.reviewers = encodeJson_2(value.reviewers);
  if (value.translators !== undefined) result.translators = encodeJson_2(value.translators);
  if (value.creator !== undefined) result.creator = tsValueToJsonValueFns.string(value.creator);
  if (value.createTime !== undefined) result.createTime = encodeJson_3(value.createTime);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.countStatistics !== undefined) result.countStatistics = encodeJson_4(value.countStatistics);
  return result;
}

export function decodeJson(value: any): $.inside.ContentTranslationSet {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.uint64(value.id);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.sourceLanguageTag !== undefined) result.sourceLanguageTag = decodeJson_1(value.sourceLanguageTag);
  if (value.targetLanguageTag !== undefined) result.targetLanguageTag = decodeJson_1(value.targetLanguageTag);
  if (value.reviewers !== undefined) result.reviewers = decodeJson_2(value.reviewers);
  if (value.translators !== undefined) result.translators = decodeJson_2(value.translators);
  if (value.creator !== undefined) result.creator = jsonValueToTsValueFns.string(value.creator);
  if (value.createTime !== undefined) result.createTime = decodeJson_3(value.createTime);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.countStatistics !== undefined) result.countStatistics = decodeJson_4(value.countStatistics);
  return result;
}

export function encodeBinary(value: $.inside.ContentTranslationSet): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.sourceLanguageTag !== undefined) {
    const tsValue = value.sourceLanguageTag;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.targetLanguageTag !== undefined) {
    const tsValue = value.targetLanguageTag;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.reviewers !== undefined) {
    const tsValue = value.reviewers;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.translators !== undefined) {
    const tsValue = value.translators;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.creator !== undefined) {
    const tsValue = value.creator;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.countStatistics !== undefined) {
    const tsValue = value.countStatistics;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentTranslationSet {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.sourceLanguageTag = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.targetLanguageTag = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.reviewers = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.translators = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.creator = value;
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.countStatistics = value;
  }
  return result;
}
