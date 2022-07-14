import {
  Type as Snippet,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Snippet.ts";
import {
  Type as Objective,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(Question)/Objective.ts";
import {
  Type as Subjective,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(Question)/Subjective.ts";
import {
  Type as TrueFalse,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./(Question)/TrueFalse.ts";
import {
  Type as BranchingExplanations,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Question)/BranchingExplanations.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
  Field,
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

export declare namespace $.inside {
  export interface Question {
    id: string;
    /** @deprecated */
    tagIds: string[];
    description?: Snippet;
    realtorConceptReview?: Snippet;
    descriptionTranslation?: Snippet;
    audioResourceId: string;
    attachedResourceIds: string[];
    explanationType?: (
      | { field: "explanation", value: Snippet }
      | { field: "branchingExplanations", value: BranchingExplanations }
  );
    typeSpec?: (
      | { field: "objective", value: Objective }
      | { field: "subjective", value: Subjective }
      | { field: "trueFalse", value: TrueFalse }
  );
  }
}
export type Type = $.inside.Question;

export function getDefaultValue(): $.inside.Question {
  return {
    id: "",
    tagIds: [],
    description: undefined,
    realtorConceptReview: undefined,
    descriptionTranslation: undefined,
    audioResourceId: "",
    attachedResourceIds: [],
    explanationType: undefined,
    typeSpec: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Question>): $.inside.Question {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Question): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  result.tagIds = value.tagIds.map(value => tsValueToJsonValueFns.string(value));
  if (value.description !== undefined) result.description = encodeJson_1(value.description);
  if (value.realtorConceptReview !== undefined) result.realtorConceptReview = encodeJson_1(value.realtorConceptReview);
  if (value.descriptionTranslation !== undefined) result.descriptionTranslation = encodeJson_1(value.descriptionTranslation);
  if (value.audioResourceId !== undefined) result.audioResourceId = tsValueToJsonValueFns.string(value.audioResourceId);
  result.attachedResourceIds = value.attachedResourceIds.map(value => tsValueToJsonValueFns.string(value));
  switch (value.explanationType?.field) {
    case "explanation": {
      result.explanation = encodeJson_1(value.explanationType.value);
      break;
    }
    case "branchingExplanations": {
      result.branchingExplanations = encodeJson_2(value.explanationType.value);
      break;
    }
  }
  switch (value.typeSpec?.field) {
    case "objective": {
      result.objective = encodeJson_3(value.typeSpec.value);
      break;
    }
    case "subjective": {
      result.subjective = encodeJson_4(value.typeSpec.value);
      break;
    }
    case "trueFalse": {
      result.trueFalse = encodeJson_5(value.typeSpec.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.Question {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  result.tagIds = value.tagIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.description !== undefined) result.description = decodeJson_1(value.description);
  if (value.realtorConceptReview !== undefined) result.realtorConceptReview = decodeJson_1(value.realtorConceptReview);
  if (value.descriptionTranslation !== undefined) result.descriptionTranslation = decodeJson_1(value.descriptionTranslation);
  if (value.audioResourceId !== undefined) result.audioResourceId = jsonValueToTsValueFns.string(value.audioResourceId);
  result.attachedResourceIds = value.attachedResourceIds?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.explanation !== undefined) result.explanationType = {field: "explanation", value: decodeJson_1(value.explanation)};
  if (value.branchingExplanations !== undefined) result.explanationType = {field: "branchingExplanations", value: decodeJson_2(value.branchingExplanations)};
  if (value.objective !== undefined) result.typeSpec = {field: "objective", value: decodeJson_3(value.objective)};
  if (value.subjective !== undefined) result.typeSpec = {field: "subjective", value: decodeJson_4(value.subjective)};
  if (value.trueFalse !== undefined) result.typeSpec = {field: "trueFalse", value: decodeJson_5(value.trueFalse)};
  return result;
}

export function encodeBinary(value: $.inside.Question): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.tagIds) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.realtorConceptReview !== undefined) {
    const tsValue = value.realtorConceptReview;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.descriptionTranslation !== undefined) {
    const tsValue = value.descriptionTranslation;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.audioResourceId !== undefined) {
    const tsValue = value.audioResourceId;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.attachedResourceIds) {
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  switch (value.explanationType?.field) {
    case "explanation": {
      const tsValue = value.explanationType.value;
      result.push(
        [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "branchingExplanations": {
      const tsValue = value.explanationType.value;
      result.push(
        [11, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
  }
  switch (value.typeSpec?.field) {
    case "objective": {
      const tsValue = value.typeSpec.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "subjective": {
      const tsValue = value.typeSpec.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "trueFalse": {
      const tsValue = value.typeSpec.value;
      result.push(
        [7, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "id"],
  [2, "tagIds"],
  [3, "description"],
  [4, "explanation"],
  [5, "objective"],
  [6, "subjective"],
  [7, "trueFalse"],
  [8, "realtorConceptReview"],
  [9, "descriptionTranslation"],
  [10, "audioResourceId"],
  [11, "branchingExplanations"],
  [12, "attachedResourceIds"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  explanationType: new Set([4, 11]),
  typeSpec: new Set([5, 6, 7]),
};
const oneofFieldNamesMap = {
  explanationType: new Map([
    [4, "explanation" as const],
    [11, "branchingExplanations" as const],
  ]),
  typeSpec: new Map([
    [5, "objective" as const],
    [6, "subjective" as const],
    [7, "trueFalse" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.Question {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tagIds = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.realtorConceptReview = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.descriptionTranslation = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.audioResourceId = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 12).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attachedResourceIds = value as any;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.explanationType;
    const oneofFieldNames = oneofFieldNamesMap.explanationType;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [4](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [11](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.explanationType = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.typeSpec;
    const oneofFieldNames = oneofFieldNamesMap.typeSpec;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.typeSpec = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
