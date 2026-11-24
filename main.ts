// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "It worked on my machine — unfortunately, my machine retired on Friday and took the config with it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
