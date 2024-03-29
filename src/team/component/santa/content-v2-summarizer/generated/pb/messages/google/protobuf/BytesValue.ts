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
  export interface BytesValue {
    value: Uint8Array;
  }
}
export type Type = $.google.protobuf.BytesValue;

export function getDefaultValue(): $.google.protobuf.BytesValue {
  return {
    value: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.BytesValue>): $.google.protobuf.BytesValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.BytesValue): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.bytes(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.BytesValue {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.bytes(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.BytesValue): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.BytesValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
