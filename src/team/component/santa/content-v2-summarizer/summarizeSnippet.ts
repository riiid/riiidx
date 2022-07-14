import { Snippet } from "./generated/pb/messages/inside/index.ts";
import {
  BlockElement,
  DialogList,
  DocumentBlockElements,
  DocumentInlineElements,
  DocumentSections,
  Figure,
  Heading,
  InlineElement,
  isDocumentBlockElements,
  isDocumentInlineElements,
  isDocumentSections,
  LineNumberedArea,
  Note,
  Paragraph,
  PrecalculatedLineNumberedArea,
  Section,
} from "./generated/ubershape/riiid-rich-text-v2.ts";

export default function summarizeSnippet(snippet: Snippet): string {
  switch (snippet.data?.field) {
    case "text":
      return snippet.data.value;
    case "rrtV2SectionsJson":
      return summarizeRrtV2Sections(JSON.parse(snippet.data.value));
    case "rrtV2BlockElementsJson":
      return summarizeRrtV2BlockElements(JSON.parse(snippet.data.value));
    case "rrtV2InlineElementsJson":
      return summarizeRrtV2InlineElements(JSON.parse(snippet.data.value));
  }
  return "";
}

export function summarizeRrtv2Json(json: string): string {
  const obj = JSON.parse(json);
  if (isDocumentInlineElements(obj)) return summarizeRrtV2InlineElements(obj);
  if (isDocumentBlockElements(obj)) return summarizeRrtV2BlockElements(obj);
  if (isDocumentSections(obj)) return summarizeRrtV2Sections(obj);
  return "Error";
}

export function summarizeRrtV2Sections(sections: DocumentSections): string {
  return rrtv2SectionsToString(sections.children ?? []);
}

export function summarizeRrtV2BlockElements(
  blockElements: DocumentBlockElements,
): string {
  return rrtV2BlockElementsToString(blockElements.children ?? []);
}

export function summarizeRrtV2InlineElements(
  inlineElements: DocumentInlineElements,
): string {
  return rrtV2InlineElementsToString(inlineElements.children ?? []);
}

function rrtv2SectionsToString(sections: Section[]): string {
  return sections.map(rrtv2SectionToString).join("\n---\n");
}

function rrtv2SectionToString(section: Section): string {
  return rrtV2BlockElementsToString(section.children ?? []);
}

function rrtV2BlockElementsToString(blockElements: BlockElement[]): string {
  return blockElements.map(rrtV2BlockElementToString).join("\n");
}

function rrtV2BlockElementToString(blockElement: BlockElement): string {
  switch (blockElement[0]) {
    case "dialog-list":
      return rrtV2DialogListToString(blockElement[1]);
    case "figure":
      return rrtV2FigureToString(blockElement[1]);
    case "heading":
      return rrtV2HeadingToString(blockElement[1]);
    case "line-numbered-area":
      return rrtV2LineNumberedAreaToString(blockElement[1]);
    case "note":
      return rrtV2NoteToString(blockElement[1]);
    case "paragraph":
      return rrtV2ParagraphToString(blockElement[1]);
    case "precalculated-line-numbered-area":
      return rrtV2PrecalculatedLineNumberedAreaToString(blockElement[1]);
    case "table":
      return "(Table)";
  }
}

function rrtV2InlineElementsToString(inlineElements: InlineElement[]): string {
  return inlineElements.map(rrtV2InlineElementToString).join("");
}

function rrtV2InlineElementToString(inlineElement: InlineElement): string {
  switch (inlineElement[0]) {
    case "blank":
      return "____";
    case "image":
      return "(Image)";
    case "math-expression":
      return "(Math Expression)";
    case "point":
      return "";
    case "refer-to":
      return "(Error)";
    case "referred-by":
      return "(Error)";
    case "text":
      return inlineElement[1].value ?? "";
  }
}

function rrtV2DialogListToString(dialogList: DialogList): string {
  return dialogList.children?.map(
    (dialog) => `- ${rrtV2InlineElementsToString(dialog.children ?? [])}\n`,
  ).join("") ?? "";
}

function rrtV2FigureToString(figure: Figure): string {
  const { caption, element } = figure;
  const captionText = rrtV2InlineElementsToString(caption ?? []);
  const elementText = element?.[0] === "image" ? "Image" : "Figure";
  if (captionText) return `(${elementText}: ${captionText})\n`;
  return `(${elementText})\n`;
}

function rrtV2HeadingToString(heading: Heading): string {
  return `${
    heading.level === "#h1"
      ? "#"
      : heading.level === "#h2"
      ? "##"
      : heading.level === "#h3"
      ? "###"
      : heading.level === "#h4"
      ? "####"
      : heading.level === "#h5"
      ? "#####"
      : heading.level === "#h6"
      ? "######"
      : ""
  } ${rrtV2InlineElementsToString(heading.children ?? [])}\n`;
}

function rrtV2LineNumberedAreaToString(
  lineNumberedArea: LineNumberedArea,
): string {
  return (
    "```\n" +
    rrtV2BlockElementsToString(lineNumberedArea.children ?? []) +
    "```\n"
  );
}

function rrtV2NoteToString(note: Note): string {
  return `> Note: ${rrtV2InlineElementsToString(note.children ?? [])}\n`;
}

function rrtV2ParagraphToString(paragraph: Paragraph): string {
  return rrtV2InlineElementsToString(paragraph.children ?? []) + "\n";
}

function rrtV2PrecalculatedLineNumberedAreaToString(
  precalculatedLineNumberedArea: PrecalculatedLineNumberedArea,
): string {
  return (
    "```\n" +
    (precalculatedLineNumberedArea.lines ?? []).map(
      (line) => rrtV2InlineElementsToString(line.children ?? []) + "\n",
    ).join("\n") +
    "```\n"
  );
}
