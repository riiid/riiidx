import { Snippet } from "./generated/pb/messages/inside/index.ts";
import {
  BlockElement,
  Image,
  InlineElement,
  Paragraph,
  Section,
  Text,
} from "./generated/ubershape/riiid-rich-text-v2.ts";

export default function getPrimaryImageUrl(
  snippet: Snippet,
): string | undefined {
  switch (snippet.data?.field) {
    case "text":
      return snippet.data.value;
    case "rrtV2SectionsJson":
      return getPrimaryImageUrlFromRrtV2Sections(
        JSON.parse(snippet.data.value)?.children ?? [],
      );
    case "rrtV2BlockElementsJson":
      return getPrimaryImageUrlFromRrtV2BlockElements(
        JSON.parse(snippet.data.value)?.children ?? [],
      );
    case "rrtV2InlineElementsJson":
      return getPrimaryImageUrlFromRrtV2InlineElements(
        JSON.parse(snippet.data.value)?.children ?? [],
      );
    default:
      return "";
  }
}

function getPrimaryImageUrlFromRrtV2Sections(
  sections: Section[],
): string | undefined {
  const firstSection = sections[0];
  if (!firstSection) return;
  return getPrimaryImageUrlFromRrtV2BlockElements(firstSection.children ?? []);
}

function getPrimaryImageUrlFromRrtV2BlockElements(
  blockElements: BlockElement[],
): string | undefined {
  const other = blockElements.find(([type]) =>
    (type !== "figure") && (type !== "paragraph")
  );
  if (other) return;
  let primaryImageUrl: string | undefined;
  for (const blockElement of blockElements) {
    switch (blockElement[0]) {
      case "figure":
        if (!primaryImageUrl) {
          primaryImageUrl = blockElement[1]?.element?.[1]?.src ?? "";
        }
        break;
      case "paragraph":
        if (checkRrtV2ParagraphHasText(blockElement[1])) return;
        if (!primaryImageUrl) {
          primaryImageUrl = getPrimaryImageUrlFromRrtV2Paragraph(
            blockElement[1],
          );
        }
        break;
    }
  }
  return primaryImageUrl;
}

function getPrimaryImageUrlFromRrtV2Paragraph(
  paragraph: Paragraph,
): string | undefined {
  return getPrimaryImageUrlFromRrtV2InlineElements(paragraph.children ?? []);
}

function checkRrtV2ParagraphHasText(paragraph: Paragraph): boolean {
  return checkRrtV2InlineElementsHasText(paragraph.children ?? []);
}

function getPrimaryImageUrlFromRrtV2InlineElements(
  inlineElements: InlineElement[],
): string | undefined {
  const other = inlineElements.find(([type]) =>
    (type !== "image") && (type !== "text")
  );
  if (other) return;
  const image = inlineElements.find(([type]) => type === "image") as [
    string,
    Image,
  ] | undefined;
  if (!image) return;
  if (checkRrtV2InlineElementsHasText(inlineElements)) return;
  return image[1].src || "";
}

function checkRrtV2InlineElementsHasText(
  inlineElements: InlineElement[],
): boolean {
  const texts = inlineElements.filter(([type]) => type === "text") as [
    string,
    Text,
  ][];
  const text = texts.map((text) => (text[1].value || "")).join("");
  return text.trim() !== "";
}
