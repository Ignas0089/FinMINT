import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { extname, join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const args = process.argv.slice(2);
const serveDist = args.includes('--preview');
const baseDir = serveDist ? resolve(__dirname, '../dist') : resolve(__dirname, '..');

const getFilePath = (urlPath) => {
  const cleanPath = urlPath.split('?')[0].split('#')[0];
  if (cleanPath === '/' || cleanPath === '') {
    return join(baseDir, 'index.html');
  }
  return join(baseDir, cleanPath);
};

const server = createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  const filePath = getFilePath(req.url);

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      const htmlPath = join(filePath, 'index.html');
      const html = await readFile(htmlPath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
      res.end(html);
      return;
    }

    const ext = extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    try {
      const fallback = await readFile(join(baseDir, 'index.html'));
      res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
      res.end(fallback);
    } catch (fallbackError) {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

const port = 5173;

server.listen(port, () => {
  const mode = serveDist ? 'preview' : 'development';
  console.log(`FinGlow ${mode} server running at http://localhost:${port}`);
});
