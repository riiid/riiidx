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
  export interface TrueFalse {
    answer: boolean;
  }
}
export type Type = $.inside.Question.TrueFalse;

export function getDefaultValue(): $.inside.Question.TrueFalse {
  return {
    answer: false,
  };
}

export function createValue(partialValue: Partial<$.inside.Question.TrueFalse>): $.inside.Question.TrueFalse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Question.TrueFalse): unknown {
  const result: any = {};
  if (value.answer !== undefined) result.answer = tsValueToJsonValueFns.bool(value.answer);
  return result;
}

export function decodeJson(value: any): $.inside.Question.TrueFalse {
  const result = getDefaultValue();
  if (value.answer !== undefined) result.answer = jsonValueToTsValueFns.bool(value.answer);
  return result;
}

export function encodeBinary(value: $.inside.Question.TrueFalse): Uint8Array {
  const result: WireMessage = [];
  if (value.answer !== undefined) {
    const tsValue = value.answer;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Question.TrueFalse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.answer = value;
  }
  return result;
}
