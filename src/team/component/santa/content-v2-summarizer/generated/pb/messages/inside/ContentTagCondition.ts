import {
  Type as Comparison,
  name2num,
  num2name,
} from "./(ContentTagCondition)/Comparison.ts";
import {
  Type as ContentTagValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ContentTagValue.ts";
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
  export interface ContentTagCondition {
    key: string;
    comparison: Comparison;
    value?: ContentTagValue;
  }
}
export type Type = $.inside.ContentTagCondition;

export function getDefaultValue(): $.inside.ContentTagCondition {
  return {
    key: "",
    comparison: "UNSPECIFIED",
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTagCondition>): $.inside.ContentTagCondition {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTagCondition): unknown {
  const result: any = {};
  if (value.key !== undefined) result.key = tsValueToJsonValueFns.string(value.key);
  if (value.comparison !== undefined) result.comparison = tsValueToJsonValueFns.enum(value.comparison);
  if (value.value !== undefined) result.value = encodeJson_1(value.value);
  return result;
}

export function decodeJson(value: any): $.inside.ContentTagCondition {
  const result = getDefaultValue();
  if (value.key !== undefined) result.key = jsonValueToTsValueFns.string(value.key);
  if (value.comparison !== undefined) result.comparison = jsonValueToTsValueFns.enum(value.comparison) as Comparison;
  if (value.value !== undefined) result.value = decodeJson_1(value.value);
  return result;
}

export function encodeBinary(value: $.inside.ContentTagCondition): Uint8Array {
  const result: WireMessage = [];
  if (value.key !== undefined) {
    const tsValue = value.key;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.comparison !== undefined) {
    const tsValue = value.comparison;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentTagCondition {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.key = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.comparison = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
