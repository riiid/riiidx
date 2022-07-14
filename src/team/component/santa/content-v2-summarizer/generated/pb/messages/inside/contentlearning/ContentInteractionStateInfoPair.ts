import {
  Type as ContentInteractionState,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ContentInteractionState.ts";
import {
  Type as ContentInfo,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(ContentInteractionStateInfoPair)/ContentInfo.ts";
import {
  Type as ContentInfo_1,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../ContentInfo.ts";
import {
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
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside.contentlearning {
  export interface ContentInteractionStateInfoPair {
    contentInteractionState?: ContentInteractionState;
    /** @deprecated */
    contentInfo?: ContentInfo;
    contentInfoFull?: ContentInfo_1;
  }
}
export type Type = $.inside.contentlearning.ContentInteractionStateInfoPair;

export function getDefaultValue(): $.inside.contentlearning.ContentInteractionStateInfoPair {
  return {
    contentInteractionState: undefined,
    contentInfo: undefined,
    contentInfoFull: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.ContentInteractionStateInfoPair>): $.inside.contentlearning.ContentInteractionStateInfoPair {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.ContentInteractionStateInfoPair): unknown {
  const result: any = {};
  if (value.contentInteractionState !== undefined) result.contentInteractionState = encodeJson_1(value.contentInteractionState);
  if (value.contentInfo !== undefined) result.contentInfo = encodeJson_2(value.contentInfo);
  if (value.contentInfoFull !== undefined) result.contentInfoFull = encodeJson_3(value.contentInfoFull);
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.ContentInteractionStateInfoPair {
  const result = getDefaultValue();
  if (value.contentInteractionState !== undefined) result.contentInteractionState = decodeJson_1(value.contentInteractionState);
  if (value.contentInfo !== undefined) result.contentInfo = decodeJson_2(value.contentInfo);
  if (value.contentInfoFull !== undefined) result.contentInfoFull = decodeJson_3(value.contentInfoFull);
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.ContentInteractionStateInfoPair): Uint8Array {
  const result: WireMessage = [];
  if (value.contentInteractionState !== undefined) {
    const tsValue = value.contentInteractionState;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.contentInfo !== undefined) {
    const tsValue = value.contentInfo;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.contentInfoFull !== undefined) {
    const tsValue = value.contentInfoFull;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.ContentInteractionStateInfoPair {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contentInteractionState = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contentInfo = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contentInfoFull = value;
  }
  return result;
}
