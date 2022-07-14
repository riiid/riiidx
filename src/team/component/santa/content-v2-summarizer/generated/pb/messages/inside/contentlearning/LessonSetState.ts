import {
  Type as LessonState,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./LessonState.ts";
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

export declare namespace $.inside.contentlearning {
  export interface LessonSetState {
    isCompleted: boolean;
    elapsedTimeMs: string;
    lessonStates: LessonState[];
  }
}
export type Type = $.inside.contentlearning.LessonSetState;

export function getDefaultValue(): $.inside.contentlearning.LessonSetState {
  return {
    isCompleted: false,
    elapsedTimeMs: "0",
    lessonStates: [],
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.LessonSetState>): $.inside.contentlearning.LessonSetState {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.LessonSetState): unknown {
  const result: any = {};
  if (value.isCompleted !== undefined) result.isCompleted = tsValueToJsonValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = tsValueToJsonValueFns.int64(value.elapsedTimeMs);
  result.lessonStates = value.lessonStates.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.LessonSetState {
  const result = getDefaultValue();
  if (value.isCompleted !== undefined) result.isCompleted = jsonValueToTsValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = jsonValueToTsValueFns.int64(value.elapsedTimeMs);
  result.lessonStates = value.lessonStates?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.LessonSetState): Uint8Array {
  const result: WireMessage = [];
  if (value.isCompleted !== undefined) {
    const tsValue = value.isCompleted;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.elapsedTimeMs !== undefined) {
    const tsValue = value.elapsedTimeMs;
    result.push(
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  for (const tsValue of value.lessonStates) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.LessonSetState {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isCompleted = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.elapsedTimeMs = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.lessonStates = value as any;
  }
  return result;
}
