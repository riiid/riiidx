import { ensureDir } from "https://deno.land/std@0.135.0/fs/mod.ts";
import { dirname } from "https://deno.land/std@0.135.0/path/mod.ts";

export interface Storage {
  getItem: (key: string) => Promise<string | undefined>;
  setItem: (key: string, value: string) => Promise<void>;
}

export async function createJsonStorage(filePath: string): Promise<Storage> {
  await ensureDir(dirname(filePath));
  return {
    getItem: async (key) => (await getJson())?.[key],
    setItem: async (key, value) => {
      const json = { ...await getJson(), [key]: value };
      await Deno.writeTextFile(filePath, JSON.stringify(json));
    },
  };
  async function getJson(): Promise<any> {
    try {
      return JSON.parse(await Deno.readTextFile(filePath));
    } catch {
      return;
    }
  }
}
