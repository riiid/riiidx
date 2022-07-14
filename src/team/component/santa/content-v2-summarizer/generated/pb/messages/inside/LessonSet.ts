import {
  Type as Lesson,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Lesson.ts";
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
  export interface LessonSet {
    lessons: Lesson[];
  }
}
export type Type = $.inside.LessonSet;

export function getDefaultValue(): $.inside.LessonSet {
  return {
    lessons: [],
  };
}

export function createValue(partialValue: Partial<$.inside.LessonSet>): $.inside.LessonSet {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.LessonSet): unknown {
  const result: any = {};
  result.lessons = value.lessons.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.inside.LessonSet {
  const result = getDefaultValue();
  result.lessons = value.lessons?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.LessonSet): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.lessons) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.LessonSet {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.lessons = value as any;
  }
  return result;
}
