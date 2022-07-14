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
  unpackFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.Distribution.BucketOptions {
  export interface Explicit {
    bounds: number[];
  }
}
export type Type = $.inside.Distribution.BucketOptions.Explicit;

export function getDefaultValue(): $.inside.Distribution.BucketOptions.Explicit {
  return {
    bounds: [],
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution.BucketOptions.Explicit>): $.inside.Distribution.BucketOptions.Explicit {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution.BucketOptions.Explicit): unknown {
  const result: any = {};
  result.bounds = value.bounds.map(value => tsValueToJsonValueFns.double(value));
  return result;
}

export function decodeJson(value: any): $.inside.Distribution.BucketOptions.Explicit {
  const result = getDefaultValue();
  result.bounds = value.bounds?.map((value: any) => jsonValueToTsValueFns.double(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.Distribution.BucketOptions.Explicit): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.bounds) {
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Distribution.BucketOptions.Explicit {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.double(wireValues));
    if (!value.length) break collection;
    result.bounds = value as any;
  }
  return result;
}
