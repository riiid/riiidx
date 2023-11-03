import { exec } from "https://deno.land/x/exec@0.0.5/mod.ts";
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
  specs: {
    repository: string;
    "release-title": string;
    "filename-pattern"?: string;
  }[];
}

const DEFAULT_FILENAME_PATTERN = "spec.json" as const;

const fetcher = async (opts: FetcherOptions) => {
  try {
    await exec("gh", { verbose: false });
  } catch (e) {
    throw new Error(
      "Please install github CLI in your local environment. -> https://cli.github.com/",
    );
  }

  const data = await fs.readFile(opts.input, { encoding: "utf8" });
  const parsed = parseYaml(data) as SpecFileContent;
  await validator.input(parsed);

  const specs: Array<Spec> = parsed.specs.map((item) => {
    return {
      repository: item.repository,
      releaseTitle: String(item["release-title"]),
      filenamePattern: item["filename-pattern"] ?? DEFAULT_FILENAME_PATTERN,
    };
  });

  async function* getReleaseItems() {
    for (const { releaseTitle, repository, filenamePattern } of specs) {
      const specOutputDir = `${opts.output}/${repository}`;
      const specName = `${repository}@${releaseTitle}`;

      console.log(`📥 Downloading ${specName}...`);
      try {
        const { status } = await exec(
          `gh release download \
        ${releaseTitle} \
        --repo ${repository} \
        --pattern ${filenamePattern} \
        --dir ${specOutputDir} \
        `,
        );
        if (!status.success) {
          throw new Error(
            `🚨 Failed to download ${specName}.
Please check artifacts of glob pattern "${filenamePattern}" in version "${releaseTitle}" exists.`,
          );
        }
        await fs.access(specOutputDir);
        yield true;
      } catch (e) {
        console.error(e);
        Deno.exit(1);
      }
    }
  }
  try {
    await fs.access(opts.output);
    await fs.rmdir(opts.output, { recursive: true });
  } catch (e) {
    // noop
  }

  for await (const _ of getReleaseItems()) {
    // noop
  }
  console.log(`👍 All spec files were downloaded to the path '${opts.output}'`);
};

export default fetcher;
