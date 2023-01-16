import * as commander from "https://deno.land/x/cliffy@v0.25.2/command/mod.ts";

const validateLockFile = (data: Record<string, any>): true | string => {
  const specs = data?.["specs"];
  if (!specs) {
    return `A key 'specs' does not exists.`;
  }
  if (!Array.isArray(specs)) {
    return `A key 'specs' has an invalid scheme.`;
  }
  if (specs.length === 0) {
    return `No item exists to fetch.`;
  }
  if (
    specs.some((item) => {
      const repository = item?.["repository"];
      const releaseTitle = item?.["release-title"];
      const items = item?.["items"];
      const isItemsValid = items === undefined ||
        (Array.isArray(items) && items.length > 0 &&
          items.every((name) => typeof name === "string"));
      return typeof repository !== "string" || (!isItemsValid) ||
        (typeof releaseTitle !== "string" && typeof releaseTitle !== "number");
    })
  ) {
    return `Some spec item(s) has an invalid scheme.`;
  }
  return true;
};

const validateInputFile = (parsed: any) => {
  const result = validateLockFile(parsed);
  if (result !== true) {
    throw new commander.ValidationError(
      `Input file has invalid syntax for spec-fetcher.
${result}
Please check your lock file.
`,
      { exitCode: 1 },
    );
  }
  return parsed;
};

export default validateInputFile;
