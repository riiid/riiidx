import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./google/protobuf/Timestamp.ts";
import {
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
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $ {
  export interface TimeRange {
    from?: Timestamp;
    to?: Timestamp;
  }
}
export type Type = $.TimeRange;

export function getDefaultValue(): $.TimeRange {
  return {
    from: undefined,
    to: undefined,
  };
}

export function createValue(partialValue: Partial<$.TimeRange>): $.TimeRange {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.TimeRange): unknown {
  const result: any = {};
  if (value.from !== undefined) result.from = encodeJson_1(value.from);
  if (value.to !== undefined) result.to = encodeJson_1(value.to);
  return result;
}

export function decodeJson(value: any): $.TimeRange {
  const result = getDefaultValue();
  if (value.from !== undefined) result.from = decodeJson_1(value.from);
  if (value.to !== undefined) result.to = decodeJson_1(value.to);
  return result;
}

export function encodeBinary(value: $.TimeRange): Uint8Array {
  const result: WireMessage = [];
  if (value.from !== undefined) {
    const tsValue = value.from;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.to !== undefined) {
    const tsValue = value.to;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.TimeRange {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.from = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.to = value;
  }
  return result;
}
