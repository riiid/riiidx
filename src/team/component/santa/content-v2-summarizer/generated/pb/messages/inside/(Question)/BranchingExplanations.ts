import {
  Type as Snippet,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../Snippet.ts";
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

export declare namespace $.inside.Question {
  export interface BranchingExplanations {
    correctCase?: Snippet;
    incorrectCase?: Snippet;
  }
}
export type Type = $.inside.Question.BranchingExplanations;

export function getDefaultValue(): $.inside.Question.BranchingExplanations {
  return {
    correctCase: undefined,
    incorrectCase: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Question.BranchingExplanations>): $.inside.Question.BranchingExplanations {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Question.BranchingExplanations): unknown {
  const result: any = {};
  if (value.correctCase !== undefined) result.correctCase = encodeJson_1(value.correctCase);
  if (value.incorrectCase !== undefined) result.incorrectCase = encodeJson_1(value.incorrectCase);
  return result;
}

export function decodeJson(value: any): $.inside.Question.BranchingExplanations {
  const result = getDefaultValue();
  if (value.correctCase !== undefined) result.correctCase = decodeJson_1(value.correctCase);
  if (value.incorrectCase !== undefined) result.incorrectCase = decodeJson_1(value.incorrectCase);
  return result;
}

export function encodeBinary(value: $.inside.Question.BranchingExplanations): Uint8Array {
  const result: WireMessage = [];
  if (value.correctCase !== undefined) {
    const tsValue = value.correctCase;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.incorrectCase !== undefined) {
    const tsValue = value.incorrectCase;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.Question.BranchingExplanations {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.correctCase = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.incorrectCase = value;
  }
  return result;
}
