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

export declare namespace $.inside.Distribution {
  export interface Range {
    min: number;
    max: number;
  }
}
export type Type = $.inside.Distribution.Range;

export function getDefaultValue(): $.inside.Distribution.Range {
  return {
    min: 0,
    max: 0,
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution.Range>): $.inside.Distribution.Range {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution.Range): unknown {
  const result: any = {};
  if (value.min !== undefined) result.min = tsValueToJsonValueFns.double(value.min);
  if (value.max !== undefined) result.max = tsValueToJsonValueFns.double(value.max);
  return result;
}

export function decodeJson(value: any): $.inside.Distribution.Range {
  const result = getDefaultValue();
  if (value.min !== undefined) result.min = jsonValueToTsValueFns.double(value.min);
  if (value.max !== undefined) result.max = jsonValueToTsValueFns.double(value.max);
  return result;
}

export function encodeBinary(value: $.inside.Distribution.Range): Uint8Array {
  const result: WireMessage = [];
  if (value.min !== undefined) {
    const tsValue = value.min;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.max !== undefined) {
    const tsValue = value.max;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Distribution.Range {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.min = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.max = value;
  }
  return result;
}
