import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../google/protobuf/Timestamp.ts";
import {
  Type as Any,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../../google/protobuf/Any.ts";
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
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.Distribution {
  export interface Exemplar {
    value: number;
    timestamp?: Timestamp;
    attachments?: Any;
  }
}
export type Type = $.inside.Distribution.Exemplar;

export function getDefaultValue(): $.inside.Distribution.Exemplar {
  return {
    value: 0,
    timestamp: undefined,
    attachments: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Distribution.Exemplar>): $.inside.Distribution.Exemplar {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Distribution.Exemplar): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.double(value.value);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  if (value.attachments !== undefined) result.attachments = encodeJson_2(value.attachments);
  return result;
}

export function decodeJson(value: any): $.inside.Distribution.Exemplar {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.double(value.value);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  if (value.attachments !== undefined) result.attachments = decodeJson_2(value.attachments);
  return result;
}

export function encodeBinary(value: $.inside.Distribution.Exemplar): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.attachments !== undefined) {
    const tsValue = value.attachments;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Distribution.Exemplar {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.attachments = value;
  }
  return result;
}
