import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { once } from 'node:events';

async function listen(server) {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  return server.address().port;
}

export async function startNode(entry, cwd) {
  const reservation = createServer();
  const port = await listen(reservation);
  await new Promise((done) => reservation.close(done));
  const url = `http://127.0.0.1:${port}`;
  const child = spawn(process.execPath, [entry], {
    cwd,
    windowsHide: true,
    env: {
      ...process.env,
      PORT: String(port),
      HOST: '127.0.0.1',
      ORIGIN: url,
      NODE_ENV: 'production',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let logs = '';
  child.stdout.on('data', (data) => {
    logs = (logs + data).slice(-20_000);
  });
  child.stderr.on('data', (data) => {
    logs = (logs + data).slice(-20_000);
  });
  const exited = once(child, 'exit');
  const close = async () => {
    if (child.exitCode === null && child.signalCode === null) child.kill();
    await exited;
  };
  try {
    for (let i = 0; i < 100; i++) {
      if (child.exitCode !== null) break;
      try {
        const response = await fetch(url, { signal: AbortSignal.timeout(1000) });
        if (response.ok) return { url, close };
        logs = (logs + (await response.text())).slice(-20_000);
      } catch {}
      await new Promise((done) => setTimeout(done, 100));
    }
    throw new Error(`Production server did not become ready:\n${logs}`);
  } catch (error) {
    await close();
    throw error;
  }
}

/** 只提供构建生成的静态目录，用来证明预渲染页面不依赖 SSR 服务器。 */
export async function startStatic(roots) {
  const types = {
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.html': 'text/html',
  };
  const server = createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/favicon.ico') {
      response.writeHead(204).end();
      return;
    }
    for (const root of roots) {
      for (const candidate of [pathname, `${pathname}.html`, `${pathname}/index.html`]) {
        const path = resolve(root, '.' + candidate);
        if (!path.startsWith(resolve(root) + sep)) continue;
        try {
          const content = await readFile(path);
          response.writeHead(200, {
            'content-type': types[extname(path)] ?? 'application/octet-stream',
          });
          response.end(content);
          return;
        } catch (error) {
          if (!['ENOENT', 'EISDIR'].includes(error.code)) {
            response.writeHead(500).end();
            return;
          }
        }
      }
    }
    response.writeHead(404).end();
  });
  const port = await listen(server);
  return {
    url: `http://127.0.0.1:${port}`,
    close: () =>
      new Promise((done) => {
        server.closeAllConnections();
        server.close(done);
      }),
  };
}
