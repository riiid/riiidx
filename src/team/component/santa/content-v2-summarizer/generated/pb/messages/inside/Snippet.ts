import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/json/scalar.ts";
import {
  WireMessage,
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
  export interface Snippet {
    data?: (
      | { field: "text", value: string }
      | { field: "html", value: string }
      | { field: "rrcbJson", value: string }
      | { field: "rrbeJson", value: string }
      | { field: "rrafJson", value: string }
      | { field: "gmatQuestionDescriptionJson", value: string }
      | { field: "gmatExplanationJson", value: string }
      | { field: "gmatPassageJson", value: string }
      | { field: "gmatChoiceJson", value: string }
      | { field: "rrtV1Json", value: string }
      | { field: "rrtV2SectionsJson", value: string }
      | { field: "rrtV2BlockElementsJson", value: string }
      | { field: "rrtV2InlineElementsJson", value: string }
  );
  }
}
export type Type = $.inside.Snippet;

export function getDefaultValue(): $.inside.Snippet {
  return {
    data: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.Snippet>): $.inside.Snippet {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.Snippet): unknown {
  const result: any = {};
  switch (value.data?.field) {
    case "text": {
      result.text = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "html": {
      result.html = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrcbJson": {
      result.rrcbJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrbeJson": {
      result.rrbeJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrafJson": {
      result.rrafJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "gmatQuestionDescriptionJson": {
      result.gmatQuestionDescriptionJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "gmatExplanationJson": {
      result.gmatExplanationJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "gmatPassageJson": {
      result.gmatPassageJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "gmatChoiceJson": {
      result.gmatChoiceJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrtV1Json": {
      result.rrtV1Json = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrtV2SectionsJson": {
      result.rrtV2SectionsJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrtV2BlockElementsJson": {
      result.rrtV2BlockElementsJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
    case "rrtV2InlineElementsJson": {
      result.rrtV2InlineElementsJson = tsValueToJsonValueFns.string(value.data.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.Snippet {
  const result = getDefaultValue();
  if (value.text !== undefined) result.data = {field: "text", value: jsonValueToTsValueFns.string(value.text)};
  if (value.html !== undefined) result.data = {field: "html", value: jsonValueToTsValueFns.string(value.html)};
  if (value.rrcbJson !== undefined) result.data = {field: "rrcbJson", value: jsonValueToTsValueFns.string(value.rrcbJson)};
  if (value.rrbeJson !== undefined) result.data = {field: "rrbeJson", value: jsonValueToTsValueFns.string(value.rrbeJson)};
  if (value.rrafJson !== undefined) result.data = {field: "rrafJson", value: jsonValueToTsValueFns.string(value.rrafJson)};
  if (value.gmatQuestionDescriptionJson !== undefined) result.data = {field: "gmatQuestionDescriptionJson", value: jsonValueToTsValueFns.string(value.gmatQuestionDescriptionJson)};
  if (value.gmatExplanationJson !== undefined) result.data = {field: "gmatExplanationJson", value: jsonValueToTsValueFns.string(value.gmatExplanationJson)};
  if (value.gmatPassageJson !== undefined) result.data = {field: "gmatPassageJson", value: jsonValueToTsValueFns.string(value.gmatPassageJson)};
  if (value.gmatChoiceJson !== undefined) result.data = {field: "gmatChoiceJson", value: jsonValueToTsValueFns.string(value.gmatChoiceJson)};
  if (value.rrtV1Json !== undefined) result.data = {field: "rrtV1Json", value: jsonValueToTsValueFns.string(value.rrtV1Json)};
  if (value.rrtV2SectionsJson !== undefined) result.data = {field: "rrtV2SectionsJson", value: jsonValueToTsValueFns.string(value.rrtV2SectionsJson)};
  if (value.rrtV2BlockElementsJson !== undefined) result.data = {field: "rrtV2BlockElementsJson", value: jsonValueToTsValueFns.string(value.rrtV2BlockElementsJson)};
  if (value.rrtV2InlineElementsJson !== undefined) result.data = {field: "rrtV2InlineElementsJson", value: jsonValueToTsValueFns.string(value.rrtV2InlineElementsJson)};
  return result;
}

export function encodeBinary(value: $.inside.Snippet): Uint8Array {
  const result: WireMessage = [];
  switch (value.data?.field) {
    case "text": {
      const tsValue = value.data.value;
      result.push(
        [1, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "html": {
      const tsValue = value.data.value;
      result.push(
        [2, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrcbJson": {
      const tsValue = value.data.value;
      result.push(
        [3, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrbeJson": {
      const tsValue = value.data.value;
      result.push(
        [4, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrafJson": {
      const tsValue = value.data.value;
      result.push(
        [5, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "gmatQuestionDescriptionJson": {
      const tsValue = value.data.value;
      result.push(
        [6, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "gmatExplanationJson": {
      const tsValue = value.data.value;
      result.push(
        [7, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "gmatPassageJson": {
      const tsValue = value.data.value;
      result.push(
        [8, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "gmatChoiceJson": {
      const tsValue = value.data.value;
      result.push(
        [9, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrtV1Json": {
      const tsValue = value.data.value;
      result.push(
        [10, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrtV2SectionsJson": {
      const tsValue = value.data.value;
      result.push(
        [11, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrtV2BlockElementsJson": {
      const tsValue = value.data.value;
      result.push(
        [12, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "rrtV2InlineElementsJson": {
      const tsValue = value.data.value;
      result.push(
        [13, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "text"],
  [2, "html"],
  [3, "rrcbJson"],
  [4, "rrbeJson"],
  [5, "rrafJson"],
  [6, "gmatQuestionDescriptionJson"],
  [7, "gmatExplanationJson"],
  [8, "gmatPassageJson"],
  [9, "gmatChoiceJson"],
  [10, "rrtV1Json"],
  [11, "rrtV2SectionsJson"],
  [12, "rrtV2BlockElementsJson"],
  [13, "rrtV2InlineElementsJson"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  data: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
};
const oneofFieldNamesMap = {
  data: new Map([
    [1, "text" as const],
    [2, "html" as const],
    [3, "rrcbJson" as const],
    [4, "rrbeJson" as const],
    [5, "rrafJson" as const],
    [6, "gmatQuestionDescriptionJson" as const],
    [7, "gmatExplanationJson" as const],
    [8, "gmatPassageJson" as const],
    [9, "gmatChoiceJson" as const],
    [10, "rrtV1Json" as const],
    [11, "rrtV2SectionsJson" as const],
    [12, "rrtV2BlockElementsJson" as const],
    [13, "rrtV2InlineElementsJson" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.Snippet {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.data;
    const oneofFieldNames = oneofFieldNamesMap.data;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [2](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [3](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [4](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [5](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [6](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [7](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [8](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [9](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [10](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [11](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [12](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [13](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.data = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
