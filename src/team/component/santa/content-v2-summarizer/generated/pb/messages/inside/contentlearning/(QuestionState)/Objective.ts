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
  unpackFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning.QuestionState {
  export interface Objective {
    userAnswer: number[];
    eliminatedChoiceIndices: number[];
    correctAnswer: number[];
  }
}
export type Type = $.inside.contentlearning.QuestionState.Objective;

export function getDefaultValue(): $.inside.contentlearning.QuestionState.Objective {
  return {
    userAnswer: [],
    eliminatedChoiceIndices: [],
    correctAnswer: [],
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.QuestionState.Objective>): $.inside.contentlearning.QuestionState.Objective {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.QuestionState.Objective): unknown {
  const result: any = {};
  result.userAnswer = value.userAnswer.map(value => tsValueToJsonValueFns.int32(value));
  result.eliminatedChoiceIndices = value.eliminatedChoiceIndices.map(value => tsValueToJsonValueFns.uint32(value));
  result.correctAnswer = value.correctAnswer.map(value => tsValueToJsonValueFns.uint32(value));
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.QuestionState.Objective {
  const result = getDefaultValue();
  result.userAnswer = value.userAnswer?.map((value: any) => jsonValueToTsValueFns.int32(value)) ?? [];
  result.eliminatedChoiceIndices = value.eliminatedChoiceIndices?.map((value: any) => jsonValueToTsValueFns.uint32(value)) ?? [];
  result.correctAnswer = value.correctAnswer?.map((value: any) => jsonValueToTsValueFns.uint32(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.QuestionState.Objective): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.userAnswer) {
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  for (const tsValue of value.eliminatedChoiceIndices) {
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  for (const tsValue of value.correctAnswer) {
    result.push(
      [3, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.QuestionState.Objective {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues));
    if (!value.length) break collection;
    result.userAnswer = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint32(wireValues));
    if (!value.length) break collection;
    result.eliminatedChoiceIndices = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint32(wireValues));
    if (!value.length) break collection;
    result.correctAnswer = value as any;
  }
  return result;
}
