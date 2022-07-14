import {
  Type as Header,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Header.ts";
import {
  Type as Passage,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Passage.ts";
import {
  Type as Question,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./Question.ts";
import {
  Type as Explanation,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Explanation.ts";
import {
  Type as Snippet,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./Snippet.ts";
import {
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
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface QuestionSet {
    /** @deprecated */
    headers: Header[];
    passages: Passage[];
    questions: Question[];
    explanations: Explanation[];
    description?: Snippet;
    passageTranslations: Passage[];
  }
}
export type Type = $.inside.QuestionSet;

export function getDefaultValue(): $.inside.QuestionSet {
  return {
    headers: [],
    passages: [],
    questions: [],
    explanations: [],
    description: undefined,
    passageTranslations: [],
  };
}

export function createValue(partialValue: Partial<$.inside.QuestionSet>): $.inside.QuestionSet {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.QuestionSet): unknown {
  const result: any = {};
  result.headers = value.headers.map(value => encodeJson_1(value));
  result.passages = value.passages.map(value => encodeJson_2(value));
  result.questions = value.questions.map(value => encodeJson_3(value));
  result.explanations = value.explanations.map(value => encodeJson_4(value));
  if (value.description !== undefined) result.description = encodeJson_5(value.description);
  result.passageTranslations = value.passageTranslations.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.inside.QuestionSet {
  const result = getDefaultValue();
  result.headers = value.headers?.map((value: any) => decodeJson_1(value)) ?? [];
  result.passages = value.passages?.map((value: any) => decodeJson_2(value)) ?? [];
  result.questions = value.questions?.map((value: any) => decodeJson_3(value)) ?? [];
  result.explanations = value.explanations?.map((value: any) => decodeJson_4(value)) ?? [];
  if (value.description !== undefined) result.description = decodeJson_5(value.description);
  result.passageTranslations = value.passageTranslations?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.QuestionSet): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.headers) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.passages) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.questions) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  for (const tsValue of value.explanations) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  for (const tsValue of value.passageTranslations) {
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.QuestionSet {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.headers = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.passages = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.questions = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.explanations = value as any;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.description = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.passageTranslations = value as any;
  }
  return result;
}
