import {
  Type as Type_1,
  name2num,
  num2name,
} from "./(Header)/Type.ts";
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
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface Header {
    type: Type_1;
    body?: Snippet;
  }
}
export type Type = $.inside.Header;

export function getDefaultValue(): $.inside.Header {
  return {
    type: "UNSPECIFIED",
    body: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Header>): $.inside.Header {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Header): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  if (value.body !== undefined) result.body = encodeJson_1(value.body);
  return result;
}

export function decodeJson(value: any): $.inside.Header {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as Type_1;
  if (value.body !== undefined) result.body = decodeJson_1(value.body);
  return result;
}

export function encodeBinary(value: $.inside.Header): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.body !== undefined) {
    const tsValue = value.body;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Header {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.body = value;
  }
  return result;
}
