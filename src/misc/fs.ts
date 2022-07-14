import { expandGlob } from "https://deno.land/std@0.135.0/fs/mod.ts";

export async function globFiles(
  root: string,
  pattern: string,
): Promise<string[]> {
  const files: string[] = [];
  for await (const entry of expandGlob(pattern, { root, includeDirs: false })) {
    files.push(entry.path);
  }
  return files;
}
