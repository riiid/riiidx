import { exec } from "https://deno.land/x/exec@0.0.5/mod.ts";
import fs from "https://deno.land/std@0.170.0/node/fs/promises.ts";
import { parse } from "https://deno.land/std@0.82.0/encoding/yaml.ts";
import validator from "./validator/index.ts";
import type { Options } from "./index.ts";

interface Spec {
  repository: string;
  releaseTitle: string;
}

interface Lock {
  specs: Spec[];
}

const SPEC_FILE_NAME = "spec.json" as const;

const getExistingSpecVersion = async (path: string): Promise<string | null> => {
  try {
    await fs.access(path);
    const data = await fs.readFile(`${path}/${SPEC_FILE_NAME}`, {
      encoding: "utf8",
    });
    const parsed = JSON.parse(data);
    if (!parsed?.info?.version) {
      return null;
    }
    return parsed.info.version;
  } catch (e) {
    return null;
  }
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
    };
  });

  specs.forEach(async ({ repository, releaseTitle }) => {
    const specOutputDir = `${opts.output}/${repository}`;
    const specName = `${repository}@${releaseTitle}`;
    const existingSpecVersion = await getExistingSpecVersion(specOutputDir);

    if (existingSpecVersion !== null && existingSpecVersion === releaseTitle) {
      console.log(
        `💨 ${specName} already exists in '${opts.output}' directory. Download was skipped.`,
      );
      return;
    }

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
        --dir ${specOutputDir} \
        --clobber`,
      { verbose: false },
    );
    if (!response.status.success) {
      console.error(response.output);
      Deno.exit(1);
    }
  });
  // TODO: 이게 마지막에 뜨도록
  // console.log(`👍 All spec files were downloaded to the path '${opts.output}'`);
};

export default fetcher;
