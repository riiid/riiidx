import {
  Type as Domain,
  name2num,
  num2name,
} from "./Domain.ts";
import {
  Type as TagType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./TagType.ts";
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
  export interface Tag {
    id: string;
    description: string;
    domain: Domain;
    isRequiredInContentInfo: boolean;
    type: TagType;
  }
}
export type Type = $.inside.Tag;

export function getDefaultValue(): $.inside.Tag {
  return {
    id: "",
    description: "",
    domain: "UNSPECIFIED_DOMAIN",
    isRequiredInContentInfo: false,
    type: "UNSPECIFIED",
  };
}

export function createValue(partialValue: Partial<$.inside.Tag>): $.inside.Tag {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Tag): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.isRequiredInContentInfo !== undefined) result.isRequiredInContentInfo = tsValueToJsonValueFns.bool(value.isRequiredInContentInfo);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  return result;
}

export function decodeJson(value: any): $.inside.Tag {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.isRequiredInContentInfo !== undefined) result.isRequiredInContentInfo = jsonValueToTsValueFns.bool(value.isRequiredInContentInfo);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as TagType;
  return result;
}

export function encodeBinary(value: $.inside.Tag): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
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
  if (value.isRequiredInContentInfo !== undefined) {
    const tsValue = value.isRequiredInContentInfo;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Tag {
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
    result.description = value;
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
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isRequiredInContentInfo = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  return result;
}
