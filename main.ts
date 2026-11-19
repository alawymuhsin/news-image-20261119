// The Daily Globe — Thursday 19 November 2026 (make.fun news-image-20261119).
//
// The entry is one finished picture: entry.png beside this file, a newspaper
// front page holding 28 stories from Thursday 19 November 2026 — a lead on
// the Trump–Xi–Putin meeting in Shenzhen, six featured stories, a regions
// strip, and 21 briefs. The picture was drawn and rendered before this
// program ever runs. This program does no drawing and no fetching: it only
// delivers the finished bytes to the grader's output folder.
//
// Node 22, standard library only, no network. The grader runs it twice and
// both runs must write identical bytes:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(targetDir, 'entry.png');

// Read the picture first: its size and fingerprint are the contract the
// written copy has to meet, so a truncated or altered copy cannot pass.
const wanted = readFileSync(source);
const wantedHash = createHash('sha256').update(wanted).digest('hex');

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);

const got = readFileSync(target);
if (got.length !== wanted.length) {
  throw new Error(
    `entry.png was copied short: ${got.length} of ${wanted.length} bytes`,
  );
}
const gotHash = createHash('sha256').update(got).digest('hex');
if (gotHash !== wantedHash) {
  throw new Error('entry.png copy failed its sha256 check');
}

// Confirm the file on disk agrees too, not just the bytes just read.
if (statSync(target).size !== wanted.length) {
  throw new Error('entry.png on disk has the wrong size');
}

console.log(
  `wrote ${target} (${wanted.length} bytes, sha256 ${wantedHash.slice(0, 12)}…)`,
);
