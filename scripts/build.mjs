import { mkdir, readFile, readdir, rm, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const SOURCE_DIR = path.join(ROOT, 'src');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

async function copyDirectory(from, to) {
  await mkdir(to, { recursive: true });
  const entries = await readdir(from, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(from, entry.name);
    const targetPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, targetPath);
    } else {
      await copyFile(sourcePath, targetPath);
    }
  }
}

async function main() {
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(DIST_DIR, { recursive: true });

  const rawHtml = await readFile(path.join(ROOT, 'index.html'), 'utf8');
  const builtHtml = rawHtml.replace(/\.\/src\//g, './assets/');
  await writeFile(path.join(DIST_DIR, 'index.html'), builtHtml, 'utf8');

  await copyDirectory(SOURCE_DIR, ASSETS_DIR);

  console.log('Build complete. Output written to dist/.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
