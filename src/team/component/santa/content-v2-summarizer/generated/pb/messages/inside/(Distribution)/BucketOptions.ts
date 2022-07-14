import {
  Type as Linear,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(BucketOptions)/Linear.ts";
import {
  Type as Exponential,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(BucketOptions)/Exponential.ts";
import {
  Type as Explicit,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(BucketOptions)/Explicit.ts";
import {
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
  Field,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/index.ts";
import {
  default as serialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.Distribution {
  export interface BucketOptions {
    options?: (
      | { field: "linearBuckets", value: Linear }
      | { field: "exponentialBuckets", value: Exponential }
      | { field: "explicitBuckets", value: Explicit }
  );
  }
}
export type Type = $.inside.Distribution.BucketOptions;

export function getDefaultValue(): $.inside.Distribution.BucketOptions {
  return {
    options: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution.BucketOptions>): $.inside.Distribution.BucketOptions {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution.BucketOptions): unknown {
  const result: any = {};
  switch (value.options?.field) {
    case "linearBuckets": {
      result.linearBuckets = encodeJson_1(value.options.value);
      break;
    }
    case "exponentialBuckets": {
      result.exponentialBuckets = encodeJson_2(value.options.value);
      break;
    }
    case "explicitBuckets": {
      result.explicitBuckets = encodeJson_3(value.options.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.Distribution.BucketOptions {
  const result = getDefaultValue();
  if (value.linearBuckets !== undefined) result.options = {field: "linearBuckets", value: decodeJson_1(value.linearBuckets)};
  if (value.exponentialBuckets !== undefined) result.options = {field: "exponentialBuckets", value: decodeJson_2(value.exponentialBuckets)};
  if (value.explicitBuckets !== undefined) result.options = {field: "explicitBuckets", value: decodeJson_3(value.explicitBuckets)};
  return result;
}

export function encodeBinary(value: $.inside.Distribution.BucketOptions): Uint8Array {
  const result: WireMessage = [];
  switch (value.options?.field) {
    case "linearBuckets": {
      const tsValue = value.options.value;
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "exponentialBuckets": {
      const tsValue = value.options.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "explicitBuckets": {
      const tsValue = value.options.value;
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "linearBuckets"],
  [2, "exponentialBuckets"],
  [3, "explicitBuckets"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  options: new Set([1, 2, 3]),
};
const oneofFieldNamesMap = {
  options: new Map([
    [1, "linearBuckets" as const],
    [2, "exponentialBuckets" as const],
    [3, "explicitBuckets" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.Distribution.BucketOptions {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.options;
    const oneofFieldNames = oneofFieldNamesMap.options;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.options = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
