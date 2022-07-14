import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
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

export declare namespace $.inside.contentlearning.ContentInteractionStateInfoPair {
  export interface ContentInfo {
    downloadUrl: string;
  }
}
export type Type = $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo;

export function getDefaultValue(): $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo {
  return {
    downloadUrl: "",
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo>): $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo): unknown {
  const result: any = {};
  if (value.downloadUrl !== undefined) result.downloadUrl = tsValueToJsonValueFns.string(value.downloadUrl);
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo {
  const result = getDefaultValue();
  if (value.downloadUrl !== undefined) result.downloadUrl = jsonValueToTsValueFns.string(value.downloadUrl);
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.downloadUrl !== undefined) {
    const tsValue = value.downloadUrl;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.ContentInteractionStateInfoPair.ContentInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.downloadUrl = value;
  }
  return result;
}
