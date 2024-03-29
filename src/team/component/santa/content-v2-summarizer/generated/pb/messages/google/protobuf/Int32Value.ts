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
  export interface Int32Value {
    value: number;
  }
}
export type Type = $.google.protobuf.Int32Value;

export function getDefaultValue(): $.google.protobuf.Int32Value {
  return {
    value: 0,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Int32Value>): $.google.protobuf.Int32Value {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Int32Value): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.int32(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Int32Value {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.int32(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.Int32Value): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Int32Value {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
