import {
  Type as Domain,
  name2num,
  num2name,
} from "./Domain.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
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
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface Resource {
    id: string;
    domain: Domain;
    mimeType: string;
    downloadUrl: string;
    displayName: string;
    createTime?: Timestamp;
    createdBy: string;
    referredBy: string[];
  }
}
export type Type = $.inside.Resource;

export function getDefaultValue(): $.inside.Resource {
  return {
    id: "",
    domain: "UNSPECIFIED_DOMAIN",
    mimeType: "",
    downloadUrl: "",
    displayName: "",
    createTime: undefined,
    createdBy: "",
    referredBy: [],
  };
}

export function createValue(partialValue: Partial<$.inside.Resource>): $.inside.Resource {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Resource): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.mimeType !== undefined) result.mimeType = tsValueToJsonValueFns.string(value.mimeType);
  if (value.downloadUrl !== undefined) result.downloadUrl = tsValueToJsonValueFns.string(value.downloadUrl);
  if (value.displayName !== undefined) result.displayName = tsValueToJsonValueFns.string(value.displayName);
  if (value.createTime !== undefined) result.createTime = encodeJson_1(value.createTime);
  if (value.createdBy !== undefined) result.createdBy = tsValueToJsonValueFns.string(value.createdBy);
  result.referredBy = value.referredBy.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.inside.Resource {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.mimeType !== undefined) result.mimeType = jsonValueToTsValueFns.string(value.mimeType);
  if (value.downloadUrl !== undefined) result.downloadUrl = jsonValueToTsValueFns.string(value.downloadUrl);
  if (value.displayName !== undefined) result.displayName = jsonValueToTsValueFns.string(value.displayName);
  if (value.createTime !== undefined) result.createTime = decodeJson_1(value.createTime);
  if (value.createdBy !== undefined) result.createdBy = jsonValueToTsValueFns.string(value.createdBy);
  result.referredBy = value.referredBy?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.Resource): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.mimeType !== undefined) {
    const tsValue = value.mimeType;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.downloadUrl !== undefined) {
    const tsValue = value.downloadUrl;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.displayName !== undefined) {
    const tsValue = value.displayName;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.createdBy !== undefined) {
    const tsValue = value.createdBy;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.referredBy) {
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Resource {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mimeType = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.downloadUrl = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.displayName = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.createdBy = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.referredBy = value as any;
  }
  return result;
}
