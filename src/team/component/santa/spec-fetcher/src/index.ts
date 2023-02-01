import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import fetcher from "./fetcher.ts";

const command = new Command();

command
  .name("spec-fetcher")
  .description("openAPI spec file fetcher for Santa")
  .option(
    "-i, --input <file-path>",
    "path to a single lock file. Directory path is currently not supported",
    { required: true },
  )
  .option(
    "-o, --output <file-path>",
    "path to output directory",
    {
      default: ".specs",
    },
  )
  .action((options) => {
    fetcher(options);
  })
  .parse();
