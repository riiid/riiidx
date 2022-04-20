export async function getRoot(): Promise<string> {
  return new TextDecoder().decode(
    await Deno.run({
      cmd: ["git", "rev-parse", "--show-toplevel"],
      stdout: "piped",
    }).output(),
  ).trim();
}
