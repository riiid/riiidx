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
  Type as Country,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Country.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Timestamp.ts";
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
  export interface ContentGroupList {
    id: string;
    displayName: string;
    domain: Domain;
    languageTag?: LanguageTag;
    regions: Country[];
    contentGroupIds: string[];
    createTime?: Timestamp;
    updatedTime?: Timestamp;
  }
}
export type Type = $.inside.ContentGroupList;

export function getDefaultValue(): $.inside.ContentGroupList {
  return {
    id: "",
    displayName: "",
    domain: "UNSPECIFIED_DOMAIN",
    languageTag: undefined,
    regions: [],
    contentGroupIds: [],
    createTime: undefined,
    updatedTime: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentGroupList>): $.inside.ContentGroupList {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentGroupList): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.displayName !== undefined) result.displayName = tsValueToJsonValueFns.string(value.displayName);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  result.regions = value.regions.map(value => tsValueToJsonValueFns.enum(value));
  result.contentGroupIds = value.contentGroupIds.map(value => tsValueToJsonValueFns.string(value));
  if (value.createTime !== undefined) result.createTime = encodeJson_2(value.createTime);
  if (value.updatedTime !== undefined) result.updatedTime = encodeJson_2(value.updatedTime);
  return result;
}

export function decodeJson(value: any): $.inside.ContentGroupList {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.displayName !== undefined) result.displayName = jsonValueToTsValueFns.string(value.displayName);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  result.regions = value.regions?.map((value: any) => jsonValueToTsValueFns.enum(value) as Country) ?? [];
  result.contentGroupIds = value.contentGroupIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.createTime !== undefined) result.createTime = decodeJson_2(value.createTime);
  if (value.updatedTime !== undefined) result.updatedTime = decodeJson_2(value.updatedTime);
  return result;
}

export function encodeBinary(value: $.inside.ContentGroupList): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.displayName !== undefined) {
    const tsValue = value.displayName;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
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
  for (const tsValue of value.regions) {
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  for (const tsValue of value.contentGroupIds) {
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.updatedTime !== undefined) {
    const tsValue = value.updatedTime;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentGroupList {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.displayName = value;
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
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name_1[num as keyof typeof num2name_1]);
    if (!value.length) break collection;
    result.regions = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.contentGroupIds = value as any;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.updatedTime = value;
  }
  return result;
}
