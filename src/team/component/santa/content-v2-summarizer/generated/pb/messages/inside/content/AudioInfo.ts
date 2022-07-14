import {
  Type as Domain,
  name2num,
  num2name,
} from "../Domain.ts";
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

export declare namespace $.inside.content {
  export interface AudioInfo {
    resourceId: string;
    domain: Domain;
    durationMs: string;
    mimeType: string;
    downloadUrl: string;
  }
}
export type Type = $.inside.content.AudioInfo;

export function getDefaultValue(): $.inside.content.AudioInfo {
  return {
    resourceId: "",
    domain: "UNSPECIFIED_DOMAIN",
    durationMs: "0",
    mimeType: "",
    downloadUrl: "",
  };
}

export function createValue(partialValue: Partial<$.inside.content.AudioInfo>): $.inside.content.AudioInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.content.AudioInfo): unknown {
  const result: any = {};
  if (value.resourceId !== undefined) result.resourceId = tsValueToJsonValueFns.string(value.resourceId);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.durationMs !== undefined) result.durationMs = tsValueToJsonValueFns.uint64(value.durationMs);
  if (value.mimeType !== undefined) result.mimeType = tsValueToJsonValueFns.string(value.mimeType);
  if (value.downloadUrl !== undefined) result.downloadUrl = tsValueToJsonValueFns.string(value.downloadUrl);
  return result;
}

export function decodeJson(value: any): $.inside.content.AudioInfo {
  const result = getDefaultValue();
  if (value.resourceId !== undefined) result.resourceId = jsonValueToTsValueFns.string(value.resourceId);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.durationMs !== undefined) result.durationMs = jsonValueToTsValueFns.uint64(value.durationMs);
  if (value.mimeType !== undefined) result.mimeType = jsonValueToTsValueFns.string(value.mimeType);
  if (value.downloadUrl !== undefined) result.downloadUrl = jsonValueToTsValueFns.string(value.downloadUrl);
  return result;
}

export function encodeBinary(value: $.inside.content.AudioInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.resourceId !== undefined) {
    const tsValue = value.resourceId;
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
  if (value.durationMs !== undefined) {
    const tsValue = value.durationMs;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.mimeType !== undefined) {
    const tsValue = value.mimeType;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.downloadUrl !== undefined) {
    const tsValue = value.downloadUrl;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.content.AudioInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.resourceId = value;
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
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.durationMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mimeType = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.downloadUrl = value;
  }
  return result;
}
