import {
  Type as UInt32List,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../../UInt32List.ts";
import {
  Type as Snippet,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../Snippet.ts";
import {
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
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.Question {
  export interface Objective {
    choices: Snippet[];
    choiceTranslations: Snippet[];
    answers?: (
      | { field: "orAnswers", value: UInt32List }
      | { field: "andAnswers", value: UInt32List }
  );
  }
}
export type Type = $.inside.Question.Objective;

export function getDefaultValue(): $.inside.Question.Objective {
  return {
    choices: [],
    choiceTranslations: [],
    answers: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Question.Objective>): $.inside.Question.Objective {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Question.Objective): unknown {
  const result: any = {};
  result.choices = value.choices.map(value => encodeJson_1(value));
  result.choiceTranslations = value.choiceTranslations.map(value => encodeJson_1(value));
  switch (value.answers?.field) {
    case "orAnswers": {
      result.orAnswers = encodeJson_2(value.answers.value);
      break;
    }
    case "andAnswers": {
      result.andAnswers = encodeJson_2(value.answers.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.Question.Objective {
  const result = getDefaultValue();
  result.choices = value.choices?.map((value: any) => decodeJson_1(value)) ?? [];
  result.choiceTranslations = value.choiceTranslations?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.orAnswers !== undefined) result.answers = {field: "orAnswers", value: decodeJson_2(value.orAnswers)};
  if (value.andAnswers !== undefined) result.answers = {field: "andAnswers", value: decodeJson_2(value.andAnswers)};
  return result;
}

export function encodeBinary(value: $.inside.Question.Objective): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.choices) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.choiceTranslations) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  switch (value.answers?.field) {
    case "orAnswers": {
      const tsValue = value.answers.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "andAnswers": {
      const tsValue = value.answers.value;
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "choices"],
  [2, "orAnswers"],
  [3, "andAnswers"],
  [4, "choiceTranslations"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  answers: new Set([2, 3]),
};
const oneofFieldNamesMap = {
  answers: new Map([
    [2, "orAnswers" as const],
    [3, "andAnswers" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.Question.Objective {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.choices = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.choiceTranslations = value as any;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.answers;
    const oneofFieldNames = oneofFieldNamesMap.answers;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.answers = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
