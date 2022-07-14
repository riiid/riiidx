import {
  Type as ContentTagConditionList,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../ContentTagConditionList.ts";
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

export declare namespace $.inside.ContentSelection {
  export interface ContentIdsTags {
    contentIds: string[];
    multipleTagConditions?: ContentTagConditionList;
  }
}
export type Type = $.inside.ContentSelection.ContentIdsTags;

export function getDefaultValue(): $.inside.ContentSelection.ContentIdsTags {
  return {
    contentIds: [],
    multipleTagConditions: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentSelection.ContentIdsTags>): $.inside.ContentSelection.ContentIdsTags {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentSelection.ContentIdsTags): unknown {
  const result: any = {};
  result.contentIds = value.contentIds.map(value => tsValueToJsonValueFns.string(value));
  if (value.multipleTagConditions !== undefined) result.multipleTagConditions = encodeJson_1(value.multipleTagConditions);
  return result;
}

export function decodeJson(value: any): $.inside.ContentSelection.ContentIdsTags {
  const result = getDefaultValue();
  result.contentIds = value.contentIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.multipleTagConditions !== undefined) result.multipleTagConditions = decodeJson_1(value.multipleTagConditions);
  return result;
}

export function encodeBinary(value: $.inside.ContentSelection.ContentIdsTags): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.contentIds) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.multipleTagConditions !== undefined) {
    const tsValue = value.multipleTagConditions;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.ContentSelection.ContentIdsTags {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.contentIds = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.multipleTagConditions = value;
  }
  return result;
}
