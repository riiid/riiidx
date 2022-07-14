import {
  Type as LanguageTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../LanguageTag.ts";
import {
  Type as Domain,
  name2num,
  num2name,
} from "../Domain.ts";
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

export declare namespace $.inside.contentlearning {
  export interface ContentIdentifier {
    contentId: string;
    versionId: string;
    languageTag?: LanguageTag;
    domain: Domain;
  }
}
export type Type = $.inside.contentlearning.ContentIdentifier;

export function getDefaultValue(): $.inside.contentlearning.ContentIdentifier {
  return {
    contentId: "",
    versionId: "0",
    languageTag: undefined,
    domain: "UNSPECIFIED_DOMAIN",
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.ContentIdentifier>): $.inside.contentlearning.ContentIdentifier {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.ContentIdentifier): unknown {
  const result: any = {};
  if (value.contentId !== undefined) result.contentId = tsValueToJsonValueFns.string(value.contentId);
  if (value.versionId !== undefined) result.versionId = tsValueToJsonValueFns.int64(value.versionId);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.ContentIdentifier {
  const result = getDefaultValue();
  if (value.contentId !== undefined) result.contentId = jsonValueToTsValueFns.string(value.contentId);
  if (value.versionId !== undefined) result.versionId = jsonValueToTsValueFns.int64(value.versionId);
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.ContentIdentifier): Uint8Array {
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
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.languageTag !== undefined) {
    const tsValue = value.languageTag;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.ContentIdentifier {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
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
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.versionId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.languageTag = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  return result;
}
