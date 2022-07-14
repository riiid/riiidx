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

export declare namespace $.inside.Question {
  export interface Subjective {
    allowedAnswers: string[];
  }
}
export type Type = $.inside.Question.Subjective;

export function getDefaultValue(): $.inside.Question.Subjective {
  return {
    allowedAnswers: [],
  };
}

export function createValue(partialValue: Partial<$.inside.Question.Subjective>): $.inside.Question.Subjective {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Question.Subjective): unknown {
  const result: any = {};
  result.allowedAnswers = value.allowedAnswers.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.inside.Question.Subjective {
  const result = getDefaultValue();
  result.allowedAnswers = value.allowedAnswers?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.inside.Question.Subjective): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.allowedAnswers) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Question.Subjective {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.allowedAnswers = value as any;
  }
  return result;
}
