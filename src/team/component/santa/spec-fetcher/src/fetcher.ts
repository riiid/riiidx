import { exec } from "https://deno.land/x/exec@0.0.5/mod.ts";
import fs from "https://deno.land/std@0.170.0/node/fs/promises.ts";
import { parse } from "https://deno.land/std@0.82.0/encoding/yaml.ts";
import validator from "./validator/index.ts";
import type { Options } from "./index.ts";

interface Spec {
  repository: string;
  releaseTitle: string;
  items: string[];
}

interface Lock {
  specs: Spec[];
}

const SPEC_FILE_NAME = "spec.json" as const;

const getExistingSpecVersion = async (
  path: string,
  targetFileNames: string[],
): Promise<string | null> => {
  async function* getSingleFileVersion() {
    for (const name of targetFileNames) {
      const filePath = `${path}/${name}`;
      try {
        await fs.access(filePath);
      } catch (e) {
        return null;
      }
      const data = await fs.readFile(filePath, {
        encoding: "utf8",
      });
      const parsed = JSON.parse(data);
      if (!parsed) yield null;
      if (!parsed.info?.version) {
        throw new Error(`Version info not exists in ${filePath}.`);
      }
      yield parsed.info.version;
    }
  }

  const versions = new Set<string | number | null>();
  for await (const version of getSingleFileVersion()) {
    versions.add(version);
  }
  if (versions.has(null)) {
    return null;
  }
  if (versions.size > 1) {
    throw new Error(`Version infos differ throughout specs in ${path}
Please check spec version or remove ${path} manually and try again.`);
  }
  return String(Array.from(versions)[0]);
};

const fetcher = async (opts: Options) => {
  const response = await exec("gh", { verbose: false });

  if (!response.status.success) {
    console.error(response.output);
    if (response.output.includes("command not found")) {
      console.error(
        "Please install github CLI in your local environment. -> https://cli.github.com/",
      );
    }
    Deno.exit(1);
  }

  const data = await fs.readFile(opts.input, { encoding: "utf8" });
  const parsed = parse(data);
  await validator.input(parsed);

  const specs: Array<Spec> = (parsed as Lock).specs.map((item: any) => {
    return {
      repository: item.repository,
      releaseTitle: String(item["release-title"]),
      items: item.items ?? [SPEC_FILE_NAME],
    };
  });

  async function* getReleaseItems() {
    for (const { releaseTitle, repository, items } of specs) {
      const specOutputDir = `${opts.output}/${repository}`;
      const specName = `${repository}@${releaseTitle}`;
      const existingSpecVersion = await getExistingSpecVersion(
        specOutputDir,
        items,
      );

      if (
        existingSpecVersion !== null && existingSpecVersion === releaseTitle
      ) {
        console.log(
          `💨 ${specName} already exists in '${opts.output}' directory. Download was skipped.`,
        );
        yield true;
        continue;
      }

      await fs.rmdir(specOutputDir, { recursive: true });
      console.log(`📥 Downloading ${specName}...`);
      if (existingSpecVersion) {
        console.log(
          `   version ${existingSpecVersion} will be replace to version ${releaseTitle}`,
        );
      }
      const response = await exec(
        `gh release download \
        ${releaseTitle} \
        --repo ${repository} \
        --pattern ${SPEC_FILE_NAME} \
        --dir ${specOutputDir}`,
      );
      if (!response.status.success) {
        console.error(response.output);
        Deno.exit(1);
      }
      yield true;
    }
  }
  for await (const _ of getReleaseItems()) {
    // noop
  }
  console.log(`👍 All spec files were downloaded to the path '${opts.output}'`);
};

export default fetcher;
