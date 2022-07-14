import {
  WireMessage,
  WireType,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/index.ts";
import {
  default as serialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/serialize.ts";
import {
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../../google/protobuf/BoolValue.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning.QuestionState {
  export interface OX {
    userAnswer?: boolean;
    correctAnswer?: boolean;
  }
}
export type Type = $.inside.contentlearning.QuestionState.OX;

export function getDefaultValue(): $.inside.contentlearning.QuestionState.OX {
  return {
    userAnswer: undefined,
    correctAnswer: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.QuestionState.OX>): $.inside.contentlearning.QuestionState.OX {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.QuestionState.OX): unknown {
  const result: any = {};
  if (value.userAnswer !== undefined) result.userAnswer = value.userAnswer;
  if (value.correctAnswer !== undefined) result.correctAnswer = value.correctAnswer;
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.QuestionState.OX {
  const result = getDefaultValue();
  if (value.userAnswer !== undefined) result.userAnswer = value.userAnswer;
  if (value.correctAnswer !== undefined) result.correctAnswer = value.correctAnswer;
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.QuestionState.OX): Uint8Array {
  const result: WireMessage = [];
  if (value.userAnswer !== undefined) {
    const tsValue = value.userAnswer;
    result.push(
      [1, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }))({ value: tsValue })],
    );
  }
  if (value.correctAnswer !== undefined) {
    const tsValue = value.correctAnswer;
    result.push(
      [2, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }))({ value: tsValue })],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.QuestionState.OX {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = (wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined)?.value;
    if (value === undefined) break field;
    result.userAnswer = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = (wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined)?.value;
    if (value === undefined) break field;
    result.correctAnswer = value;
  }
  return result;
}
