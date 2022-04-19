import {
  blue,
  bold,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.135.0/fmt/colors.ts";

const secretRepo =
  "https://raw.githubusercontent.com/riiid/riiidx-secret/main/src/";
export async function getSecretModule<T>(filePath: string): Promise<T> {
  try {
    return await import(secretRepo + filePath);
  } catch {
    console.error([
      `${red("Failed to import")} ${blue(secretRepo + filePath)}`,
      `Please set ${
        yellow(bold("DENO_AUTH_TOKEN"))
      } environment variable and run again.`,
      green(
        "See https://deno.land/manual/linking_to_external_code/private#github",
      ),
    ].join("\n"));
    Deno.exit(1);
  }
}

export interface GoogleSecret {
  apiKey: string;
  clientId: string;
  clientSecret: string;
}
export function getGoogleSecret(): Promise<GoogleSecret> {
  return getSecretModule("google.ts");
}
