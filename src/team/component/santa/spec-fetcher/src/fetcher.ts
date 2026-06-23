import fs from "https://deno.land/std@0.173.0/node/fs/promises.ts";
import { parse as parseYaml } from "https://deno.land/std@0.173.0/encoding/yaml.ts";
import validator from "./validator/index.ts";

interface FetcherOptions {
  input: string;
  output: string;
}

interface Spec {
  repository: string;
  releaseTitle: string;
  filenamePattern: string;
}

interface SpecFileContent {
  concurrent?: number;
  specs: {
    repository: string;
    "release-title": string;
    "filename-pattern"?: string;
  }[];
}

const DEFAULT_FILENAME_PATTERN = "spec.json" as const;
const DEFAULT_CONCURRENT = 1 as const;

const fetcher = async (opts: FetcherOptions) => {
  try {
    new Deno.Command("gh").output();
  } catch (e) {
    throw new Error(
      "Please install github CLI in your local environment. -> https://cli.github.com/",
    );
  }

  const data = await fs.readFile(opts.input, { encoding: "utf8" });
  const parsed = parseYaml(data) as SpecFileContent;
  await validator.input(parsed);

  const concurrent = parsed.concurrent ?? DEFAULT_CONCURRENT;

  const specs: Array<Spec> = parsed.specs.map((item) => {
    return {
      repository: item.repository,
      releaseTitle: String(item["release-title"]),
      filenamePattern: item["filename-pattern"] ?? DEFAULT_FILENAME_PATTERN,
    };
  });

  const downloadSpec = async (
    { releaseTitle, repository, filenamePattern }: Spec,
  ) => {
    const specOutputDir = `${opts.output}/${repository}`;
    const specName = `${repository}@${releaseTitle}`;

    console.log(`📥 Downloading ${specName}...`);
    const output = await new Deno.Command(
      "gh",
      {
        args: [
          "release",
          "download",
          releaseTitle,
          `--repo`,
          repository,
          `--pattern`,
          filenamePattern,
          `--dir`,
          specOutputDir,
        ],
      },
    ).output();
    if (!output.success) {
      const errorMessage = new TextDecoder().decode(output.stderr);
      throw new Error(
        `spec-fetcher: 🚨 Failed to download ${specName}.\nPlease check below original error message.\n\n${errorMessage}`,
      );
    }
    await fs.access(specOutputDir);
  };

  try {
    await fs.access(opts.output);
    await fs.rmdir(opts.output, { recursive: true });
  } catch (e) {
    // noop
  }

  try {
    for (let i = 0; i < specs.length; i += concurrent) {
      const chunk = specs.slice(i, i + concurrent);
      await Promise.all(chunk.map((spec) => downloadSpec(spec)));
    }
  } catch (e) {
    console.error(e);
    Deno.exit(1);
  }
  console.log(`👍 All spec files were downloaded to the path '${opts.output}'`);
};

export default fetcher;
