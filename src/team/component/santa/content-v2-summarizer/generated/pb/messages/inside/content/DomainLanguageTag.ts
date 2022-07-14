import {
  Type as Domain,
  name2num,
  num2name,
} from "../Domain.ts";
import {
  Type as LanguageTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../LanguageTag.ts";
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

export declare namespace $.inside.content {
  export interface DomainLanguageTag {
    domainLanguageTagId: string;
    domain: Domain;
    languageTag?: LanguageTag;
  }
}
export type Type = $.inside.content.DomainLanguageTag;

export function getDefaultValue(): $.inside.content.DomainLanguageTag {
  return {
    domainLanguageTagId: "0",
    domain: "UNSPECIFIED_DOMAIN",
    languageTag: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.content.DomainLanguageTag>): $.inside.content.DomainLanguageTag {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.content.DomainLanguageTag): unknown {
  const result: any = {};
  if (value.domainLanguageTagId !== undefined) result.domainLanguageTagId = tsValueToJsonValueFns.uint64(value.domainLanguageTagId);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  return result;
}

export function decodeJson(value: any): $.inside.content.DomainLanguageTag {
  const result = getDefaultValue();
  if (value.domainLanguageTagId !== undefined) result.domainLanguageTagId = jsonValueToTsValueFns.uint64(value.domainLanguageTagId);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  return result;
}

export function encodeBinary(value: $.inside.content.DomainLanguageTag): Uint8Array {
  const result: WireMessage = [];
  if (value.domainLanguageTagId !== undefined) {
    const tsValue = value.domainLanguageTagId;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.languageTag !== undefined) {
    const tsValue = value.languageTag;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.content.DomainLanguageTag {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.domainLanguageTagId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.languageTag = value;
  }
  return result;
}
