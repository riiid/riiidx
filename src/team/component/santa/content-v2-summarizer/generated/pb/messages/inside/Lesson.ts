import {
  Type as Snippet,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Snippet.ts";
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
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface Lesson {
    id: string;
    /** @deprecated */
    tagIds: string[];
    body?: Snippet;
    title: string;
    youtubeUrl: string;
  }
}
export type Type = $.inside.Lesson;

export function getDefaultValue(): $.inside.Lesson {
  return {
    id: "",
    tagIds: [],
    body: undefined,
    title: "",
    youtubeUrl: "",
  };
}

export function createValue(partialValue: Partial<$.inside.Lesson>): $.inside.Lesson {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Lesson): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  result.tagIds = value.tagIds.map(value => tsValueToJsonValueFns.string(value));
  if (value.body !== undefined) result.body = encodeJson_1(value.body);
  if (value.title !== undefined) result.title = tsValueToJsonValueFns.string(value.title);
  if (value.youtubeUrl !== undefined) result.youtubeUrl = tsValueToJsonValueFns.string(value.youtubeUrl);
  return result;
}

export function decodeJson(value: any): $.inside.Lesson {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  result.tagIds = value.tagIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.body !== undefined) result.body = decodeJson_1(value.body);
  if (value.title !== undefined) result.title = jsonValueToTsValueFns.string(value.title);
  if (value.youtubeUrl !== undefined) result.youtubeUrl = jsonValueToTsValueFns.string(value.youtubeUrl);
  return result;
}

export function encodeBinary(value: $.inside.Lesson): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.tagIds) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.body !== undefined) {
    const tsValue = value.body;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.title !== undefined) {
    const tsValue = value.title;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.youtubeUrl !== undefined) {
    const tsValue = value.youtubeUrl;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Lesson {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tagIds = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.body = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.title = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.youtubeUrl = value;
  }
  return result;
}
