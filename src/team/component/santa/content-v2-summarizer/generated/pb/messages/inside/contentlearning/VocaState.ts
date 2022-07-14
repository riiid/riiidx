import {
  Type as SelfReport,
  name2num,
  num2name,
} from "./(VocaState)/SelfReport.ts";
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

export declare namespace $.inside.contentlearning {
  export interface VocaState {
    vocaId: string;
    isCompleted: boolean;
    elapsedTimeMs: string;
    firstSelfReport: SelfReport;
    secondSelfReport: SelfReport;
    id: string;
    isBookmarked: boolean;
  }
}
export type Type = $.inside.contentlearning.VocaState;

export function getDefaultValue(): $.inside.contentlearning.VocaState {
  return {
    vocaId: "",
    isCompleted: false,
    elapsedTimeMs: "0",
    firstSelfReport: "UNSPECIFIED",
    secondSelfReport: "UNSPECIFIED",
    id: "0",
    isBookmarked: false,
  };
}

export function createValue(partialValue: Partial<$.inside.contentlearning.VocaState>): $.inside.contentlearning.VocaState {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.contentlearning.VocaState): unknown {
  const result: any = {};
  if (value.vocaId !== undefined) result.vocaId = tsValueToJsonValueFns.string(value.vocaId);
  if (value.isCompleted !== undefined) result.isCompleted = tsValueToJsonValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = tsValueToJsonValueFns.int64(value.elapsedTimeMs);
  if (value.firstSelfReport !== undefined) result.firstSelfReport = tsValueToJsonValueFns.enum(value.firstSelfReport);
  if (value.secondSelfReport !== undefined) result.secondSelfReport = tsValueToJsonValueFns.enum(value.secondSelfReport);
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.int64(value.id);
  if (value.isBookmarked !== undefined) result.isBookmarked = tsValueToJsonValueFns.bool(value.isBookmarked);
  return result;
}

export function decodeJson(value: any): $.inside.contentlearning.VocaState {
  const result = getDefaultValue();
  if (value.vocaId !== undefined) result.vocaId = jsonValueToTsValueFns.string(value.vocaId);
  if (value.isCompleted !== undefined) result.isCompleted = jsonValueToTsValueFns.bool(value.isCompleted);
  if (value.elapsedTimeMs !== undefined) result.elapsedTimeMs = jsonValueToTsValueFns.int64(value.elapsedTimeMs);
  if (value.firstSelfReport !== undefined) result.firstSelfReport = jsonValueToTsValueFns.enum(value.firstSelfReport) as SelfReport;
  if (value.secondSelfReport !== undefined) result.secondSelfReport = jsonValueToTsValueFns.enum(value.secondSelfReport) as SelfReport;
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.int64(value.id);
  if (value.isBookmarked !== undefined) result.isBookmarked = jsonValueToTsValueFns.bool(value.isBookmarked);
  return result;
}

export function encodeBinary(value: $.inside.contentlearning.VocaState): Uint8Array {
  const result: WireMessage = [];
  if (value.vocaId !== undefined) {
    const tsValue = value.vocaId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isCompleted !== undefined) {
    const tsValue = value.isCompleted;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.elapsedTimeMs !== undefined) {
    const tsValue = value.elapsedTimeMs;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.firstSelfReport !== undefined) {
    const tsValue = value.firstSelfReport;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.secondSelfReport !== undefined) {
    const tsValue = value.secondSelfReport;
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [6, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.isBookmarked !== undefined) {
    const tsValue = value.isBookmarked;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.inside.contentlearning.VocaState {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.vocaId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isCompleted = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.elapsedTimeMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.firstSelfReport = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.secondSelfReport = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isBookmarked = value;
  }
  return result;
}
