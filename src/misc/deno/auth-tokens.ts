export type AuthTokenData =
  | { type: "Bearer"; value: string }
  | { type: "Basic"; username: string; password: string };

export interface AuthToken {
  host: string;
  token: AuthTokenData;
}

export function tokenToString(authToken: AuthToken): string {
  const { token } = authToken;
  switch (token.type) {
    case "Bearer":
      return `Bearer ${token.value}`;
    case "Basic":
      return `Basic ${btoa(`${token.username}:${token.password}`)}`;
  }
}

export function get(tokens: AuthToken[], url: URL): AuthToken | undefined {
  for (const token of tokens) {
    if (token.host.endsWith(url.host.toLowerCase())) return token;
  }
}

export function createAuthTokens(text: string): AuthToken[] {
  const result: AuthToken[] = [];
  for (const tokenStr of text.split(";")) {
    if (tokenStr.includes("@")) {
      const index = tokenStr.lastIndexOf("@");
      const token = tokenStr.slice(0, index);
      const host = tokenStr.slice(index + 1).toLowerCase();
      if (token.includes(":")) {
        const [username, password] = token.split(":");
        result.push({ host, token: { type: "Basic", username, password } });
      } else {
        result.push({ host, token: { type: "Bearer", value: token } });
      }
    } else {
      throw new Error("Badly formed auth token discarded.");
    }
  }
  return result;
}
