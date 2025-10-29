import path from 'node:path';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import esbuild from 'esbuild';
import { resetRuntime, runCurrentSuite } from './runtime.mjs';

const projectRoot = process.cwd();
const cacheDir = path.join(projectRoot, '.vitest-temp');

const externalPackages = [
  'vitest',
  '@testing-library/react',
  '@testing-library/jest-dom',
  '@testing-library/user-event',
];

async function ensureCacheDir() {
  await fs.mkdir(cacheDir, { recursive: true });
}

async function findTestFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findTestFiles(resolved)));
    } else if (entry.isFile() && /\.test\.[tj]sx?$/.test(entry.name)) {
      files.push(resolved);
    }
  }
  return files;
}

function tempFileName(modulePath) {
  const relative = path.relative(projectRoot, modulePath).replace(/[^a-zA-Z0-9_.-]/g, '_');
  return path.join(cacheDir, `${relative}.mjs`);
}

async function bundleModule(modulePath) {
  await ensureCacheDir();
  const result = await esbuild.build({
    absWorkingDir: projectRoot,
    entryPoints: [modulePath],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'es2022',
    sourcemap: 'inline',
    write: false,
    external: externalPackages,
    treeShaking: false,
  });
  if (!result.outputFiles?.length) {
    throw new Error(`Failed to bundle ${modulePath}`);
  }
  const code = `${result.outputFiles[0].text}\n//# sourceURL=${modulePath}`;
  const tempFile = tempFileName(modulePath);
  await fs.writeFile(tempFile, code, 'utf8');
  const fileUrl = `${pathToFileURL(tempFile).href}?t=${Date.now()}`;
  return import(fileUrl);
}

async function loadConfig() {
  const configPathTs = path.join(projectRoot, 'vitest.config.ts');
  try {
    const stats = await fs.stat(configPathTs);
    if (stats.isFile()) {
      const mod = await bundleModule(configPathTs);
      return mod.default ?? {};
    }
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error;
    }
  }
  return {};
}

async function run() {
  const config = await loadConfig();
  const setupFiles = config?.test?.setupFiles ?? [];
  for (const setup of setupFiles) {
    const setupPath = path.resolve(projectRoot, setup);
    await bundleModule(setupPath);
  }

  const srcDir = path.join(projectRoot, 'src');
  const testFiles = await findTestFiles(srcDir);
  if (testFiles.length === 0) {
    console.log('No test files found.');
    return;
  }

  let totalFailures = 0;
  let totalPassed = 0;
  for (const testFile of testFiles) {
    const label = path.relative(projectRoot, testFile);
    console.log(`Running ${label}`);
    resetRuntime(label);
    await bundleModule(testFile);
    const summary = await runCurrentSuite();
    totalFailures += summary.failed;
    totalPassed += summary.passed;
  }

  console.log(`\nTest Summary: ${totalPassed} passed, ${totalFailures} failed.`);
  if (totalFailures > 0) {
    process.exitCode = 1;
  }
}

export { run };
