// one-line-zero-use-the-useless
// One line (114 Unicode code points) naming a hilariously useless
// superpower: making it rain on command — only directly above the hero,
// and only on days they just paid for a haircut. Specific, vivid, and the
// joke pays off in the last few words.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I can make it rain on command — unfortunately, only directly above me, and only on days I just paid for a haircut.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
