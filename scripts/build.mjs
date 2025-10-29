import { rm, mkdir, cp } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const distDir = resolve(rootDir, 'dist');

async function build() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await cp(resolve(rootDir, 'index.html'), resolve(distDir, 'index.html'));
  await cp(resolve(rootDir, 'src'), resolve(distDir, 'src'), { recursive: true });

  console.log('Build complete. Output available in ./dist');
}

build().catch((error) => {
  console.error('Build failed:', error);
  process.exitCode = 1;
});
