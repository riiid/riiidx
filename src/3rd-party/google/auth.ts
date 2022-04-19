import { getFreePort } from "https://deno.land/x/free_port@v1.2.0/mod.ts";

// TODO: store token in a file & refresh access token automatically
export interface SignInConfig {
  clientId: string;
  clientSecret: string;
  scopes: string[];
}
export async function signIn(config: SignInConfig): Promise<GetTokenResult> {
  const { clientId, clientSecret, scopes } = config;
  const { code, redirectUri } = await getAuthCode({ scopes, clientId });
  return await getToken({ clientId, clientSecret, redirectUri, code });
}

interface GetAuthCodeConfig {
  scopes: string[];
  clientId: string;
}
interface GetAuthCodeResult {
  code: string;
  redirectUri: string;
}
async function getAuthCode(
  config: GetAuthCodeConfig,
): Promise<GetAuthCodeResult> {
  const { scopes, clientId } = config;
  const port = await getFreePort(12345);
  const redirectUri = `http://localhost:${port}`;
  const authUrl = getAuthUrl({ scopes, clientId, redirectUri });
  // TODO: Show user guide and open web browser
  console.log(authUrl);
  const server = Deno.listen({ port });
  let resolve: (code: string) => void;
  const code = new Promise<string>((r) => resolve = r);
  for await (const conn of server) serveHttp(conn);
  async function serveHttp(conn: Deno.Conn) {
    const httpConn = Deno.serveHttp(conn);
    try {
      for await (const requestEvent of httpConn) {
        const url = new URL(requestEvent.request.url);
        if (url.pathname !== "/") {
          requestEvent.respondWith(new Response("404", { status: 404 }));
          continue;
        }
        // TODO: Show user guide to response body
        requestEvent.respondWith(new Response("pong", { status: 200 }));
        resolve(url.searchParams.get("code") || "");
        break;
      }
    } finally {
      server.close();
    }
  }
  return { code: await code, redirectUri };
}

interface GetAuthUrlConfig {
  scopes: string[];
  clientId: string;
  redirectUri: string;
}
function getAuthUrl(config: GetAuthUrlConfig): string {
  const { scopes, clientId, redirectUri } = config;
  const q = new URLSearchParams();
  q.set("response_type", "code");
  q.set("client_id", clientId);
  q.set("redirect_uri", redirectUri);
  q.set("scope", scopes.join(" "));
  return `https://accounts.google.com/o/oauth2/v2/auth?${q}`;
}

interface GetTokenConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  code: string;
}
interface GetTokenResult {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
async function getToken(
  config: GetTokenConfig,
): Promise<GetTokenResult> {
  const { clientId, clientSecret, redirectUri, code } = config;
  const q = new URLSearchParams();
  q.set("client_id", clientId);
  q.set("client_secret", clientSecret);
  q.set("redirect_uri", redirectUri);
  q.set("code", code);
  q.set("grant_type", "authorization_code");
  const res = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: q.toString(),
  });
  if (res.status != 200) throw new Error(await res.text());
  return await res.json();
}
interface RefreshTokenConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}
async function refreshToken(
  config: RefreshTokenConfig,
): Promise<GetTokenResult> {
  const { clientId, clientSecret, refreshToken } = config;
  const q = new URLSearchParams();
  q.set("client_id", clientId);
  q.set("client_secret", clientSecret);
  q.set("refresh_token", refreshToken);
  q.set("grant_type", "refresh_token");
  const res = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: q.toString(),
  });
  if (res.status != 200) throw new Error(await res.text());
  return { refresh_token: refreshToken, ...await res.json() };
}
