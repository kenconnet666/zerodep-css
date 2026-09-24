import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { once } from 'node:events';
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { setTimeout as delay } from 'node:timers/promises';
import { parse, stringify } from 'yaml';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';
import {
  browserRunId,
  prepareBrowserRun,
  withBrowserPage,
} from '../../scripts/testing/browser-evidence.mjs';
import { pnpm, root } from '../../scripts/lib/environment.mjs';

assert(
  process.argv.slice(2).every((arg) => arg === '--no-build'),
  'Unknown test argument.',
);
const fixture = resolve(dirname(fileURLToPath(import.meta.url)), 'fixture');
const output = resolve(root, 'test-results/sveltekit');
await prepareBrowserRun(output);
const workspace = await realpath(await mkdtemp(join(tmpdir(), 'zerodep-sveltekit-')));
const appDir = join(workspace, 'app');
const packsDir = join(workspace, 'packs');
const environment = { ...process.env, CI: 'true', NODE_PATH: '' };
const workspaceConfig = parse(await readFile(resolve(root, 'pnpm-workspace.yaml'), 'utf8'));
const catalog = workspaceConfig.catalog;
const inheritedOverrides = workspaceConfig.overrides ?? {};
const versions = Object.fromEntries(
  [
    '@sveltejs/kit',
    '@sveltejs/adapter-node',
    '@sveltejs/adapter-static',
    '@sveltejs/vite-plugin-svelte',
    'svelte',
    'svelte-check',
    'vite',
    'typescript',
    '@types/node',
  ].map((name) => {
    const version = catalog[name];
    assert.equal(typeof version, 'string', `Missing exact catalog version for ${name}.`);
    assert(/^\d+\.\d+\.\d+$/.test(version), `Catalog version must be exact: ${name}.`);
    return [name, version];
  }),
);
assert.equal(versions['@sveltejs/kit'], '2.70.3');
assert.equal(versions['@sveltejs/adapter-node'], '5.5.7');
assert.equal(versions['@sveltejs/adapter-static'], '3.0.10');

const report = {
  runId: browserRunId,
  workspace,
  versions,
  status: 'running',
  passed: false,
  checks: [],
};
let nodeServer;
let staticServer;
let browser;

async function saveReport() {
  await writeFile(join(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
}
async function verifyInstallation() {
  const app = createRequire(join(appDir, 'package.json'));
  const svelte = createRequire(app.resolve('@zerodep-css/svelte'));
  const kit = createRequire(app.resolve('@zerodep-css/sveltekit/server'));
  const same = async (name, left, right) =>
    assert.equal(await realpath(left.resolve(name)), await realpath(right.resolve(name)), name);
  await same('@zerodep-css/core', app, svelte);
  await same('@zerodep-css/svelte', app, kit);
  await same('svelte', app, svelte);
  await same('svelte', app, kit);
  report.checks.push('single-core-svelte-identity');
  const kitRuntime = createRequire(app.resolve('@sveltejs/kit/package.json'));
  const cookie = kitRuntime('cookie');
  const cookiePackage = JSON.parse(
    await readFile(kitRuntime.resolve('cookie/package.json'), 'utf8'),
  );
  assert.equal(cookiePackage.version, '0.7.2', 'Kit must resolve the patched cookie dependency.');
  assert.equal(
    cookie.serialize('session', 'hello world', {
      domain: 'example.com',
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    }),
    'session=hello%20world; Domain=example.com; Path=/; HttpOnly; SameSite=Lax',
  );
  assert.throws(() => cookie.serialize('bad\r\nname', 'value'), /name is invalid/);
  assert.throws(() => cookie.serialize('session', 'value', { path: '/;bad' }), /path is invalid/);
  assert.throws(
    () => cookie.serialize('session', 'value', { domain: 'example.com\r\nSet-Cookie: x=y' }),
    /domain is invalid/,
  );
  report.checks.push('kit-cookie-patch');
  pnpm(['audit', '--prod'], { cwd: appDir, env: environment });
  report.checks.push('production-audit');
  pnpm(['exec', 'svelte-kit', 'sync'], { cwd: appDir, env: environment });
  pnpm(['exec', 'svelte-check', '--tsconfig', './tsconfig.json'], {
    cwd: appDir,
    env: environment,
  });
  report.checks.push('svelte-check');
}
function archive(names, name) {
  const file = names.find(
    (item) => item.startsWith(`zerodep-css-${name}-`) && item.endsWith('.tgz'),
  );
  assert(file, `Missing ${name} tarball.`);
  return join(packsDir, file);
}
async function availablePort() {
  const server = createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  assert(address && typeof address !== 'string');
  await new Promise((done, reject) => server.close((error) => (error ? reject(error) : done())));
  return address.port;
}
async function startNodeServer() {
  const port = await availablePort();
  const logs = [];
  const child = spawn(process.execPath, [join(appDir, 'build-node/index.js')], {
    cwd: appDir,
    env: { ...environment, PORT: String(port), HOST: '127.0.0.1' },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });
  const closed = new Promise((resolveClose) => child.once('close', resolveClose));
  for (const stream of [child.stdout, child.stderr])
    stream.on('data', (chunk) => {
      logs.push(String(chunk));
      if (logs.length > 200) logs.shift();
    });
  const baseURL = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null || child.signalCode !== null) break;
    try {
      const response = await fetch(baseURL + '/health', { signal: AbortSignal.timeout(1000) });
      if (response.ok && (await response.text()) === 'ok') return { child, closed, baseURL };
    } catch {
      // Node adapter 尚未开始监听。
    }
    await delay(150);
  }
  await stopNodeServer({ child, closed });
  throw new Error(`SvelteKit Node server did not become ready.\n${logs.join('').slice(-12_000)}`);
}
async function stopNodeServer(server) {
  if (!server) return;
  if (server.child.exitCode === null && server.child.signalCode === null) server.child.kill();
  await Promise.race([server.closed, delay(5_000, undefined, { ref: false })]);
  if (server.child.exitCode === null && server.child.signalCode === null) {
    server.child.kill('SIGKILL');
  }
  await Promise.race([
    server.closed,
    delay(5_000, undefined, { ref: false }).then(() => {
      throw new Error('SvelteKit Node process did not close after termination.');
    }),
  ]);
}
function extracted(html) {
  const styles = [
    ...html.matchAll(/<style\b[^>]*data-zerodep="kit-fixture"[^>]*>[\s\S]*?<\/style>/g),
  ]
    .map((match) => match[0])
    .join('');
  const script = html.match(/<script\b[^>]*data-zerodep-css-manifest[^>]*>([\s\S]*?)<\/script>/);
  assert(script, 'Missing SvelteKit SSR manifest.');
  const manifest = JSON.parse(script[1]);
  assert.equal(manifest.version, 1);
  assert(styles.length > 0, 'No SSR style records.');
  assert(html.includes('<!--zerodep-css:head-->'), 'Kit head marker was removed.');
  return { styles, manifest, script: script[0] };
}
async function fetchPage(baseURL, path, options) {
  const response = await fetch(baseURL + path, options);
  return { status: response.status, headers: response.headers, html: await response.text() };
}
async function verifyNode(baseURL) {
  const paths = Array.from({ length: 8 }, (_, index) => (index % 2 ? '/?tone=blue' : '/?tone=red'));
  const pages = await Promise.all(paths.map((path) => fetchPage(baseURL, path)));
  for (const [index, page] of pages.entries()) {
    assert.equal(page.status, 200);
    assert.match(page.headers.get('content-type') ?? '', /text\/html/);
    const blue = index % 2 === 1;
    const { styles, manifest } = extracted(page.html);
    assert(styles.includes(blue ? '#dbeafe' : '#fee2e2'), 'Wrong request global CSS.');
    assert(!styles.includes(blue ? '#fee2e2' : '#dbeafe'), 'Cross-request CSS leaked.');
    assert(page.html.includes(`data-brand="${blue ? '#2563eb' : '#dc2626'}"`));
    assert(manifest.globals.some((item) => item.key === 'body-tone'));
  }
  report.checks.push('concurrent-ssr');

  const nonHtml = await fetchPage(baseURL, '/health');
  assert.equal(nonHtml.status, 200);
  assert.equal(nonHtml.html, 'ok');
  assert(!nonHtml.html.includes('data-zerodep-css-manifest'));
  const noncePage = await fetchPage(baseURL, '/?nonce=1');
  assert.equal(noncePage.status, 200);
  const withNonce = extracted(noncePage.html);
  assert(withNonce.styles.includes('nonce="fixture-nonce"'));
  assert(withNonce.script.includes('nonce="fixture-nonce"'));
  report.checks.push('non-html-nonce');

  for (const [path, status, discarded] of [
    ['/fail', 500, '#010203'],
    ['/http-error', 400, '#040506'],
  ]) {
    const page = await fetchPage(baseURL, path);
    assert.equal(page.status, status);
    assert(page.html.includes('data-error-page'), `Missing error page for ${path}.`);
    const { styles, manifest } = extracted(page.html);
    assert(styles.includes('#fef3c7'), `Error tree CSS missing for ${path}.`);
    assert(!styles.includes(discarded), `Failed tree CSS leaked into ${path}.`);
    assert(!manifest.globals.some((item) => item.key.startsWith('failed-')));
  }
  const redirected = await fetchPage(baseURL, '/redirect', { redirect: 'manual' });
  assert.equal(redirected.status, 302);
  assert.match(redirected.headers.get('location') ?? '', /\/other\?tone=blue$/);
  assert(!redirected.html.includes('data-zerodep-css-manifest'));
  report.checks.push('errors-redirect-cleanup');

  const deferred = await fetchPage(baseURL, '/deferred');
  assert.equal(deferred.status, 200);
  assert(deferred.html.includes('data-deferred'));
  assert(deferred.html.includes('complete'));
  extracted(deferred.html);
  const asyncChild = await fetchPage(baseURL, '/async-child');
  assert.equal(asyncChild.status, 200);
  assert(asyncChild.html.includes('data-async-child'));
  const late = extracted(asyncChild.html);
  assert(late.styles.includes('#7c3aed'));
  assert(late.manifest.globals.some((item) => item.key === 'late-child'));
  report.checks.push('async-child-ssr');
  const controller = new AbortController();
  const pending = fetch(baseURL + '/deferred', { signal: controller.signal }).then((response) =>
    response.text(),
  );
  setTimeout(() => controller.abort(), 20);
  await assert.rejects(pending, /abort/i);
  const recovered = await fetchPage(baseURL, '/?tone=red');
  assert.equal(recovered.status, 200);
  assert(extracted(recovered.html).styles.includes('#fee2e2'));
  report.checks.push('deferred-abort-recovery');
}
async function verifyBrowser(baseURL) {
  browser = await launchBrowser();
  await withBrowserPage(browser, output, 'sveltekit-node-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(baseURL + '/?tone=red', { waitUntil: 'networkidle' });
    await page.locator('[data-card]').waitFor();
    assert.equal(
      await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).width),
      '80px',
    );
    await page.evaluate(() => {
      window.__kitFixtureDocument = Math.random();
    });
    const documentMarker = await page.evaluate(() => window.__kitFixtureDocument);
    await page.locator('[data-grow]').click();
    await page.waitForFunction(
      () => getComputedStyle(document.querySelector('[data-card]')).width === '100px',
    );
    await page.locator('[data-other-link]').click();
    await page.locator('[data-other-card]').waitFor();
    assert.match(page.url(), /\/other\?tone=blue$/);
    assert.equal(await page.evaluate(() => window.__kitFixtureDocument), documentMarker);
    assert.equal(await page.locator('[data-other-card]').getAttribute('data-brand'), '#2563eb');
    await page.waitForFunction(
      () => getComputedStyle(document.body).backgroundColor === 'rgb(219, 234, 254)',
    );
    assert.deepEqual(errors, []);
  });
  await withBrowserPage(browser, output, 'sveltekit-csr-only', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(baseURL + '/csr', { waitUntil: 'networkidle' });
    await page.locator('[data-csr-card]').waitFor();
    assert.equal(
      await page.locator('[data-csr-card]').evaluate((node) => getComputedStyle(node).width),
      '44px',
    );
    assert.deepEqual(errors, []);
  });
  await withBrowserPage(browser, output, 'sveltekit-async-child-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(baseURL + '/async-child', { waitUntil: 'networkidle' });
    await page.waitForFunction(() => document.documentElement.dataset.asyncHydrated === 'true');
    assert.equal(
      await page.locator('[data-async-child]').evaluate((node) => getComputedStyle(node).color),
      'rgb(124, 58, 237)',
    );
    await page.locator('[data-async-click]').click();
    await page.waitForFunction(
      () => document.querySelector('[data-async-click]')?.textContent === '1',
    );
    assert.deepEqual(errors, []);
  });
  report.checks.push('node-hydration-spa-csr-async-child');
}
async function verifyDevelopment() {
  const app = createRequire(join(appDir, 'package.json'));
  const pageFile = join(appDir, 'src/routes/+page.svelte');
  const layoutFile = join(appDir, 'src/routes/+layout.svelte');
  const originalPage = await readFile(pageFile, 'utf8');
  const originalLayout = await readFile(layoutFile, 'utf8');
  assert(originalPage.includes('s.width.px(width);'));
  assert(originalLayout.includes("'#fee2e2'"));
  let devServer;
  const previousCwd = process.cwd();
  process.chdir(appDir);
  try {
    // Kit/Vite 在模块初始化时读取 cwd；root 选项本身不足以固定其内部配置路径。
    const { createServer: createViteServer } = await import(
      pathToFileURL(app.resolve('vite')).href
    );
    devServer = await createViteServer({
      root: appDir,
      logLevel: 'error',
      server: { host: '127.0.0.1', port: await availablePort(), strictPort: true },
    });
    await devServer.listen();
    const address = devServer.httpServer?.address();
    assert(address && typeof address !== 'string');
    const baseURL = `http://127.0.0.1:${address.port}`;
    browser ??= await launchBrowser();
    await withBrowserPage(browser, output, 'sveltekit-dev-hmr', async (page) => {
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(baseURL + '/?tone=red', { waitUntil: 'networkidle' });
      await page.locator('[data-card]').waitFor();
      assert.equal(
        await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).width),
        '80px',
      );
      await page.evaluate(() => {
        window.__kitHmrDocument = Math.random();
      });
      const documentMarker = await page.evaluate(() => window.__kitHmrDocument);
      await writeFile(
        pageFile,
        originalPage.replace('s.width.px(width);', 's.width.px(width + 8);'),
      );
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-card]')).width === '88px',
      );
      await page.locator('[data-grow]').click();
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-card]')).width === '108px',
      );
      await writeFile(layoutFile, originalLayout.replace("'#fee2e2'", "'#fce7e7'"));
      await page.waitForFunction(
        () => getComputedStyle(document.body).backgroundColor === 'rgb(252, 231, 231)',
      );
      assert.equal(await page.evaluate(() => window.__kitHmrDocument), documentMarker);
      const ids = await page
        .locator('style[data-zerodep="kit-fixture"]')
        .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-zerodep-id')));
      assert(ids.length > 0);
      assert.equal(new Set(ids).size, ids.length, 'HMR duplicated a namespace record.');
      const beforeClick = Number.parseInt(
        await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).width),
        10,
      );
      assert([88, 108].includes(beforeClick), 'Page HMR width expression was lost.');
      await page.locator('[data-grow]').click();
      await page.waitForFunction(
        (width) =>
          Number.parseInt(getComputedStyle(document.querySelector('[data-card]')).width, 10) ===
          width + 20,
        beforeClick,
      );
      assert.deepEqual(errors, []);
    });
    report.checks.push('development-hmr');
  } finally {
    // 文件属于临时消费应用；无论HMR结果如何都恢复，再关闭本进程持有的server。
    const restored = await Promise.allSettled([
      writeFile(pageFile, originalPage),
      writeFile(layoutFile, originalLayout),
    ]);
    let closeError;
    try {
      await devServer?.close();
    } catch (error) {
      closeError = error;
    } finally {
      process.chdir(previousCwd);
    }
    const errors = restored.filter((item) => item.status === 'rejected').map((item) => item.reason);
    if (closeError) errors.push(closeError);
    if (errors.length) throw new AggregateError(errors, 'Failed to restore SvelteKit HMR fixture.');
  }
}
async function browserJavascriptFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await browserJavascriptFiles(path)));
    else if (entry.isFile() && /\.(?:m?js)$/.test(entry.name)) files.push(path);
  }
  return files;
}
async function verifyBrowserBundle(publicDir) {
  const files = await browserJavascriptFiles(join(publicDir, '_app'));
  assert(files.length > 0, 'Static adapter emitted no browser JavaScript.');
  for (const file of files)
    assert.doesNotMatch(
      await readFile(file, 'utf8'),
      /node:async_hooks|AsyncLocalStorage|server-provider|server-context/,
      `Node-only style context leaked into browser module ${file}.`,
    );
  report.checks.push('browser-bundle-no-node-context');
}
async function startStaticServer(publicDir) {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
      const relativePath = pathname.replace(/^\/+/, '');
      const target = resolve(publicDir, relativePath || 'index.html');
      assert(target.startsWith(publicDir + sep), 'Static request escaped output directory.');
      let file;
      try {
        file = (await stat(target)).isDirectory() ? join(target, 'index.html') : target;
      } catch {
        file = extname(target) ? target : target + '.html';
      }
      const types = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
      };
      response.setHeader('content-type', types[extname(file)] ?? 'application/octet-stream');
      response.end(await readFile(file));
    } catch {
      response.statusCode = 404;
      response.end('not found');
    }
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  assert(address && typeof address !== 'string');
  return { server, baseURL: `http://127.0.0.1:${address.port}` };
}
async function verifyStatic() {
  const publicDir = join(appDir, 'build-static');
  await verifyBrowserBundle(publicDir);
  for (const file of ['index.html', 'other/index.html'])
    extracted(await readFile(join(publicDir, file), 'utf8'));
  staticServer = await startStaticServer(publicDir);
  browser ??= await launchBrowser();
  await withBrowserPage(browser, output, 'sveltekit-static-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(staticServer.baseURL + '/', { waitUntil: 'networkidle' });
    await page.locator('[data-card]').waitFor();
    assert.equal(
      await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).width),
      '80px',
    );
    await page.locator('[data-grow]').click();
    await page.waitForFunction(
      () => getComputedStyle(document.querySelector('[data-card]')).width === '100px',
    );
    assert.deepEqual(errors, []);
  });
  report.checks.push('static-prerender-hydration');
}

try {
  await saveReport();
  await mkdir(packsDir);
  await mkdir(appDir);
  for (const name of ['core', 'svelte', 'sveltekit'])
    pnpm(['pack', '--pack-destination', packsDir], {
      cwd: resolve(root, name),
      env: environment,
    });
  const archives = await readdir(packsDir);
  const packages = Object.fromEntries(
    ['core', 'svelte', 'sveltekit'].map((name) => [
      `@zerodep-css/${name}`,
      `file:${archive(archives, name)}`,
    ]),
  );
  await cp(fixture, appDir, { recursive: true });
  await writeFile(
    join(appDir, 'pnpm-workspace.yaml'),
    stringify({
      packages: [],
      catalog: versions,
      overrides: { ...inheritedOverrides, ...packages },
      onlyBuiltDependencies: ['esbuild'],
      autoInstallPeers: false,
    }),
  );
  await writeFile(
    join(appDir, 'package.json'),
    JSON.stringify(
      {
        name: 'isolated-sveltekit-consumer',
        private: true,
        type: 'module',
        packageManager: 'pnpm@10.34.5',
        dependencies: packages,
        devDependencies: Object.fromEntries(
          Object.keys(versions).map((name) => [name, 'catalog:']),
        ),
      },
      null,
      2,
    ) + '\n',
  );
  pnpm(['install', '--no-frozen-lockfile'], { cwd: appDir, env: environment });
  await verifyInstallation();
  pnpm(['exec', 'vite', 'build'], { cwd: appDir, env: { ...environment, ZCSS_ADAPTER: 'node' } });
  nodeServer = await startNodeServer();
  await verifyNode(nodeServer.baseURL);
  await verifyBrowser(nodeServer.baseURL);
  await stopNodeServer(nodeServer);
  nodeServer = undefined;
  await verifyDevelopment();

  for (const path of ['src/routes/+page.ts', 'src/routes/other/+page.ts'])
    await writeFile(
      join(appDir, path),
      "export const prerender = true;\nexport const trailingSlash = 'always';\n",
    );
  pnpm(['exec', 'vite', 'build'], {
    cwd: appDir,
    env: { ...environment, ZCSS_ADAPTER: 'static' },
  });
  await verifyStatic();
  report.status = 'passed';
  report.passed = true;
} catch (error) {
  report.status = 'failed';
  report.error = String(error.stack ?? error);
  throw error;
} finally {
  const cleanup = await Promise.allSettled([
    stopNodeServer(nodeServer),
    staticServer
      ? new Promise((done, reject) =>
          staticServer.server.close((error) => (error ? reject(error) : done())),
        )
      : Promise.resolve(),
    browser?.close() ?? Promise.resolve(),
  ]);
  const cleanupErrors = cleanup
    .filter((item) => item.status === 'rejected')
    .map((item) => String(item.reason));
  if (cleanupErrors.length) {
    report.cleanupErrors = cleanupErrors;
    report.status = 'cleanup-failed';
    report.passed = false;
  }
  await saveReport();
  if (report.passed) {
    const actual = await realpath(workspace);
    const parent = await realpath(tmpdir());
    assert.equal(dirname(actual), parent);
    assert(basename(actual).startsWith('zerodep-sveltekit-'));
    await rm(actual, { recursive: true });
  } else console.error('SvelteKit consumer workspace retained for diagnosis: ' + workspace);
  if (cleanupErrors.length && !report.error) throw new Error(cleanupErrors.join('\n'));
}
