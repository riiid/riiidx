import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
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
  export interface VoiceResourceIdsByAccent {
    enUs: string;
    enGb: string;
  }
}
export type Type = $.inside.VoiceResourceIdsByAccent;

export function getDefaultValue(): $.inside.VoiceResourceIdsByAccent {
  return {
    enUs: "",
    enGb: "",
  };
}

export function createValue(partialValue: Partial<$.inside.VoiceResourceIdsByAccent>): $.inside.VoiceResourceIdsByAccent {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.VoiceResourceIdsByAccent): unknown {
  const result: any = {};
  if (value.enUs !== undefined) result.enUs = tsValueToJsonValueFns.string(value.enUs);
  if (value.enGb !== undefined) result.enGb = tsValueToJsonValueFns.string(value.enGb);
  return result;
}

export function decodeJson(value: any): $.inside.VoiceResourceIdsByAccent {
  const result = getDefaultValue();
  if (value.enUs !== undefined) result.enUs = jsonValueToTsValueFns.string(value.enUs);
  if (value.enGb !== undefined) result.enGb = jsonValueToTsValueFns.string(value.enGb);
  return result;
}

export function encodeBinary(value: $.inside.VoiceResourceIdsByAccent): Uint8Array {
  const result: WireMessage = [];
  if (value.enUs !== undefined) {
    const tsValue = value.enUs;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.enGb !== undefined) {
    const tsValue = value.enGb;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.VoiceResourceIdsByAccent {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.enUs = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.enGb = value;
  }
  return result;
}
