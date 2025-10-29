import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const ALLOWED_EXTENSIONS = new Set(['.js', '.css', '.html', '.md']);
const IGNORED_DIRS = new Set(['node_modules', '.git', 'dist']);

async function findFiles(dir) {
  const directory = path.resolve(ROOT, dir);
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        if (IGNORED_DIRS.has(entry.name)) {
          return [];
        }
        return findFiles(entryPath);
      }
      if (ALLOWED_EXTENSIONS.has(path.extname(entry.name))) {
        return entryPath;
      }
      return [];
    }),
  );
  return files.flat();
}

async function hasTrailingWhitespace(filePath) {
  const contents = await readFile(filePath, 'utf8');
  const lines = contents.split(/\r?\n/);
  const issues = [];
  lines.forEach((line, index) => {
    if (/\s+$/.test(line)) {
      issues.push({ line: index + 1 });
    }
  });
  return issues;
}

async function main() {
  const pathsToCheck = ['src', 'scripts', 'tests'];
  const filesFromDirs = (
    await Promise.all(pathsToCheck.map((dir) => findFiles(dir)))
  ).flat();

  const rootFiles = ['index.html'];
  const allFiles = filesFromDirs.concat(rootFiles.map((file) => path.join(ROOT, file)));

  const problems = [];
  for (const file of allFiles) {
    const issues = await hasTrailingWhitespace(file);
    if (issues.length > 0) {
      problems.push({ file, issues });
    }
  }

  if (problems.length > 0) {
    console.error('Lint failed: trailing whitespace detected');
    for (const problem of problems) {
      problem.issues.forEach((issue) => {
        console.error(`  ${path.relative(ROOT, problem.file)}:${issue.line}`);
      });
    }
    process.exitCode = 1;
    return;
  }

  console.log('Lint passed: no trailing whitespace found.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
