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
} from "../../../google/protobuf/StringValue.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning.QuestionState {
  export interface Subjective {
    userAnswer?: string;
    correctAnswer: string[];
  }
}
export type Type = $.inside.contentlearning.QuestionState.Subjective;

export function getDefaultValue(): $.inside.contentlearning.QuestionState.Subjective {
  return {
    userAnswer: undefined,
    correctAnswer: [],
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.QuestionState.Subjective>): $.inside.contentlearning.QuestionState.Subjective {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.QuestionState.Subjective): unknown {
  const result: any = {};
  if (value.userAnswer !== undefined) result.userAnswer = value.userAnswer;
  result.correctAnswer = value.correctAnswer;
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.QuestionState.Subjective {
  const result = getDefaultValue();
  if (value.userAnswer !== undefined) result.userAnswer = value.userAnswer;
  result.correctAnswer = value.correctAnswer ?? [];
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.QuestionState.Subjective): Uint8Array {
  const result: WireMessage = [];
  if (value.userAnswer !== undefined) {
    const tsValue = value.userAnswer;
    result.push(
      [1, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }))({ value: tsValue })],
    );
  }
  for (const tsValue of value.correctAnswer) {
    result.push(
      [2, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }))({ value: tsValue })],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.QuestionState.Subjective {
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
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined)?.value).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.correctAnswer = value as any;
  }
  return result;
}
