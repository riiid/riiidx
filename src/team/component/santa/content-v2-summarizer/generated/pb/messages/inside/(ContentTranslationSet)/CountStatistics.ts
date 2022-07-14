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

export declare namespace $.inside.ContentTranslationSet {
  export interface CountStatistics {
    total: string;
    untranslated: string;
    unreviewed: string;
    ready: string;
  }
}
export type Type = $.inside.ContentTranslationSet.CountStatistics;

export function getDefaultValue(): $.inside.ContentTranslationSet.CountStatistics {
  return {
    total: "0",
    untranslated: "0",
    unreviewed: "0",
    ready: "0",
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTranslationSet.CountStatistics>): $.inside.ContentTranslationSet.CountStatistics {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTranslationSet.CountStatistics): unknown {
  const result: any = {};
  if (value.total !== undefined) result.total = tsValueToJsonValueFns.uint64(value.total);
  if (value.untranslated !== undefined) result.untranslated = tsValueToJsonValueFns.uint64(value.untranslated);
  if (value.unreviewed !== undefined) result.unreviewed = tsValueToJsonValueFns.uint64(value.unreviewed);
  if (value.ready !== undefined) result.ready = tsValueToJsonValueFns.uint64(value.ready);
  return result;
}

export function decodeJson(value: any): $.inside.ContentTranslationSet.CountStatistics {
  const result = getDefaultValue();
  if (value.total !== undefined) result.total = jsonValueToTsValueFns.uint64(value.total);
  if (value.untranslated !== undefined) result.untranslated = jsonValueToTsValueFns.uint64(value.untranslated);
  if (value.unreviewed !== undefined) result.unreviewed = jsonValueToTsValueFns.uint64(value.unreviewed);
  if (value.ready !== undefined) result.ready = jsonValueToTsValueFns.uint64(value.ready);
  return result;
}

export function encodeBinary(value: $.inside.ContentTranslationSet.CountStatistics): Uint8Array {
  const result: WireMessage = [];
  if (value.total !== undefined) {
    const tsValue = value.total;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.untranslated !== undefined) {
    const tsValue = value.untranslated;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.unreviewed !== undefined) {
    const tsValue = value.unreviewed;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.ready !== undefined) {
    const tsValue = value.ready;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentTranslationSet.CountStatistics {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.total = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.untranslated = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.unreviewed = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.ready = value;
  }
  return result;
}
