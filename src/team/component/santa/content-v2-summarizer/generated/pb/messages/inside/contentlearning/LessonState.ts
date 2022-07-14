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

export declare namespace $.inside.contentlearning {
  export interface LessonState {
    lessonId: string;
    isCompleted: boolean;
    elapsedTimeMs: string;
    id: string;
    isBookmarked: boolean;
  }
}
export type Type = $.inside.contentlearning.LessonState;

export function getDefaultValue(): $.inside.contentlearning.LessonState {
  return {
    lessonId: "",
    isCompleted: false,
    elapsedTimeMs: "0",
    id: "0",
    isBookmarked: false,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.LessonState>): $.inside.contentlearning.LessonState {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.LessonState): unknown {
  const result: any = {};
  if (value.lessonId !== undefined) result.lessonId = tsValueToJsonValueFns.string(value.lessonId);
  if (value.isCompleted !== undefined) result.isCompleted = tsValueToJsonValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = tsValueToJsonValueFns.int64(value.elapsedTimeMs);
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.int64(value.id);
  if (value.isBookmarked !== undefined) result.isBookmarked = tsValueToJsonValueFns.bool(value.isBookmarked);
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.LessonState {
  const result = getDefaultValue();
  if (value.lessonId !== undefined) result.lessonId = jsonValueToTsValueFns.string(value.lessonId);
  if (value.isCompleted !== undefined) result.isCompleted = jsonValueToTsValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = jsonValueToTsValueFns.int64(value.elapsedTimeMs);
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.int64(value.id);
  if (value.isBookmarked !== undefined) result.isBookmarked = jsonValueToTsValueFns.bool(value.isBookmarked);
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.LessonState): Uint8Array {
  const result: WireMessage = [];
  if (value.lessonId !== undefined) {
    const tsValue = value.lessonId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isCompleted !== undefined) {
    const tsValue = value.isCompleted;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.elapsedTimeMs !== undefined) {
    const tsValue = value.elapsedTimeMs;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [4, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.isBookmarked !== undefined) {
    const tsValue = value.isBookmarked;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.LessonState {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lessonId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isCompleted = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.elapsedTimeMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBookmarked = value;
  }
  return result;
}
