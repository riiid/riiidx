import {
  blue,
  bold,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.135.0/fmt/colors.ts";
import { getToken } from "https://deno.land/x/pbkit@v0.0.45/misc/github/index.ts";
import { createAuthTokens, get } from "./deno/auth-tokens.ts";

const secretRepo =
  "https://raw.githubusercontent.com/riiid/riiidx-secret/main/src/";
export async function fetchSecretJson<T>(filePath: string): Promise<T> {
  try {
    const token = await getGithubToken();
    const res = await fetch(`${secretRepo}${filePath}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
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
export async function fetchGoogleSecret(): Promise<GoogleSecret> {
  return fetchGoogleSecret.memo! ??= await fetchSecretJson("google.json");
}
fetchGoogleSecret.memo = undefined as GoogleSecret | undefined;

async function getGithubToken(): Promise<string | undefined> {
  const denoAuthTokens = Deno.env.get("DENO_AUTH_TOKENS");
  if (denoAuthTokens) {
    const tokens = createAuthTokens(denoAuthTokens);
    const token = get(tokens, new URL("https://github.com")) ??
      get(tokens, new URL("https://raw.githubusercontent.com"));
    if (token && token.token.type === "Bearer") return token.token.value;
  }
  try {
    return await getToken();
  } catch {}
}
