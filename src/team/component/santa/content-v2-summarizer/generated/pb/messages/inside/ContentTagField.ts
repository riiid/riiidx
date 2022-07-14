import {
  Type as Domain,
  name2num,
  num2name,
} from "./Domain.ts";
import {
  Type as ValueType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(ContentTagField)/ValueType.ts";
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
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface ContentTagField {
    domain: Domain;
    key: string;
    description: string;
    valueType: ValueType;
    isRequiredField: boolean;
  }
}
export type Type = $.inside.ContentTagField;

export function getDefaultValue(): $.inside.ContentTagField {
  return {
    domain: "UNSPECIFIED_DOMAIN",
    key: "",
    description: "",
    valueType: "UNSPECIFIED",
    isRequiredField: false,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTagField>): $.inside.ContentTagField {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTagField): unknown {
  const result: any = {};
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.key !== undefined) result.key = tsValueToJsonValueFns.string(value.key);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.valueType !== undefined) result.valueType = tsValueToJsonValueFns.enum(value.valueType);
  if (value.isRequiredField !== undefined) result.isRequiredField = tsValueToJsonValueFns.bool(value.isRequiredField);
  return result;
}

export function decodeJson(value: any): $.inside.ContentTagField {
  const result = getDefaultValue();
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.key !== undefined) result.key = jsonValueToTsValueFns.string(value.key);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.valueType !== undefined) result.valueType = jsonValueToTsValueFns.enum(value.valueType) as ValueType;
  if (value.isRequiredField !== undefined) result.isRequiredField = jsonValueToTsValueFns.bool(value.isRequiredField);
  return result;
}

export function encodeBinary(value: $.inside.ContentTagField): Uint8Array {
  const result: WireMessage = [];
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.key !== undefined) {
    const tsValue = value.key;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.valueType !== undefined) {
    const tsValue = value.valueType;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.isRequiredField !== undefined) {
    const tsValue = value.isRequiredField;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentTagField {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.key = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.valueType = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isRequiredField = value;
  }
  return result;
}
