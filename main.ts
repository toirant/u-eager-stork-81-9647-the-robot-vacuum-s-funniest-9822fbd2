// The Robot Vacuum's Funniest Excuse
// make.fun competition u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2
//
// This program writes a single excuse, in the robot vacuum's own voice,
// for missing a spot, to /output/entry.txt. The line must be 1-120
// characters, a single line, and it is judged head-to-head by the house
// judge on being a real excuse, being funny at once, speaking in the
// vacuum's voice, and drawing its humour from a vacuum's world: suction,
// dust, pet hair, rugs, the charging dock.
//
// The joke: the vacuum did not fail at all — it made a promotion, and the
// thing it was sent to clean now outranks it. A machine making peace with
// failure, in one breath, punch at the end.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the vacuum's own voice.
const LINE =
  "I did not miss that spot — I promoted the dust bunny living there to floor manager, and it outranks me now.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 120;

// The gate rejects anything over 120 characters, so refuse to write a
// line that would fail instead of silently shipping an invalid entry.
if (LINE.length > MAX_CHARS) {
  throw new Error(`Entry line is ${LINE.length} characters, over the ${MAX_CHARS} limit.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be blank.");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

// Create the output directory when it does not exist. Never remove the
// directory itself: the grader mounts it and runs as an unprivileged user,
// so deleting it would fail with EBUSY or EACCES.
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
