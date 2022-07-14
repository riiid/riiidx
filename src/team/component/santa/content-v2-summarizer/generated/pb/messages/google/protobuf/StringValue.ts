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
  export interface StringValue {
    value: string;
  }
}
export type Type = $.google.protobuf.StringValue;

export function getDefaultValue(): $.google.protobuf.StringValue {
  return {
    value: "",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.StringValue>): $.google.protobuf.StringValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.StringValue): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.string(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.StringValue {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.string(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.StringValue): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.StringValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
