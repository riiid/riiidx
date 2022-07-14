import {
  Type as QuestionState,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./QuestionState.ts";
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
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../google/protobuf/BoolValue.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning {
  export interface QuestionSetState {
    isCompleted: boolean;
    elapsedTimeMs: string;
    isCorrect?: boolean;
    questionStates: QuestionState[];
  }
}
export type Type = $.inside.contentlearning.QuestionSetState;

export function getDefaultValue(): $.inside.contentlearning.QuestionSetState {
  return {
    isCompleted: false,
    elapsedTimeMs: "0",
    isCorrect: undefined,
    questionStates: [],
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.QuestionSetState>): $.inside.contentlearning.QuestionSetState {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.QuestionSetState): unknown {
  const result: any = {};
  if (value.isCompleted !== undefined) result.isCompleted = tsValueToJsonValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = tsValueToJsonValueFns.int64(value.elapsedTimeMs);
  if (value.isCorrect !== undefined) result.isCorrect = value.isCorrect;
  result.questionStates = value.questionStates.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.QuestionSetState {
  const result = getDefaultValue();
  if (value.isCompleted !== undefined) result.isCompleted = jsonValueToTsValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = jsonValueToTsValueFns.int64(value.elapsedTimeMs);
  if (value.isCorrect !== undefined) result.isCorrect = value.isCorrect;
  result.questionStates = value.questionStates?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.QuestionSetState): Uint8Array {
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
  if (value.isCorrect !== undefined) {
    const tsValue = value.isCorrect;
    result.push(
      [3, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }))({ value: tsValue })],
    );
  }
  for (const tsValue of value.questionStates) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.QuestionSetState {
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
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = (wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined)?.value;
    if (value === undefined) break field;
    result.isCorrect = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.questionStates = value as any;
  }
  return result;
}
