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
  export interface UInt64List {
    value: string[];
  }
}
export type Type = $.UInt64List;

export function getDefaultValue(): $.UInt64List {
  return {
    value: [],
  };
}

export function createValue(partialValue: Partial<$.UInt64List>): $.UInt64List {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.UInt64List): unknown {
  const result: any = {};
  result.value = value.value.map(value => tsValueToJsonValueFns.uint64(value));
  return result;
}

export function decodeJson(value: any): $.UInt64List {
  const result = getDefaultValue();
  result.value = value.value?.map((value: any) => jsonValueToTsValueFns.uint64(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.UInt64List): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.value) {
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.UInt64List {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint64(wireValues));
    if (!value.length) break collection;
    result.value = value as any;
  }
  return result;
}
