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

export declare namespace $ {
  export interface Page {
    page: number;
    size: number;
    totalCount: number;
  }
}
export type Type = $.Page;

export function getDefaultValue(): $.Page {
  return {
    page: 0,
    size: 0,
    totalCount: 0,
  };
}

export function createValue(partialValue: Partial<$.Page>): $.Page {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.Page): unknown {
  const result: any = {};
  if (value.page !== undefined) result.page = tsValueToJsonValueFns.uint32(value.page);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.uint32(value.size);
  if (value.totalCount !== undefined) result.totalCount = tsValueToJsonValueFns.uint32(value.totalCount);
  return result;
}

export function decodeJson(value: any): $.Page {
  const result = getDefaultValue();
  if (value.page !== undefined) result.page = jsonValueToTsValueFns.uint32(value.page);
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.uint32(value.size);
  if (value.totalCount !== undefined) result.totalCount = jsonValueToTsValueFns.uint32(value.totalCount);
  return result;
}

export function encodeBinary(value: $.Page): Uint8Array {
  const result: WireMessage = [];
  if (value.page !== undefined) {
    const tsValue = value.page;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.totalCount !== undefined) {
    const tsValue = value.totalCount;
    result.push(
      [3, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.Page {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.page = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.totalCount = value;
  }
  return result;
}
