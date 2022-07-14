import {
  Type as Objective,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(QuestionState)/Objective.ts";
import {
  Type as Subjective,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(QuestionState)/Subjective.ts";
import {
  Type as OX,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(QuestionState)/OX.ts";
import {
  Type as AnswerState,
  name2num,
  num2name,
} from "./(QuestionState)/AnswerState.ts";
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
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../google/protobuf/BoolValue.ts";
import {
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning {
  export interface QuestionState {
    questionId: string;
    isCompleted: boolean;
    elapsedTimeMs: string;
    isCorrect?: boolean;
    id: string;
    isBookmarked: boolean;
    answerState: AnswerState;
    typeSpec?: (
      | { field: "objective", value: Objective }
      | { field: "subjective", value: Subjective }
      | { field: "ox", value: OX }
  );
  }
}
export type Type = $.inside.contentlearning.QuestionState;

export function getDefaultValue(): $.inside.contentlearning.QuestionState {
  return {
    questionId: "",
    isCompleted: false,
    elapsedTimeMs: "0",
    isCorrect: undefined,
    id: "0",
    isBookmarked: false,
    answerState: "ANSWER_STATE_UNSPECIFIED",
    typeSpec: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.QuestionState>): $.inside.contentlearning.QuestionState {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.QuestionState): unknown {
  const result: any = {};
  if (value.questionId !== undefined) result.questionId = tsValueToJsonValueFns.string(value.questionId);
  if (value.isCompleted !== undefined) result.isCompleted = tsValueToJsonValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = tsValueToJsonValueFns.int64(value.elapsedTimeMs);
  if (value.isCorrect !== undefined) result.isCorrect = value.isCorrect;
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.int64(value.id);
  if (value.isBookmarked !== undefined) result.isBookmarked = tsValueToJsonValueFns.bool(value.isBookmarked);
  if (value.answerState !== undefined) result.answerState = tsValueToJsonValueFns.enum(value.answerState);
  switch (value.typeSpec?.field) {
    case "objective": {
      result.objective = encodeJson_1(value.typeSpec.value);
      break;
    }
    case "subjective": {
      result.subjective = encodeJson_2(value.typeSpec.value);
      break;
    }
    case "ox": {
      result.ox = encodeJson_3(value.typeSpec.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.QuestionState {
  const result = getDefaultValue();
  if (value.questionId !== undefined) result.questionId = jsonValueToTsValueFns.string(value.questionId);
  if (value.isCompleted !== undefined) result.isCompleted = jsonValueToTsValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = jsonValueToTsValueFns.int64(value.elapsedTimeMs);
  if (value.isCorrect !== undefined) result.isCorrect = value.isCorrect;
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.int64(value.id);
  if (value.isBookmarked !== undefined) result.isBookmarked = jsonValueToTsValueFns.bool(value.isBookmarked);
  if (value.answerState !== undefined) result.answerState = jsonValueToTsValueFns.enum(value.answerState) as AnswerState;
  if (value.objective !== undefined) result.typeSpec = {field: "objective", value: decodeJson_1(value.objective)};
  if (value.subjective !== undefined) result.typeSpec = {field: "subjective", value: decodeJson_2(value.subjective)};
  if (value.ox !== undefined) result.typeSpec = {field: "ox", value: decodeJson_3(value.ox)};
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.QuestionState): Uint8Array {
  const result: WireMessage = [];
  if (value.questionId !== undefined) {
    const tsValue = value.questionId;
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
  if (value.isCorrect !== undefined) {
    const tsValue = value.isCorrect;
    result.push(
      [4, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }))({ value: tsValue })],
    );
  }
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [8, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.isBookmarked !== undefined) {
    const tsValue = value.isBookmarked;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.answerState !== undefined) {
    const tsValue = value.answerState;
    result.push(
      [10, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  switch (value.typeSpec?.field) {
    case "objective": {
      const tsValue = value.typeSpec.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "subjective": {
      const tsValue = value.typeSpec.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "ox": {
      const tsValue = value.typeSpec.value;
      result.push(
        [7, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "questionId"],
  [2, "isCompleted"],
  [3, "elapsedTimeMs"],
  [4, "isCorrect"],
  [5, "objective"],
  [6, "subjective"],
  [7, "ox"],
  [8, "id"],
  [9, "isBookmarked"],
  [10, "answerState"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  typeSpec: new Set([5, 6, 7]),
};
const oneofFieldNamesMap = {
  typeSpec: new Map([
    [5, "objective" as const],
    [6, "subjective" as const],
    [7, "ox" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.QuestionState {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.questionId = value;
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
    const value = (wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined)?.value;
    if (value === undefined) break field;
    result.isCorrect = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBookmarked = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.answerState = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.typeSpec;
    const oneofFieldNames = oneofFieldNamesMap.typeSpec;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.typeSpec = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
