import {
  Type as Gender,
  name2num,
  num2name,
} from "./(UserProfile)/Gender.ts";
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

export declare namespace $ {
  export interface UserProfile {
    userId: string;
    age: number;
    gender: Gender;
    studiedBefore: boolean;
  }
}
export type Type = $.UserProfile;

export function getDefaultValue(): $.UserProfile {
  return {
    userId: "",
    age: 0,
    gender: "GENDER_UNSPECIFIED",
    studiedBefore: false,
  };
}

export function createValue(partialValue: Partial<$.UserProfile>): $.UserProfile {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.UserProfile): unknown {
  const result: any = {};
  if (value.userId !== undefined) result.userId = tsValueToJsonValueFns.string(value.userId);
  if (value.age !== undefined) result.age = tsValueToJsonValueFns.uint32(value.age);
  if (value.gender !== undefined) result.gender = tsValueToJsonValueFns.enum(value.gender);
  if (value.studiedBefore !== undefined) result.studiedBefore = tsValueToJsonValueFns.bool(value.studiedBefore);
  return result;
}

export function decodeJson(value: any): $.UserProfile {
  const result = getDefaultValue();
  if (value.userId !== undefined) result.userId = jsonValueToTsValueFns.string(value.userId);
  if (value.age !== undefined) result.age = jsonValueToTsValueFns.uint32(value.age);
  if (value.gender !== undefined) result.gender = jsonValueToTsValueFns.enum(value.gender) as Gender;
  if (value.studiedBefore !== undefined) result.studiedBefore = jsonValueToTsValueFns.bool(value.studiedBefore);
  return result;
}

export function encodeBinary(value: $.UserProfile): Uint8Array {
  const result: WireMessage = [];
  if (value.userId !== undefined) {
    const tsValue = value.userId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.age !== undefined) {
    const tsValue = value.age;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.gender !== undefined) {
    const tsValue = value.gender;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.studiedBefore !== undefined) {
    const tsValue = value.studiedBefore;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.UserProfile {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.age = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.gender = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.studiedBefore = value;
  }
  return result;
}
