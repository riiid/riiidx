import {
  Type as QuestionSetState,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./QuestionSetState.ts";
import {
  Type as QuestionState,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./QuestionState.ts";
import {
  Type as LessonSetState,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./LessonSetState.ts";
import {
  Type as LessonState,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./LessonState.ts";
import {
  Type as VocaState,
  encodeJson as encodeJson_7,
  decodeJson as decodeJson_7,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./VocaState.ts";
import {
  Type as ContentIdentifier,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ContentIdentifier.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../../google/protobuf/Timestamp.ts";
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

export declare namespace $.inside.contentlearning {
  export interface ContentInteractionState {
    id: string;
    userId: string;
    learningSessionId: string;
    contentIdentifier?: ContentIdentifier;
    startedAt?: Timestamp;
    completedAt?: Timestamp;
    isBookmarked: boolean;
    state?: (
      | { field: "questionSetState", value: QuestionSetState }
      | { field: "questionState", value: QuestionState }
      | { field: "lessonSetState", value: LessonSetState }
      | { field: "lessonState", value: LessonState }
      | { field: "vocaState", value: VocaState }
  );
  }
}
export type Type = $.inside.contentlearning.ContentInteractionState;

export function getDefaultValue(): $.inside.contentlearning.ContentInteractionState {
  return {
    id: "0",
    userId: "",
    learningSessionId: "0",
    contentIdentifier: undefined,
    startedAt: undefined,
    completedAt: undefined,
    isBookmarked: false,
    state: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.ContentInteractionState>): $.inside.contentlearning.ContentInteractionState {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.ContentInteractionState): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.int64(value.id);
  if (value.userId !== undefined) result.userId = tsValueToJsonValueFns.string(value.userId);
  if (value.learningSessionId !== undefined) result.learningSessionId = tsValueToJsonValueFns.uint64(value.learningSessionId);
  if (value.contentIdentifier !== undefined) result.contentIdentifier = encodeJson_1(value.contentIdentifier);
  if (value.startedAt !== undefined) result.startedAt = encodeJson_2(value.startedAt);
  if (value.completedAt !== undefined) result.completedAt = encodeJson_2(value.completedAt);
  if (value.isBookmarked !== undefined) result.isBookmarked = tsValueToJsonValueFns.bool(value.isBookmarked);
  switch (value.state?.field) {
    case "questionSetState": {
      result.questionSetState = encodeJson_3(value.state.value);
      break;
    }
    case "questionState": {
      result.questionState = encodeJson_4(value.state.value);
      break;
    }
    case "lessonSetState": {
      result.lessonSetState = encodeJson_5(value.state.value);
      break;
    }
    case "lessonState": {
      result.lessonState = encodeJson_6(value.state.value);
      break;
    }
    case "vocaState": {
      result.vocaState = encodeJson_7(value.state.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.ContentInteractionState {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.int64(value.id);
  if (value.userId !== undefined) result.userId = jsonValueToTsValueFns.string(value.userId);
  if (value.learningSessionId !== undefined) result.learningSessionId = jsonValueToTsValueFns.uint64(value.learningSessionId);
  if (value.contentIdentifier !== undefined) result.contentIdentifier = decodeJson_1(value.contentIdentifier);
  if (value.startedAt !== undefined) result.startedAt = decodeJson_2(value.startedAt);
  if (value.completedAt !== undefined) result.completedAt = decodeJson_2(value.completedAt);
  if (value.isBookmarked !== undefined) result.isBookmarked = jsonValueToTsValueFns.bool(value.isBookmarked);
  if (value.questionSetState !== undefined) result.state = {field: "questionSetState", value: decodeJson_3(value.questionSetState)};
  if (value.questionState !== undefined) result.state = {field: "questionState", value: decodeJson_4(value.questionState)};
  if (value.lessonSetState !== undefined) result.state = {field: "lessonSetState", value: decodeJson_5(value.lessonSetState)};
  if (value.lessonState !== undefined) result.state = {field: "lessonState", value: decodeJson_6(value.lessonState)};
  if (value.vocaState !== undefined) result.state = {field: "vocaState", value: decodeJson_7(value.vocaState)};
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.ContentInteractionState): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.userId !== undefined) {
    const tsValue = value.userId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.learningSessionId !== undefined) {
    const tsValue = value.learningSessionId;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.contentIdentifier !== undefined) {
    const tsValue = value.contentIdentifier;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.startedAt !== undefined) {
    const tsValue = value.startedAt;
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.completedAt !== undefined) {
    const tsValue = value.completedAt;
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.isBookmarked !== undefined) {
    const tsValue = value.isBookmarked;
    result.push(
      [15, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  switch (value.state?.field) {
    case "questionSetState": {
      const tsValue = value.state.value;
      result.push(
        [8, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "questionState": {
      const tsValue = value.state.value;
      result.push(
        [9, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "lessonSetState": {
      const tsValue = value.state.value;
      result.push(
        [10, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
    case "lessonState": {
      const tsValue = value.state.value;
      result.push(
        [11, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
      );
      break;
    }
    case "vocaState": {
      const tsValue = value.state.value;
      result.push(
        [14, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "id"],
  [2, "userId"],
  [3, "learningSessionId"],
  [4, "contentIdentifier"],
  [8, "questionSetState"],
  [9, "questionState"],
  [10, "lessonSetState"],
  [11, "lessonState"],
  [12, "startedAt"],
  [13, "completedAt"],
  [14, "vocaState"],
  [15, "isBookmarked"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  state: new Set([8, 9, 10, 11, 14]),
};
const oneofFieldNamesMap = {
  state: new Map([
    [8, "questionSetState" as const],
    [9, "questionState" as const],
    [10, "lessonSetState" as const],
    [11, "lessonState" as const],
    [14, "vocaState" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.ContentInteractionState {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.learningSessionId = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contentIdentifier = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.startedAt = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.completedAt = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBookmarked = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.state;
    const oneofFieldNames = oneofFieldNamesMap.state;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [8](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [9](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [10](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
      [11](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined; },
      [14](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.state = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
