import { mkdir, writeFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await writeFile(
  "dist/artifact.json",
  `${JSON.stringify({ application: "github-workflow-demo", status: "built" }, null, 2)}\n`,
);

console.log("Build completed: dist/artifact.json");
