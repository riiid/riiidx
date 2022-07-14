import {
  Type as StringList,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../StringList.ts";
import {
  Type as UInt64List,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../UInt64List.ts";
import {
  Type as DoubleList,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../DoubleList.ts";
import {
  Type as Struct,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "../google/protobuf/Struct.ts";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface ContentTagValue {
    value?: (
      | { field: "stringValue", value: string }
      | { field: "stringList", value: StringList }
      | { field: "intValue", value: string }
      | { field: "intList", value: UInt64List }
      | { field: "doubleValue", value: number }
      | { field: "doubleList", value: DoubleList }
      | { field: "boolValue", value: boolean }
      | { field: "json", value: Struct }
  );
  }
}
export type Type = $.inside.ContentTagValue;

export function getDefaultValue(): $.inside.ContentTagValue {
  return {
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTagValue>): $.inside.ContentTagValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTagValue): unknown {
  const result: any = {};
  switch (value.value?.field) {
    case "stringValue": {
      result.stringValue = tsValueToJsonValueFns.string(value.value.value);
      break;
    }
    case "stringList": {
      result.stringList = encodeJson_1(value.value.value);
      break;
    }
    case "intValue": {
      result.intValue = tsValueToJsonValueFns.uint64(value.value.value);
      break;
    }
    case "intList": {
      result.intList = encodeJson_2(value.value.value);
      break;
    }
    case "doubleValue": {
      result.doubleValue = tsValueToJsonValueFns.double(value.value.value);
      break;
    }
    case "doubleList": {
      result.doubleList = encodeJson_3(value.value.value);
      break;
    }
    case "boolValue": {
      result.boolValue = tsValueToJsonValueFns.bool(value.value.value);
      break;
    }
    case "json": {
      result.json = encodeJson_4(value.value.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.ContentTagValue {
  const result = getDefaultValue();
  if (value.stringValue !== undefined) result.value = {field: "stringValue", value: jsonValueToTsValueFns.string(value.stringValue)};
  if (value.stringList !== undefined) result.value = {field: "stringList", value: decodeJson_1(value.stringList)};
  if (value.intValue !== undefined) result.value = {field: "intValue", value: jsonValueToTsValueFns.uint64(value.intValue)};
  if (value.intList !== undefined) result.value = {field: "intList", value: decodeJson_2(value.intList)};
  if (value.doubleValue !== undefined) result.value = {field: "doubleValue", value: jsonValueToTsValueFns.double(value.doubleValue)};
  if (value.doubleList !== undefined) result.value = {field: "doubleList", value: decodeJson_3(value.doubleList)};
  if (value.boolValue !== undefined) result.value = {field: "boolValue", value: jsonValueToTsValueFns.bool(value.boolValue)};
  if (value.json !== undefined) result.value = {field: "json", value: decodeJson_4(value.json)};
  return result;
}

export function encodeBinary(value: $.inside.ContentTagValue): Uint8Array {
  const result: WireMessage = [];
  switch (value.value?.field) {
    case "stringValue": {
      const tsValue = value.value.value;
      result.push(
        [1, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "stringList": {
      const tsValue = value.value.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "intValue": {
      const tsValue = value.value.value;
      result.push(
        [3, tsValueToWireValueFns.uint64(tsValue)],
      );
      break;
    }
    case "intList": {
      const tsValue = value.value.value;
      result.push(
        [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "doubleValue": {
      const tsValue = value.value.value;
      result.push(
        [5, tsValueToWireValueFns.double(tsValue)],
      );
      break;
    }
    case "doubleList": {
      const tsValue = value.value.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "boolValue": {
      const tsValue = value.value.value;
      result.push(
        [7, tsValueToWireValueFns.bool(tsValue)],
      );
      break;
    }
    case "json": {
      const tsValue = value.value.value;
      result.push(
        [8, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "stringValue"],
  [2, "stringList"],
  [3, "intValue"],
  [4, "intList"],
  [5, "doubleValue"],
  [6, "doubleList"],
  [7, "boolValue"],
  [8, "json"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  value: new Set([1, 2, 3, 4, 5, 6, 7, 8]),
};
const oneofFieldNamesMap = {
  value: new Map([
    [1, "stringValue" as const],
    [2, "stringList" as const],
    [3, "intValue" as const],
    [4, "intList" as const],
    [5, "doubleValue" as const],
    [6, "doubleList" as const],
    [7, "boolValue" as const],
    [8, "json" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.ContentTagValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.value;
    const oneofFieldNames = oneofFieldNamesMap.value;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValueToTsValueFns.uint64(wireValue); },
      [4](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [5](wireValue: Field) { return wireValueToTsValueFns.double(wireValue); },
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValueToTsValueFns.bool(wireValue); },
      [8](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.value = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
