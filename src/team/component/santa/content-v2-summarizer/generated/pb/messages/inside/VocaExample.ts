import {
  Type as VoiceResourceIdsByAccent,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
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
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface VocaExample {
    text: string;
    voiceResourceId: string;
    translation: string;
    voiceResourceIdsByAccent?: VoiceResourceIdsByAccent;
  }
}
export type Type = $.inside.VocaExample;

export function getDefaultValue(): $.inside.VocaExample {
  return {
    text: "",
    voiceResourceId: "",
    translation: "",
    voiceResourceIdsByAccent: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.VocaExample>): $.inside.VocaExample {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.VocaExample): unknown {
  const result: any = {};
  if (value.text !== undefined) result.text = tsValueToJsonValueFns.string(value.text);
  if (value.voiceResourceId !== undefined) result.voiceResourceId = tsValueToJsonValueFns.string(value.voiceResourceId);
  if (value.translation !== undefined) result.translation = tsValueToJsonValueFns.string(value.translation);
  if (value.voiceResourceIdsByAccent !== undefined) result.voiceResourceIdsByAccent = encodeJson_1(value.voiceResourceIdsByAccent);
  return result;
}

export function decodeJson(value: any): $.inside.VocaExample {
  const result = getDefaultValue();
  if (value.text !== undefined) result.text = jsonValueToTsValueFns.string(value.text);
  if (value.voiceResourceId !== undefined) result.voiceResourceId = jsonValueToTsValueFns.string(value.voiceResourceId);
  if (value.translation !== undefined) result.translation = jsonValueToTsValueFns.string(value.translation);
  if (value.voiceResourceIdsByAccent !== undefined) result.voiceResourceIdsByAccent = decodeJson_1(value.voiceResourceIdsByAccent);
  return result;
}

export function encodeBinary(value: $.inside.VocaExample): Uint8Array {
  const result: WireMessage = [];
  if (value.text !== undefined) {
    const tsValue = value.text;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.voiceResourceId !== undefined) {
    const tsValue = value.voiceResourceId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.translation !== undefined) {
    const tsValue = value.translation;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.voiceResourceIdsByAccent !== undefined) {
    const tsValue = value.voiceResourceIdsByAccent;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.VocaExample {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.text = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.voiceResourceId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.translation = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.voiceResourceIdsByAccent = value;
  }
  return result;
}
