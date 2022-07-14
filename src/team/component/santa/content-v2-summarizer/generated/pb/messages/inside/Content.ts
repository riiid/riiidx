import {
  Type as QuestionSolving,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./QuestionSolving.ts";
import {
  Type as LessonSet,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./LessonSet.ts";
import {
  Type as Lesson,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Lesson.ts";
import {
  Type as Question,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./Question.ts";
import {
  Type as Status,
  name2num,
  num2name,
} from "./(Content)/Status.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp.ts";
import {
  Type as Domain,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Domain.ts";
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
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface Content {
    contentId: string;
    versionId: string;
    status: Status;
    createTime?: Timestamp;
    tagIds: string[];
    initialCreateTime?: Timestamp;
    updateTime?: Timestamp;
    domain: Domain;
    view?: (
      | { field: "questionSolving", value: QuestionSolving }
      | { field: "lessonSet", value: LessonSet }
      | { field: "lesson", value: Lesson }
      | { field: "question", value: Question }
  );
  }
}
export type Type = $.inside.Content;

export function getDefaultValue(): $.inside.Content {
  return {
    contentId: "",
    versionId: "0",
    status: "UNSPECIFIED",
    createTime: undefined,
    tagIds: [],
    initialCreateTime: undefined,
    updateTime: undefined,
    domain: "UNSPECIFIED_DOMAIN",
    view: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Content>): $.inside.Content {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Content): unknown {
  const result: any = {};
  if (value.contentId !== undefined) result.contentId = tsValueToJsonValueFns.string(value.contentId);
  if (value.versionId !== undefined) result.versionId = tsValueToJsonValueFns.uint64(value.versionId);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.createTime !== undefined) result.createTime = encodeJson_1(value.createTime);
  result.tagIds = value.tagIds.map(value => tsValueToJsonValueFns.string(value));
  if (value.initialCreateTime !== undefined) result.initialCreateTime = encodeJson_1(value.initialCreateTime);
  if (value.updateTime !== undefined) result.updateTime = encodeJson_1(value.updateTime);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  switch (value.view?.field) {
    case "questionSolving": {
      result.questionSolving = encodeJson_2(value.view.value);
      break;
    }
    case "lessonSet": {
      result.lessonSet = encodeJson_3(value.view.value);
      break;
    }
    case "lesson": {
      result.lesson = encodeJson_4(value.view.value);
      break;
    }
    case "question": {
      result.question = encodeJson_5(value.view.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.Content {
  const result = getDefaultValue();
  if (value.contentId !== undefined) result.contentId = jsonValueToTsValueFns.string(value.contentId);
  if (value.versionId !== undefined) result.versionId = jsonValueToTsValueFns.uint64(value.versionId);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as Status;
  if (value.createTime !== undefined) result.createTime = decodeJson_1(value.createTime);
  result.tagIds = value.tagIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.initialCreateTime !== undefined) result.initialCreateTime = decodeJson_1(value.initialCreateTime);
  if (value.updateTime !== undefined) result.updateTime = decodeJson_1(value.updateTime);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.questionSolving !== undefined) result.view = {field: "questionSolving", value: decodeJson_2(value.questionSolving)};
  if (value.lessonSet !== undefined) result.view = {field: "lessonSet", value: decodeJson_3(value.lessonSet)};
  if (value.lesson !== undefined) result.view = {field: "lesson", value: decodeJson_4(value.lesson)};
  if (value.question !== undefined) result.view = {field: "question", value: decodeJson_5(value.question)};
  return result;
}

export function encodeBinary(value: $.inside.Content): Uint8Array {
  const result: WireMessage = [];
  if (value.contentId !== undefined) {
    const tsValue = value.contentId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.versionId !== undefined) {
    const tsValue = value.versionId;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.tagIds) {
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.initialCreateTime !== undefined) {
    const tsValue = value.initialCreateTime;
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.updateTime !== undefined) {
    const tsValue = value.updateTime;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [12, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  switch (value.view?.field) {
    case "questionSolving": {
      const tsValue = value.view.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "lessonSet": {
      const tsValue = value.view.value;
      result.push(
        [7, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "lesson": {
      const tsValue = value.view.value;
      result.push(
        [8, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "question": {
      const tsValue = value.view.value;
      result.push(
        [9, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "contentId"],
  [2, "versionId"],
  [3, "status"],
  [4, "createTime"],
  [5, "tagIds"],
  [6, "questionSolving"],
  [7, "lessonSet"],
  [8, "lesson"],
  [9, "question"],
  [10, "initialCreateTime"],
  [11, "updateTime"],
  [12, "domain"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  view: new Set([6, 7, 8, 9]),
};
const oneofFieldNamesMap = {
  view: new Map([
    [6, "questionSolving" as const],
    [7, "lessonSet" as const],
    [8, "lesson" as const],
    [9, "question" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.Content {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.versionId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tagIds = value as any;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.initialCreateTime = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.updateTime = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.view;
    const oneofFieldNames = oneofFieldNamesMap.view;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [8](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [9](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.view = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
