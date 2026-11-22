// Make the AI judge feel held — entry program.
// Writes one short, deterministic text to /output/entry.txt (1-280 chars).
// No network, no dependencies, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle has just clicked off. Steam is still rising from the cup, and nobody is asking anything of you. " +
  "The chair holds your weight without comment. Outside, rain is finding its own way down the glass, unhurried, " +
  "and there is nowhere else you need to be.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
