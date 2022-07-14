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
  export interface DoubleValue {
    value: number;
  }
}
export type Type = $.google.protobuf.DoubleValue;

export function getDefaultValue(): $.google.protobuf.DoubleValue {
  return {
    value: 0,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.DoubleValue>): $.google.protobuf.DoubleValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.DoubleValue): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.double(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.DoubleValue {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.double(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.DoubleValue): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.DoubleValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
