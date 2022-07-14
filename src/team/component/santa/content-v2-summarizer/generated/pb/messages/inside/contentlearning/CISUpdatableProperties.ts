import {
  Type as QuestionState,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./QuestionState.ts";
import {
  Type as LessonState,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./LessonState.ts";
import {
  Type as VocaState,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./VocaState.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "../../google/protobuf/Timestamp.ts";
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
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "../../google/protobuf/BoolValue.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning {
  export interface CISUpdatableProperties {
    contentInteractionStateId: string;
    questionStates: QuestionState[];
    lessonStates: LessonState[];
    vocaStates: VocaState[];
    startedAt?: Timestamp;
    completedAt?: Timestamp;
    isBookmarked?: boolean;
  }
}
export type Type = $.inside.contentlearning.CISUpdatableProperties;

export function getDefaultValue(): $.inside.contentlearning.CISUpdatableProperties {
  return {
    contentInteractionStateId: "0",
    questionStates: [],
    lessonStates: [],
    vocaStates: [],
    startedAt: undefined,
    completedAt: undefined,
    isBookmarked: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.CISUpdatableProperties>): $.inside.contentlearning.CISUpdatableProperties {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.CISUpdatableProperties): unknown {
  const result: any = {};
  if (value.contentInteractionStateId !== undefined) result.contentInteractionStateId = tsValueToJsonValueFns.int64(value.contentInteractionStateId);
  result.questionStates = value.questionStates.map(value => encodeJson_1(value));
  result.lessonStates = value.lessonStates.map(value => encodeJson_2(value));
  result.vocaStates = value.vocaStates.map(value => encodeJson_3(value));
  if (value.startedAt !== undefined) result.startedAt = encodeJson_4(value.startedAt);
  if (value.completedAt !== undefined) result.completedAt = encodeJson_4(value.completedAt);
  if (value.isBookmarked !== undefined) result.isBookmarked = value.isBookmarked;
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.CISUpdatableProperties {
  const result = getDefaultValue();
  if (value.contentInteractionStateId !== undefined) result.contentInteractionStateId = jsonValueToTsValueFns.int64(value.contentInteractionStateId);
  result.questionStates = value.questionStates?.map((value: any) => decodeJson_1(value)) ?? [];
  result.lessonStates = value.lessonStates?.map((value: any) => decodeJson_2(value)) ?? [];
  result.vocaStates = value.vocaStates?.map((value: any) => decodeJson_3(value)) ?? [];
  if (value.startedAt !== undefined) result.startedAt = decodeJson_4(value.startedAt);
  if (value.completedAt !== undefined) result.completedAt = decodeJson_4(value.completedAt);
  if (value.isBookmarked !== undefined) result.isBookmarked = value.isBookmarked;
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.CISUpdatableProperties): Uint8Array {
  const result: WireMessage = [];
  if (value.contentInteractionStateId !== undefined) {
    const tsValue = value.contentInteractionStateId;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  for (const tsValue of value.questionStates) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.lessonStates) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.vocaStates) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.startedAt !== undefined) {
    const tsValue = value.startedAt;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.completedAt !== undefined) {
    const tsValue = value.completedAt;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.isBookmarked !== undefined) {
    const tsValue = value.isBookmarked;
    result.push(
      [7, ((tsValue) => ({ type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }))({ value: tsValue })],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.CISUpdatableProperties {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.contentInteractionStateId = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.questionStates = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.lessonStates = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.vocaStates = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.startedAt = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.completedAt = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = (wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined)?.value;
    if (value === undefined) break field;
    result.isBookmarked = value;
  }
  return result;
}
