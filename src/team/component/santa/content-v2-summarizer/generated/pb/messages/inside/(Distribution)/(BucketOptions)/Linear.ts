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

export declare namespace $.inside.Distribution.BucketOptions {
  export interface Linear {
    numFiniteBuckets: number;
    width: number;
    offset: number;
  }
}
export type Type = $.inside.Distribution.BucketOptions.Linear;

export function getDefaultValue(): $.inside.Distribution.BucketOptions.Linear {
  return {
    numFiniteBuckets: 0,
    width: 0,
    offset: 0,
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution.BucketOptions.Linear>): $.inside.Distribution.BucketOptions.Linear {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution.BucketOptions.Linear): unknown {
  const result: any = {};
  if (value.numFiniteBuckets !== undefined) result.numFiniteBuckets = tsValueToJsonValueFns.int32(value.numFiniteBuckets);
  if (value.width !== undefined) result.width = tsValueToJsonValueFns.double(value.width);
  if (value.offset !== undefined) result.offset = tsValueToJsonValueFns.double(value.offset);
  return result;
}

export function decodeJson(value: any): $.inside.Distribution.BucketOptions.Linear {
  const result = getDefaultValue();
  if (value.numFiniteBuckets !== undefined) result.numFiniteBuckets = jsonValueToTsValueFns.int32(value.numFiniteBuckets);
  if (value.width !== undefined) result.width = jsonValueToTsValueFns.double(value.width);
  if (value.offset !== undefined) result.offset = jsonValueToTsValueFns.double(value.offset);
  return result;
}

export function encodeBinary(value: $.inside.Distribution.BucketOptions.Linear): Uint8Array {
  const result: WireMessage = [];
  if (value.numFiniteBuckets !== undefined) {
    const tsValue = value.numFiniteBuckets;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.width !== undefined) {
    const tsValue = value.width;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.offset !== undefined) {
    const tsValue = value.offset;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Distribution.BucketOptions.Linear {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.numFiniteBuckets = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.width = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.offset = value;
  }
  return result;
}
