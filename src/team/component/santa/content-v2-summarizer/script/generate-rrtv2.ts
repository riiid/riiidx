import { ensureDir } from "https://deno.land/std@0.135.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.135.0/path/mod.ts";
import { Schema } from "https://deno.land/x/ubershape@v0.0.12/schema.ts";
import { schema2ts } from "https://deno.land/x/ubershape@v0.0.12/codegen/ts.ts";
import { getReadFunction } from "https://deno.land/x/ubershape@v0.0.12/io/read-schema.ts";

if (import.meta.main) {
  const outPath = "./generated/ubershape";
  await ensureDir(outPath);
  const rrtv2Path = "./.pollapo/riiid/interface-content-model/rrt/v2";
  const compileResults = compile(
    path.resolve(rrtv2Path, "riiid-rich-text-v2.ubershape"),
    [],
  );
  for (const { schema: { name }, code } of compileResults) {
    await Deno.writeTextFile(path.resolve(outPath, name + ".ts"), code);
  }
}

export interface CompileResult {
  schema: Schema;
  code: string;
}
export function compile(
  ubershapePath: string,
  subshapePaths: string[],
): CompileResult[] {
  const read = getReadFunction();
  const ubershape = read(path.resolve(ubershapePath));
  const subshapes = subshapePaths.map(
    (subshapePath) => path.resolve(subshapePath),
  ).map(read);
  const readResults = [ubershape, ...subshapes];
  return readResults.map(({ schema }) => ({
    schema,
    code: schema2ts(schema),
  }));
}
