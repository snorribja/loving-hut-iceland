import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/client", import.meta.url));

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* htmlFiles(path);
    } else if (entry.isFile() && path.endsWith(".html")) {
      yield path;
    }
  }
}

let changed = 0;

for await (const file of htmlFiles(root)) {
  const html = await readFile(file, "utf8");
  if (!html.includes("\0")) continue;

  await writeFile(file, html.replaceAll("\0", "\\u0000"));
  changed += 1;
}

console.log(`Escaped NUL bytes in ${changed} HTML file(s).`);
