import { ContentBody, Snippet } from "./generated/pb/messages/inside/index.ts";
import getPrimaryImageUrl from "./getPrimaryImageUrl.ts";
import summarizeSnippet from "./summarizeSnippet.ts";

export interface SummarizeContentBodyResult {
  type: "text" | "image-url";
  value: string;
}
export default function summarizeContentBody(
  contentBody: ContentBody,
): SummarizeContentBodyResult {
  if (contentBody.content?.field === "voca") { // TODO: PoS handling?
    return { type: "text", value: contentBody.content.value.meaning };
  }
  const primarySnippet = getPrimarySnippet(contentBody);
  if (!primarySnippet) return { type: "text", value: "" };
  const primaryImageUrl = getPrimaryImageUrl(primarySnippet);
  if (primaryImageUrl) return { type: "image-url", value: primaryImageUrl };
  return { type: "text", value: summarizeSnippet(primarySnippet) };
}

export function getPrimarySnippet(
  contentBody: ContentBody,
): Snippet | undefined {
  switch (contentBody.content?.field) {
    case "question":
      return contentBody.content.value.description;
    case "questionSet": {
      const questionSet = contentBody.content.value;
      if (questionSet.passages.length) {
        return questionSet.passages[0]?.body;
      } else {
        return questionSet.questions[0]?.description;
      }
    }
    case "lesson":
      return contentBody.content.value.body;
    case "lessonSet":
      return contentBody.content.value.lessons[0]?.body;
  }
}
