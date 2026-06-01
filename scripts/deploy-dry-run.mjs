import { readFile } from "node:fs/promises";

const artifact = JSON.parse(await readFile("dist/artifact.json", "utf8"));

if (artifact.status !== "built") {
  throw new Error("Build artifact is not ready for deployment");
}

console.log(`Dry-run deployment completed for ${artifact.application}`);
