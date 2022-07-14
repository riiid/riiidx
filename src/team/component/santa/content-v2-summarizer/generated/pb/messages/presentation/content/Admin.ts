import {
  Type as Role,
  name2num,
  num2name,
} from "./(Admin)/Role.ts";
import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../google/protobuf/Timestamp.ts";
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

export declare namespace $.presentation.content {
  export interface Admin {
    id: string;
    emailId: string;
    role: Role;
    createTime?: Timestamp;
    updatedTime?: Timestamp;
  }
}
export type Type = $.presentation.content.Admin;

export function getDefaultValue(): $.presentation.content.Admin {
  return {
    id: "0",
    emailId: "",
    role: "UNSPECIFIED",
    createTime: undefined,
    updatedTime: undefined,
  };
}

export function createValue(partialValue: Partial<$.presentation.content.Admin>): $.presentation.content.Admin {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.presentation.content.Admin): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.uint64(value.id);
  if (value.emailId !== undefined) result.emailId = tsValueToJsonValueFns.string(value.emailId);
  if (value.role !== undefined) result.role = tsValueToJsonValueFns.enum(value.role);
  if (value.createTime !== undefined) result.createTime = encodeJson_1(value.createTime);
  if (value.updatedTime !== undefined) result.updatedTime = encodeJson_1(value.updatedTime);
  return result;
}

export function decodeJson(value: any): $.presentation.content.Admin {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.uint64(value.id);
  if (value.emailId !== undefined) result.emailId = jsonValueToTsValueFns.string(value.emailId);
  if (value.role !== undefined) result.role = jsonValueToTsValueFns.enum(value.role) as Role;
  if (value.createTime !== undefined) result.createTime = decodeJson_1(value.createTime);
  if (value.updatedTime !== undefined) result.updatedTime = decodeJson_1(value.updatedTime);
  return result;
}

export function encodeBinary(value: $.presentation.content.Admin): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.emailId !== undefined) {
    const tsValue = value.emailId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.role !== undefined) {
    const tsValue = value.role;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.createTime !== undefined) {
    const tsValue = value.createTime;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.updatedTime !== undefined) {
    const tsValue = value.updatedTime;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.presentation.content.Admin {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.emailId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.role = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.createTime = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.updatedTime = value;
  }
  return result;
}
