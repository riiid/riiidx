import {
  Type as Empty,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Empty.ts";
import {
  Type as ContentTagCondition,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./ContentTagCondition.ts";
import {
  Type as ContentTagConditionList,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./ContentTagConditionList.ts";
import {
  Type as StringList,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "../StringList.ts";
import {
  Type as ContentIdsTags,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./(ContentSelection)/ContentIdsTags.ts";
import {
  Type as Domain,
  name2num,
  num2name,
} from "./Domain.ts";
import {
  Type as LanguageTag,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./LanguageTag.ts";
import {
  Type as Country,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Country.ts";
import {
  Type as ContentStatus,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./ContentStatus.ts";
import {
  Type as ContentType,
  name2num as name2num_3,
  num2name as num2name_3,
} from "./ContentType.ts";
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
  default as Long,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/Long.ts";
import {
  tsValueToWireValueFns,
  unpackFns,
  wireValueToTsValueFns,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https://deno.land/x/pbkit@v0.0.51/core/runtime/wire/deserialize.ts";

export declare namespace $.inside {
  export interface ContentSelection {
    domain: Domain;
    languageTag?: LanguageTag;
    region: Country;
    status: ContentStatus;
    types: ContentType[];
    query?: (
      | { field: "everyContents", value: Empty }
      | { field: "singleTagCondition", value: ContentTagCondition }
      | { field: "multipleTagConditions", value: ContentTagConditionList }
      | { field: "contentIds", value: StringList }
      | { field: "containsContentId", value: string }
      | { field: "contentSetId", value: string }
      | { field: "contentIdsTags", value: ContentIdsTags }
      | { field: "contentGroupId", value: string }
  );
  }
}
export type Type = $.inside.ContentSelection;

export function getDefaultValue(): $.inside.ContentSelection {
  return {
    domain: "UNSPECIFIED_DOMAIN",
    languageTag: undefined,
    region: "UNSPECIFIED_COUNTRY",
    status: "UNSPECIFIED_CONTENT_STATUS",
    types: [],
    query: undefined,
  };
}

export function createValue(partialValue: Partial<$.inside.ContentSelection>): $.inside.ContentSelection {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.inside.ContentSelection): unknown {
  const result: any = {};
  if (value.domain !== undefined) result.domain = tsValueToJsonValueFns.enum(value.domain);
  if (value.languageTag !== undefined) result.languageTag = encodeJson_1(value.languageTag);
  if (value.region !== undefined) result.region = tsValueToJsonValueFns.enum(value.region);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  result.types = value.types.map(value => tsValueToJsonValueFns.enum(value));
  switch (value.query?.field) {
    case "everyContents": {
      result.everyContents = encodeJson_2(value.query.value);
      break;
    }
    case "singleTagCondition": {
      result.singleTagCondition = encodeJson_3(value.query.value);
      break;
    }
    case "multipleTagConditions": {
      result.multipleTagConditions = encodeJson_4(value.query.value);
      break;
    }
    case "contentIds": {
      result.contentIds = encodeJson_5(value.query.value);
      break;
    }
    case "containsContentId": {
      result.containsContentId = tsValueToJsonValueFns.string(value.query.value);
      break;
    }
    case "contentSetId": {
      result.contentSetId = tsValueToJsonValueFns.string(value.query.value);
      break;
    }
    case "contentIdsTags": {
      result.contentIdsTags = encodeJson_6(value.query.value);
      break;
    }
    case "contentGroupId": {
      result.contentGroupId = tsValueToJsonValueFns.string(value.query.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.inside.ContentSelection {
  const result = getDefaultValue();
  if (value.domain !== undefined) result.domain = jsonValueToTsValueFns.enum(value.domain) as Domain;
  if (value.languageTag !== undefined) result.languageTag = decodeJson_1(value.languageTag);
  if (value.region !== undefined) result.region = jsonValueToTsValueFns.enum(value.region) as Country;
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as ContentStatus;
  result.types = value.types?.map((value: any) => jsonValueToTsValueFns.enum(value) as ContentType) ?? [];
  if (value.everyContents !== undefined) result.query = {field: "everyContents", value: decodeJson_2(value.everyContents)};
  if (value.singleTagCondition !== undefined) result.query = {field: "singleTagCondition", value: decodeJson_3(value.singleTagCondition)};
  if (value.multipleTagConditions !== undefined) result.query = {field: "multipleTagConditions", value: decodeJson_4(value.multipleTagConditions)};
  if (value.contentIds !== undefined) result.query = {field: "contentIds", value: decodeJson_5(value.contentIds)};
  if (value.containsContentId !== undefined) result.query = {field: "containsContentId", value: jsonValueToTsValueFns.string(value.containsContentId)};
  if (value.contentSetId !== undefined) result.query = {field: "contentSetId", value: jsonValueToTsValueFns.string(value.contentSetId)};
  if (value.contentIdsTags !== undefined) result.query = {field: "contentIdsTags", value: decodeJson_6(value.contentIdsTags)};
  if (value.contentGroupId !== undefined) result.query = {field: "contentGroupId", value: jsonValueToTsValueFns.string(value.contentGroupId)};
  return result;
}

export function encodeBinary(value: $.inside.ContentSelection): Uint8Array {
  const result: WireMessage = [];
  if (value.domain !== undefined) {
    const tsValue = value.domain;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.languageTag !== undefined) {
    const tsValue = value.languageTag;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.region !== undefined) {
    const tsValue = value.region;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  for (const tsValue of value.types) {
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_3[tsValue as keyof typeof name2num_3]) }],
    );
  }
  switch (value.query?.field) {
    case "everyContents": {
      const tsValue = value.query.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "singleTagCondition": {
      const tsValue = value.query.value;
      result.push(
        [7, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "multipleTagConditions": {
      const tsValue = value.query.value;
      result.push(
        [8, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "contentIds": {
      const tsValue = value.query.value;
      result.push(
        [9, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
    case "containsContentId": {
      const tsValue = value.query.value;
      result.push(
        [10, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "contentSetId": {
      const tsValue = value.query.value;
      result.push(
        [11, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "contentIdsTags": {
      const tsValue = value.query.value;
      result.push(
        [12, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
      );
      break;
    }
    case "contentGroupId": {
      const tsValue = value.query.value;
      result.push(
        [13, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "domain"],
  [2, "languageTag"],
  [3, "region"],
  [4, "status"],
  [5, "types"],
  [6, "everyContents"],
  [7, "singleTagCondition"],
  [8, "multipleTagConditions"],
  [9, "contentIds"],
  [10, "containsContentId"],
  [11, "contentSetId"],
  [12, "contentIdsTags"],
  [13, "contentGroupId"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  query: new Set([6, 7, 8, 9, 10, 11, 12, 13]),
};
const oneofFieldNamesMap = {
  query: new Map([
    [6, "everyContents" as const],
    [7, "singleTagCondition" as const],
    [8, "multipleTagConditions" as const],
    [9, "contentIds" as const],
    [10, "containsContentId" as const],
    [11, "contentSetId" as const],
    [12, "contentIdsTags" as const],
    [13, "contentGroupId" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.inside.ContentSelection {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.domain = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.languageTag = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.region = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name_3[num as keyof typeof num2name_3]);
    if (!value.length) break collection;
    result.types = value as any;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.query;
    const oneofFieldNames = oneofFieldNamesMap.query;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [8](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [9](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
      [10](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [11](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [12](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined; },
      [13](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.query = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
