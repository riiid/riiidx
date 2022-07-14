import {
  Type as Language,
  name2num,
  num2name,
} from "./Language.ts";
import {
  Type as Country,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Country.ts";
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
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface LanguageTag {
    language: Language;
    country: Country;
  }
}
export type Type = $.inside.LanguageTag;

export function getDefaultValue(): $.inside.LanguageTag {
  return {
    language: "UNSPECIFIED_LANGUAGE",
    country: "UNSPECIFIED_COUNTRY",
  };
}

export function createValue(partialValue: Partial<$.inside.LanguageTag>): $.inside.LanguageTag {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.LanguageTag): unknown {
  const result: any = {};
  if (value.language !== undefined) result.language = tsValueToJsonValueFns.enum(value.language);
  if (value.country !== undefined) result.country = tsValueToJsonValueFns.enum(value.country);
  return result;
}

export function decodeJson(value: any): $.inside.LanguageTag {
  const result = getDefaultValue();
  if (value.language !== undefined) result.language = jsonValueToTsValueFns.enum(value.language) as Language;
  if (value.country !== undefined) result.country = jsonValueToTsValueFns.enum(value.country) as Country;
  return result;
}

export function encodeBinary(value: $.inside.LanguageTag): Uint8Array {
  const result: WireMessage = [];
  if (value.language !== undefined) {
    const tsValue = value.language;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.country !== undefined) {
    const tsValue = value.country;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.LanguageTag {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.language = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.country = value;
  }
  return result;
}
