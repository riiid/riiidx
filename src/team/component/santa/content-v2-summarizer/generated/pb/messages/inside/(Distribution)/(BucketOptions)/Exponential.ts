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
  export interface Exponential {
    numFiniteBuckets: number;
    growthFactor: number;
    scale: number;
  }
}
export type Type = $.inside.Distribution.BucketOptions.Exponential;

export function getDefaultValue(): $.inside.Distribution.BucketOptions.Exponential {
  return {
    numFiniteBuckets: 0,
    growthFactor: 0,
    scale: 0,
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution.BucketOptions.Exponential>): $.inside.Distribution.BucketOptions.Exponential {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution.BucketOptions.Exponential): unknown {
  const result: any = {};
  if (value.numFiniteBuckets !== undefined) result.numFiniteBuckets = tsValueToJsonValueFns.int32(value.numFiniteBuckets);
  if (value.growthFactor !== undefined) result.growthFactor = tsValueToJsonValueFns.double(value.growthFactor);
  if (value.scale !== undefined) result.scale = tsValueToJsonValueFns.double(value.scale);
  return result;
}

export function decodeJson(value: any): $.inside.Distribution.BucketOptions.Exponential {
  const result = getDefaultValue();
  if (value.numFiniteBuckets !== undefined) result.numFiniteBuckets = jsonValueToTsValueFns.int32(value.numFiniteBuckets);
  if (value.growthFactor !== undefined) result.growthFactor = jsonValueToTsValueFns.double(value.growthFactor);
  if (value.scale !== undefined) result.scale = jsonValueToTsValueFns.double(value.scale);
  return result;
}

export function encodeBinary(value: $.inside.Distribution.BucketOptions.Exponential): Uint8Array {
  const result: WireMessage = [];
  if (value.numFiniteBuckets !== undefined) {
    const tsValue = value.numFiniteBuckets;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.growthFactor !== undefined) {
    const tsValue = value.growthFactor;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.scale !== undefined) {
    const tsValue = value.scale;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Distribution.BucketOptions.Exponential {
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
    result.growthFactor = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.scale = value;
  }
  return result;
}
