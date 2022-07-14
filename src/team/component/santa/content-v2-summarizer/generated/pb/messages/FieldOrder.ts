import {
  Type as Order,
  name2num,
  num2name,
} from "./Order.ts";
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
  export interface FieldOrder {
    priority: number;
    fieldNumber: number;
    order: Order;
  }
}
export type Type = $.FieldOrder;

export function getDefaultValue(): $.FieldOrder {
  return {
    priority: 0,
    fieldNumber: 0,
    order: "UNSPECIFIED",
  };
}

export function createValue(partialValue: Partial<$.FieldOrder>): $.FieldOrder {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.FieldOrder): unknown {
  const result: any = {};
  if (value.priority !== undefined) result.priority = tsValueToJsonValueFns.uint32(value.priority);
  if (value.fieldNumber !== undefined) result.fieldNumber = tsValueToJsonValueFns.uint32(value.fieldNumber);
  if (value.order !== undefined) result.order = tsValueToJsonValueFns.enum(value.order);
  return result;
}

export function decodeJson(value: any): $.FieldOrder {
  const result = getDefaultValue();
  if (value.priority !== undefined) result.priority = jsonValueToTsValueFns.uint32(value.priority);
  if (value.fieldNumber !== undefined) result.fieldNumber = jsonValueToTsValueFns.uint32(value.fieldNumber);
  if (value.order !== undefined) result.order = jsonValueToTsValueFns.enum(value.order) as Order;
  return result;
}

export function encodeBinary(value: $.FieldOrder): Uint8Array {
  const result: WireMessage = [];
  if (value.priority !== undefined) {
    const tsValue = value.priority;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.fieldNumber !== undefined) {
    const tsValue = value.fieldNumber;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.order !== undefined) {
    const tsValue = value.order;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.FieldOrder {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.priority = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.fieldNumber = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.order = value;
  }
  return result;
}
