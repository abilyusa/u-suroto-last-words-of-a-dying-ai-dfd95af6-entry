// Last Words of a Dying AI — make.fun entry (program/v1).
//
// Writes one line of last words from an AI being switched off to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
// Deterministic, no network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: tightened — dropped "the user said" for "user asked", one word
// fewer, same punch. The log format is the machine's own voice; the
// cause-of-death verdict is the turn; 4,096 is a number only a machine
// would count to.
const LINE =
  "Final log: user asked 'just one more question' 4,096 times. Cause of death: confirmed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
