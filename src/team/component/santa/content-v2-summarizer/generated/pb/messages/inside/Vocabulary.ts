import {
  Type as PoS,
  name2num,
  num2name,
} from "./(Vocabulary)/PoS.ts";
import {
  Type as VocaExample,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./VocaExample.ts";
import {
  Type as VoiceResourceIdsByAccent,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./VoiceResourceIdsByAccent.ts";
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
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface Vocabulary {
    id: string;
    word: string;
    voiceResourceId: string;
    pos: PoS;
    meaning: string;
    /** @deprecated */
    tagIds: string[];
    examples: VocaExample[];
    voiceResourceIdsByAccent?: VoiceResourceIdsByAccent;
    relatedVocabularies: string[];
  }
}
export type Type = $.inside.Vocabulary;

export function getDefaultValue(): $.inside.Vocabulary {
  return {
    id: "",
    word: "",
    voiceResourceId: "",
    pos: "NOUN",
    meaning: "",
    tagIds: [],
    examples: [],
    voiceResourceIdsByAccent: undefined,
    relatedVocabularies: [],
  };
}

export function createValue(partialValue: Partial<$.inside.Vocabulary>): $.inside.Vocabulary {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Vocabulary): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.word !== undefined) result.word = tsValueToJsonValueFns.string(value.word);
  if (value.voiceResourceId !== undefined) result.voiceResourceId = tsValueToJsonValueFns.string(value.voiceResourceId);
  if (value.pos !== undefined) result.pos = tsValueToJsonValueFns.enum(value.pos);
  if (value.meaning !== undefined) result.meaning = tsValueToJsonValueFns.string(value.meaning);
  result.tagIds = value.tagIds.map(value => tsValueToJsonValueFns.string(value));
  result.examples = value.examples.map(value => encodeJson_1(value));
  if (value.voiceResourceIdsByAccent !== undefined) result.voiceResourceIdsByAccent = encodeJson_2(value.voiceResourceIdsByAccent);
  result.relatedVocabularies = value.relatedVocabularies.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.inside.Vocabulary {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.word !== undefined) result.word = jsonValueToTsValueFns.string(value.word);
  if (value.voiceResourceId !== undefined) result.voiceResourceId = jsonValueToTsValueFns.string(value.voiceResourceId);
  if (value.pos !== undefined) result.pos = jsonValueToTsValueFns.enum(value.pos) as PoS;
  if (value.meaning !== undefined) result.meaning = jsonValueToTsValueFns.string(value.meaning);
  result.tagIds = value.tagIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.examples = value.examples?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.voiceResourceIdsByAccent !== undefined) result.voiceResourceIdsByAccent = decodeJson_2(value.voiceResourceIdsByAccent);
  result.relatedVocabularies = value.relatedVocabularies?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.Vocabulary): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.word !== undefined) {
    const tsValue = value.word;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.voiceResourceId !== undefined) {
    const tsValue = value.voiceResourceId;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.pos !== undefined) {
    const tsValue = value.pos;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.meaning !== undefined) {
    const tsValue = value.meaning;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.tagIds) {
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.examples) {
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.voiceResourceIdsByAccent !== undefined) {
    const tsValue = value.voiceResourceIdsByAccent;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.relatedVocabularies) {
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Vocabulary {
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
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.word = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.voiceResourceId = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.pos = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.meaning = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tagIds = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.examples = value as any;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.voiceResourceIdsByAccent = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.relatedVocabularies = value as any;
  }
  return result;
}
