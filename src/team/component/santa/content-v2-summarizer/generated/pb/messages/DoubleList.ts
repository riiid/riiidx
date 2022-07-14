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

export declare namespace $ {
  export interface DoubleList {
    values: number[];
  }
}
export type Type = $.DoubleList;

export function getDefaultValue(): $.DoubleList {
  return {
    values: [],
  };
}

export function createValue(partialValue: Partial<$.DoubleList>): $.DoubleList {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.DoubleList): unknown {
  const result: any = {};
  result.values = value.values.map(value => tsValueToJsonValueFns.double(value));
  return result;
}

export function decodeJson(value: any): $.DoubleList {
  const result = getDefaultValue();
  result.values = value.values?.map((value: any) => jsonValueToTsValueFns.double(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.DoubleList): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.values) {
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.DoubleList {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.double(wireValues));
    if (!value.length) break collection;
    result.values = value as any;
  }
  return result;
}
