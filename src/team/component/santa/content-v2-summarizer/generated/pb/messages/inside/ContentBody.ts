import {
  Type as QuestionSet,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./QuestionSet.ts";
import {
  Type as LessonSet,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./LessonSet.ts";
import {
  Type as Lesson,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./Lesson.ts";
import {
  Type as Question,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Question.ts";
import {
  Type as Vocabulary,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./Vocabulary.ts";
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
  export interface ContentBody {
    attachedResourceIds: string[];
    content?: (
      | { field: "questionSet", value: QuestionSet }
      | { field: "lessonSet", value: LessonSet }
      | { field: "lesson", value: Lesson }
      | { field: "question", value: Question }
      | { field: "voca", value: Vocabulary }
  );
  }
}
export type Type = $.inside.ContentBody;

export function getDefaultValue(): $.inside.ContentBody {
  return {
    attachedResourceIds: [],
    content: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentBody>): $.inside.ContentBody {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentBody): unknown {
  const result: any = {};
  result.attachedResourceIds = value.attachedResourceIds.map(value => tsValueToJsonValueFns.string(value));
  switch (value.content?.field) {
    case "questionSet": {
      result.questionSet = encodeJson_1(value.content.value);
      break;
    }
    case "lessonSet": {
      result.lessonSet = encodeJson_2(value.content.value);
      break;
    }
    case "lesson": {
      result.lesson = encodeJson_3(value.content.value);
      break;
    }
    case "question": {
      result.question = encodeJson_4(value.content.value);
      break;
    }
    case "voca": {
      result.voca = encodeJson_5(value.content.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.ContentBody {
  const result = getDefaultValue();
  result.attachedResourceIds = value.attachedResourceIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.questionSet !== undefined) result.content = {field: "questionSet", value: decodeJson_1(value.questionSet)};
  if (value.lessonSet !== undefined) result.content = {field: "lessonSet", value: decodeJson_2(value.lessonSet)};
  if (value.lesson !== undefined) result.content = {field: "lesson", value: decodeJson_3(value.lesson)};
  if (value.question !== undefined) result.content = {field: "question", value: decodeJson_4(value.question)};
  if (value.voca !== undefined) result.content = {field: "voca", value: decodeJson_5(value.voca)};
  return result;
}

export function encodeBinary(value: $.inside.ContentBody): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.attachedResourceIds) {
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  switch (value.content?.field) {
    case "questionSet": {
      const tsValue = value.content.value;
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "lessonSet": {
      const tsValue = value.content.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "lesson": {
      const tsValue = value.content.value;
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "question": {
      const tsValue = value.content.value;
      result.push(
        [4, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "voca": {
      const tsValue = value.content.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "questionSet"],
  [2, "lessonSet"],
  [3, "lesson"],
  [4, "question"],
  [5, "voca"],
  [6, "attachedResourceIds"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  content: new Set([1, 2, 3, 4, 5]),
};
const oneofFieldNamesMap = {
  content: new Map([
    [1, "questionSet" as const],
    [2, "lessonSet" as const],
    [3, "lesson" as const],
    [4, "question" as const],
    [5, "voca" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.ContentBody {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attachedResourceIds = value as any;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.content;
    const oneofFieldNames = oneofFieldNamesMap.content;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [4](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.content = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
