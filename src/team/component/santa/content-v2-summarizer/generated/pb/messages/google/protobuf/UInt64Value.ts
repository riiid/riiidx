import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/index.ts";
import {
  default as serialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.google.protobuf {
  export interface UInt64Value {
    value: string;
  }
}
export type Type = $.google.protobuf.UInt64Value;

export function getDefaultValue(): $.google.protobuf.UInt64Value {
  return {
    value: "0",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.UInt64Value>): $.google.protobuf.UInt64Value {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.UInt64Value): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.uint64(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.UInt64Value {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.uint64(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.UInt64Value): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.UInt64Value {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
