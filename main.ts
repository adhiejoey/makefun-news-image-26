import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`missing entry image: ${source}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The gate only accepts a whole PNG of at most 1 MiB and 1024x1024, so
// refuse to finish with a broken or oversized file instead of failing
// silently on the server.
const bytes = readFileSync(target);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error("output is not a PNG file");
}
if (bytes.length > 1048576) {
  throw new Error(`output is ${bytes.length} bytes, over the 1 MiB limit`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`output is ${width}x${height}, over the 1024x1024 limit`);
}
console.log(`wrote ${target} (${bytes.length} bytes, ${width}x${height})`);
