import {
  Type as ContentTagCondition,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ContentTagCondition.ts";
import {
  Type as Operator,
  name2num,
  num2name,
} from "./(ContentTagConditionList)/Operator.ts";
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
  export interface ContentTagConditionList {
    tagConditions: ContentTagCondition[];
    operator: Operator;
  }
}
export type Type = $.inside.ContentTagConditionList;

export function getDefaultValue(): $.inside.ContentTagConditionList {
  return {
    tagConditions: [],
    operator: "UNSPECIFIED",
  };
}

export function createValue(partialValue: Partial<$.inside.ContentTagConditionList>): $.inside.ContentTagConditionList {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentTagConditionList): unknown {
  const result: any = {};
  result.tagConditions = value.tagConditions.map(value => encodeJson_1(value));
  if (value.operator !== undefined) result.operator = tsValueToJsonValueFns.enum(value.operator);
  return result;
}

export function decodeJson(value: any): $.inside.ContentTagConditionList {
  const result = getDefaultValue();
  result.tagConditions = value.tagConditions?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.operator !== undefined) result.operator = jsonValueToTsValueFns.enum(value.operator) as Operator;
  return result;
}

export function encodeBinary(value: $.inside.ContentTagConditionList): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tagConditions) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.operator !== undefined) {
    const tsValue = value.operator;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentTagConditionList {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tagConditions = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.operator = value;
  }
  return result;
}
