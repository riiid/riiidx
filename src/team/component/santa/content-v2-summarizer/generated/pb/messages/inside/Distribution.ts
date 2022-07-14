import {
  Type as Range,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Distribution)/Range.ts";
import {
  Type as BucketOptions,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Distribution)/BucketOptions.ts";
import {
  Type as Exemplar,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(Distribution)/Exemplar.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
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

export declare namespace $.inside {
  export interface Distribution {
    count: string;
    mean: number;
    sumOfSquaredDeviation: number;
    range?: Range;
    bucketOptions?: BucketOptions;
    bucketCounts: string[];
    exemplars: Exemplar[];
  }
}
export type Type = $.inside.Distribution;

export function getDefaultValue(): $.inside.Distribution {
  return {
    count: "0",
    mean: 0,
    sumOfSquaredDeviation: 0,
    range: undefined,
    bucketOptions: undefined,
    bucketCounts: [],
    exemplars: [],
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution>): $.inside.Distribution {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution): unknown {
  const result: any = {};
  if (value.count !== undefined) result.count = tsValueToJsonValueFns.int64(value.count);
  if (value.mean !== undefined) result.mean = tsValueToJsonValueFns.double(value.mean);
  if (value.sumOfSquaredDeviation !== undefined) result.sumOfSquaredDeviation = tsValueToJsonValueFns.double(value.sumOfSquaredDeviation);
  if (value.range !== undefined) result.range = encodeJson_1(value.range);
  if (value.bucketOptions !== undefined) result.bucketOptions = encodeJson_2(value.bucketOptions);
  result.bucketCounts = value.bucketCounts.map(value => tsValueToJsonValueFns.int64(value));
  result.exemplars = value.exemplars.map(value => encodeJson_3(value));
  return result;
}

export function decodeJson(value: any): $.inside.Distribution {
  const result = getDefaultValue();
  if (value.count !== undefined) result.count = jsonValueToTsValueFns.int64(value.count);
  if (value.mean !== undefined) result.mean = jsonValueToTsValueFns.double(value.mean);
  if (value.sumOfSquaredDeviation !== undefined) result.sumOfSquaredDeviation = jsonValueToTsValueFns.double(value.sumOfSquaredDeviation);
  if (value.range !== undefined) result.range = decodeJson_1(value.range);
  if (value.bucketOptions !== undefined) result.bucketOptions = decodeJson_2(value.bucketOptions);
  result.bucketCounts = value.bucketCounts?.map((value: any) => jsonValueToTsValueFns.int64(value)) ?? [];
  result.exemplars = value.exemplars?.map((value: any) => decodeJson_3(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.Distribution): Uint8Array {
  const result: WireMessage = [];
  if (value.count !== undefined) {
    const tsValue = value.count;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.mean !== undefined) {
    const tsValue = value.mean;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sumOfSquaredDeviation !== undefined) {
    const tsValue = value.sumOfSquaredDeviation;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.range !== undefined) {
    const tsValue = value.range;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.bucketOptions !== undefined) {
    const tsValue = value.bucketOptions;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.bucketCounts) {
    result.push(
      [7, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  for (const tsValue of value.exemplars) {
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Distribution {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.count = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.mean = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sumOfSquaredDeviation = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.range = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.bucketOptions = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int64(wireValues));
    if (!value.length) break collection;
    result.bucketCounts = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 10).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.exemplars = value as any;
  }
  return result;
}
