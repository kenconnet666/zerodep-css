import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import {
  mkdtemp,
  mkdir,
  cp,
  readFile,
  readdir,
  realpath,
  rm,
  rmdir,
  stat,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { once } from 'node:events';
import { createRequire } from 'node:module';
import { setTimeout as delay } from 'node:timers/promises';
import { parse } from 'yaml';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';
import {
  browserRunId,
  prepareBrowserRun,
  withBrowserPage,
} from '../../scripts/testing/browser-evidence.mjs';
import { pnpm, root } from '../../scripts/lib/environment.mjs';

const fixture = resolve(dirname(fileURLToPath(import.meta.url)), 'fixture');
const output = resolve(root, 'test-results/nuxt');
await prepareBrowserRun(output);
const arguments_ = process.argv.slice(2);
const resumeAt = arguments_.indexOf('--resume');
assert(arguments_.filter((arg) => arg === '--resume').length <= 1, 'Duplicate --resume.');
assert(arguments_.filter((arg) => arg === '--hmr').length <= 1, 'Duplicate --hmr.');
const resumePath = resumeAt < 0 ? undefined : arguments_[resumeAt + 1];
assert(resumeAt < 0 || (resumePath && !resumePath.startsWith('--')), 'Missing --resume path.');
const hmrOnly = arguments_.includes('--hmr');
assert(!hmrOnly || resumePath, '--hmr requires --resume <owned temp root>.');
assert(
  arguments_.every(
    (arg, index) =>
      arg === '--no-build' ||
      arg === '--resume' ||
      arg === '--hmr' ||
      (resumeAt >= 0 && index === resumeAt + 1),
  ),
  'Unknown test argument.',
);
// --no-build 由根 wrapper 传入；诊断复用也不会重建或重新安装产品包。
const diagnosticResume = resumePath !== undefined;
const workspace = diagnosticResume
  ? await realpath(resumePath)
  : await realpath(await mkdtemp(join(tmpdir(), 'zerodep-nuxt-')));
const appDir = join(workspace, 'app');
const packsDir = join(workspace, 'packs');
const environment = { ...process.env, CI: 'true', NODE_PATH: '' };
const resolveNuxtDependency = createRequire(resolve(root, 'nuxt/package.json'));
const catalog = parse(await readFile(resolve(root, 'pnpm-workspace.yaml'), 'utf8'));
const report = {
  runId: browserRunId,
  workspace,
  diagnosticResume,
  hmrOnly,
  cleanFullPass: false,
  status: 'running',
  passed: false,
  checks: [],
};
let browser;
let nodeServer;
let devServer;
let staticServer;

async function saveReport() {
  await writeFile(join(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
}
async function version(name) {
  return JSON.parse(await readFile(resolveNuxtDependency.resolve(`${name}/package.json`), 'utf8'))
    .version;
}
async function verifyPackageIdentity(folder) {
  const project = createRequire(join(folder, 'package.json'));
  const adapterEntry = project.resolve('@zerodep-css/vue');
  const moduleEntry = project.resolve('@zerodep-css/nuxt');
  const adapter = createRequire(adapterEntry);
  const module = createRequire(moduleEntry);
  assert.equal(await realpath(module.resolve('@zerodep-css/vue')), await realpath(adapterEntry));
  assert.equal(
    await realpath(adapter.resolve('@zerodep-css/core')),
    await realpath(project.resolve('@zerodep-css/core')),
  );
  assert.equal(await realpath(adapter.resolve('vue')), await realpath(project.resolve('vue')));
  for (const name of ['core', 'vue', 'nuxt']) {
    const installed = await realpath(join(folder, 'node_modules/@zerodep-css', name));
    assert(
      !installed.toLowerCase().startsWith(root.toLowerCase() + sep),
      `${name} resolved to workspace source.`,
    );
  }
}
async function verifyResumeWorkspace() {
  const parent = await realpath(tmpdir());
  assert.equal(dirname(workspace), parent, 'Resume target must be a direct child of tmpdir.');
  assert(basename(workspace).startsWith('zerodep-nuxt-'), 'Unexpected resume directory name.');
  const manifest = JSON.parse(await readFile(join(appDir, 'package.json'), 'utf8'));
  assert.equal(manifest.name, 'isolated-nuxt-consumer');
  assert((await stat(join(appDir, '.output/server/index.mjs'))).isFile());
}
function archive(names, name) {
  const found = names.find(
    (file) => file.startsWith(`zerodep-css-${name}-`) && file.endsWith('.tgz'),
  );
  assert(found, `Missing ${name} package archive.`);
  return join(packsDir, found);
}
async function availablePort() {
  const server = createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  assert(address && typeof address !== 'string');
  await new Promise((resolveClose, reject) =>
    server.close((error) => (error ? reject(error) : resolveClose())),
  );
  return address.port;
}
async function startNodeServer(folder, dev = false, isolateRouteRules = true) {
  const port = await availablePort();
  const logs = [];
  const nuxtManifestPath = dev
    ? createRequire(join(folder, 'package.json')).resolve('nuxt/package.json')
    : undefined;
  const cli = dev
    ? resolve(
        dirname(nuxtManifestPath),
        JSON.parse(await readFile(nuxtManifestPath, 'utf8')).bin.nuxt,
      )
    : undefined;
  const command = dev
    ? [cli, 'dev', '--no-fork', '--port', String(port), '--host', '127.0.0.1', '--no-qr']
    : [join(folder, '.output/server/index.mjs')];
  const child = spawn(process.execPath, command, {
    cwd: folder,
    env: {
      ...environment,
      PORT: String(port),
      NITRO_PORT: String(port),
      HOST: '127.0.0.1',
      NITRO_HOST: '127.0.0.1',
      ...(dev
        ? { ZERODEP_NUXT_COMPILER: '1', ZERODEP_NUXT_HMR: isolateRouteRules ? '1' : '0' }
        : {}),
    },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });
  const server = { child, baseURL: `http://127.0.0.1:${port}`, closed: false, logs };
  server.closePromise = new Promise((done) =>
    child.once('close', () => {
      server.closed = true;
      done();
    }),
  );
  for (const stream of [child.stdout, child.stderr])
    stream.on('data', (chunk) => {
      logs.push(String(chunk));
      if (logs.length > 200) logs.shift();
    });
  const deadline = Date.now() + (dev ? 90_000 : 30_000);
  while (Date.now() < deadline) {
    if (child.exitCode !== null || child.signalCode !== null) break;
    try {
      const response = await fetch(server.baseURL + '/?tone=red', {
        signal: AbortSignal.timeout(dev ? 3000 : 1000),
      });
      await response.arrayBuffer();
      if (response.ok) return server;
    } catch {
      // Nitro 尚未监听；由下面的截止时间控制等待。
    }
    await delay(150);
  }
  await stopNodeServer(server);
  throw new Error(`Nuxt server did not become ready.\n${logs.join('').slice(-12_000)}`);
}
async function stopNodeServer(server) {
  if (!server || server.closed) return;
  if (server.child.exitCode === null && server.child.signalCode === null) server.child.kill();
  await Promise.race([server.closePromise, delay(5_000, undefined, { ref: false })]);
  if (!server.closed) {
    server.child.kill('SIGKILL');
    await Promise.race([server.closePromise, delay(5_000, undefined, { ref: false })]);
  }
  if (!server.closed) throw new Error('Nuxt server process did not close its stdio streams.');
}
function extracted(html) {
  const styles = [
    ...html.matchAll(/<style\b[^>]*data-zerodep="nuxt-fixture"[^>]*>[\s\S]*?<\/style>/g),
  ].map((match) => match[0]);
  const marker = html.match(
    /<script\b[^>]*id="__zerodep_css_manifest__"[^>]*>([\s\S]*?)<\/script>/,
  );
  assert(marker, 'Missing SSR JSON manifest.');
  const manifest = JSON.parse(marker[1]);
  assert.equal(manifest.version, 1);
  assert(manifest.runtime.records.length > 0, 'SSR runtime produced no records.');
  assert(styles.length > 0, 'SSR output contains no zerodep style tags.');
  return { styles: styles.join(''), marker: marker[0], manifest };
}
async function fetchPage(baseURL, path, options) {
  const headers = new Headers(options?.headers);
  if (!headers.has('accept')) headers.set('accept', 'text/html');
  const response = await fetch(baseURL + path, { ...options, headers });
  return { status: response.status, headers: response.headers, html: await response.text() };
}
async function verifySSR(baseURL) {
  const paths = Array.from({ length: 8 }, (_, index) => (index % 2 ? '/?tone=blue' : '/?tone=red'));
  const pages = await Promise.all(paths.map((path) => fetchPage(baseURL, path)));
  for (const [index, page] of pages.entries()) {
    assert.equal(page.status, 200);
    assert.match(page.headers.get('content-type') ?? '', /text\/html/);
    const { styles, manifest } = extracted(page.html);
    const blue = index % 2 === 1;
    assert(styles.includes(blue ? '#2563eb' : '#dc2626'), 'Wrong request theme in CSS.');
    // 主题 token 的 var() fallback 可包含默认红色；用全局背景规则区分泄漏。
    assert(styles.includes(blue ? '#dbeafe' : '#fee2e2'), 'Wrong request global CSS.');
    assert(!styles.includes(blue ? '#fee2e2' : '#dbeafe'), 'Concurrent request CSS leaked.');
    assert(manifest.globals.some((item) => item.key === 'fixture-body'));
    assert(page.html.includes(`data-tone="${blue ? 'blue' : 'red'}"`));
  }
  report.checks.push('concurrent-ssr');

  const redirect = await fetchPage(baseURL, '/redirect', { redirect: 'manual' });
  assert.equal(redirect.status, 302);
  assert.match(redirect.headers.get('location') ?? '', /\/other\?tone=blue$/);
  const error = await fetchPage(baseURL, '/fail');
  assert(error.status >= 400, 'Error route unexpectedly succeeded.');
  assert.match(error.html, /data-error-page/);
  assert(!error.html.includes('data-unexpected-fail-body'));
  const errorOutput = extracted(error.html);
  assert(!errorOutput.manifest.globals.some((item) => item.key === 'failed-tree'));
  assert(!errorOutput.manifest.globals.some((item) => item.key === 'fixture-body'));
  assert(!errorOutput.styles.includes('#123456'));
  assert(!errorOutput.styles.includes('#fee2e2'));
  const jsonError = await fetchPage(baseURL, '/fail', {
    headers: { accept: 'application/json' },
  });
  assert(jsonError.status >= 400);
  assert.match(jsonError.headers.get('content-type') ?? '', /application\/json/);
  assert(!jsonError.html.includes('__zerodep_css_manifest__'));
  const after = await fetchPage(baseURL, '/?tone=red');
  assert.equal(after.status, 200);
  assert(extracted(after.html).styles.includes('#dc2626'));
  report.checks.push('redirect-error-recovery');

  const csp = await fetchPage(baseURL, '/?tone=blue&csp=1');
  const policy = csp.headers.get('content-security-policy') ?? '';
  const nonce = policy.match(/'nonce-([^']+)'/)?.[1];
  assert(nonce, 'Missing explicit CSP nonce.');
  const content = extracted(csp.html);
  assert(content.styles.includes(`nonce="${nonce}"`));
  assert(content.marker.includes(`nonce="${nonce}"`));
  report.checks.push('nonce-ssr');

  const nested = await fetchPage(baseURL, '/async?tone=blue&csp=1');
  assert.equal(nested.status, 200);
  assert.match(nested.html, /data-async-color="#2563eb"/);
  const nestedOutput = extracted(nested.html);
  assert(nestedOutput.styles.includes('#2563eb'));
  assert(nestedOutput.manifest.globals.some((item) => item.key === 'fixture-body'));
  const outerNonce = nested.headers.get('content-security-policy')?.match(/'nonce-([^']+)'/)?.[1];
  assert(outerNonce, 'Nested JSON request removed the outer CSP nonce.');
  assert(nestedOutput.styles.includes(`nonce="${outerNonce}"`));
  assert(nestedOutput.marker.includes(`nonce="${outerNonce}"`));
  const jsonTone = await fetchPage(baseURL, '/api/tone?tone=blue', {
    headers: { accept: 'application/json' },
  });
  assert.equal(JSON.parse(jsonTone.html).color, '#2563eb');
  assert(!jsonTone.html.includes('__zerodep_css_manifest__'));
  report.checks.push('nested-json-ssr-request-isolation');

  const cacheMiss = await fetchPage(baseURL, '/cached');
  const cacheHit = await fetchPage(baseURL, '/cached');
  assert.equal(cacheMiss.status, 200);
  assert.equal(cacheHit.status, 200);
  const firstSerial = Number(cacheMiss.html.match(/data-cache-serial="(\d+)"/)?.[1]);
  const secondSerial = Number(cacheHit.html.match(/data-cache-serial="(\d+)"/)?.[1]);
  assert(Number.isSafeInteger(firstSerial) && firstSerial > 0);
  assert.equal(secondSerial, firstSerial, 'Cached page was rendered again on the second request.');
  const firstCache = extracted(cacheMiss.html);
  const secondCache = extracted(cacheHit.html);
  assert.equal(firstCache.styles, secondCache.styles);
  assert.deepEqual(firstCache.manifest, secondCache.manifest);
  for (const page of [cacheMiss, cacheHit])
    assert.equal(page.headers.get('content-security-policy'), "style-src 'self' 'unsafe-inline'");
  assert(!firstCache.styles.includes(' nonce='));
  assert(!firstCache.marker.includes(' nonce='));
  const serialProbe = await fetchPage(baseURL, '/api/cache-serial', {
    headers: { accept: 'application/json' },
  });
  assert.equal(JSON.parse(serialProbe.html).serial, firstSerial + 1);
  report.checks.push('cached-html-manifest-hit');
}
async function verifyBrowser(baseURL) {
  browser = await launchBrowser();
  await withBrowserPage(browser, output, 'nuxt-node-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(baseURL + '/?tone=red', { waitUntil: 'networkidle' });
    await page.locator('[data-card]').waitFor();
    await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
    assert.equal(await page.locator('[data-card]').getAttribute('data-brand'), '#dc2626');
    assert.equal(
      await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).width),
      '80px',
    );
    assert.equal(
      await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).color),
      'rgb(220, 38, 38)',
    );
    await page.evaluate(() => {
      window.__nuxtFixtureDocument = Math.random();
    });
    const documentMarker = await page.evaluate(() => window.__nuxtFixtureDocument);
    await page.locator('[data-grow]').click();
    await page.waitForFunction(
      () => getComputedStyle(document.querySelector('[data-card]')).width === '100px',
    );
    await page.locator('[data-other-link]').click();
    await page.locator('[data-other-card]').waitFor();
    await page.waitForFunction(
      () => getComputedStyle(document.body).backgroundColor === 'rgb(219, 234, 254)',
    );
    assert.match(page.url(), /\/other\?tone=blue$/);
    assert.equal(await page.evaluate(() => window.__nuxtFixtureDocument), documentMarker);
    assert.equal(
      await page.locator('[data-other-card]').evaluate((node) => getComputedStyle(node).color),
      'rgb(37, 99, 235)',
    );
    assert.equal(
      await page.evaluate(() => getComputedStyle(document.body).backgroundColor),
      'rgb(219, 234, 254)',
    );
    assert((await page.locator('style[data-zerodep="nuxt-fixture"]').count()) > 0);
    assert.deepEqual(errors, []);
  });
  report.checks.push('node-hydration-spa');
  await withBrowserPage(browser, output, 'nuxt-error-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(baseURL + '/fail', { waitUntil: 'networkidle' });
    assert(response && response.status() >= 400);
    await page.locator('[data-error-page]').waitFor();
    await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
    assert.equal(
      await page.locator('[data-error-page]').evaluate((node) => getComputedStyle(node).color),
      'rgb(162, 28, 175)',
    );
    assert.deepEqual(errors, []);
  });
  report.checks.push('error-hydration-no-orphan-globals');
  await withBrowserPage(browser, output, 'nuxt-nested-json-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(baseURL + '/async?tone=blue', { waitUntil: 'networkidle' });
    await page.locator('[data-async]').waitFor();
    await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
    assert.equal(await page.locator('[data-async]').getAttribute('data-async-color'), '#2563eb');
    assert.equal(
      await page.locator('[data-async]').evaluate((node) => getComputedStyle(node).backgroundColor),
      'rgb(37, 99, 235)',
    );
    assert.deepEqual(errors, []);
  });
  report.checks.push('nested-json-hydration');
}
async function verifyDevelopmentHMR(folder) {
  const indexFile = join(folder, 'app/pages/index.vue');
  const appFile = join(folder, 'app/app.vue');
  const [indexSource, appSource] = await Promise.all([
    readFile(indexFile, 'utf8'),
    readFile(appFile, 'utf8'),
  ]);
  assert(indexSource.includes('const width = ref(80);'));
  assert(appSource.includes("'#fee2e2'"));
  const diagnostics = {
    devRouteRulesIsolated: true,
    signals: [],
    navigations: [],
    requests: [],
    console: [],
    serverLog: '',
  };
  report.hmrDiagnostics = diagnostics;
  devServer = await startNodeServer(folder, true);
  try {
    browser ??= await launchBrowser();
    await withBrowserPage(browser, output, 'nuxt-dev-hmr', async (page) => {
      const errors = [];
      const hydrationWarnings = [];
      const transformedModules = [];
      let routeEditStarted = false;
      let resolveRouteRefresh;
      const routeRefresh = new Promise((resolve) => {
        resolveRouteRefresh = resolve;
      });
      await page.exposeFunction('__zerodepRecordHmr', (signal) => {
        diagnostics.signals.push(signal);
        if (routeEditStarted && signal.event === 'beforeFullReload') resolveRouteRefresh(signal);
      });
      page.on('framenavigated', (frame) => {
        if (frame === page.mainFrame())
          diagnostics.navigations.push({ url: frame.url(), at: Date.now() });
      });
      page.on('request', (request) => {
        if (request.isNavigationRequest() && request.frame() === page.mainFrame())
          diagnostics.requests.push({ url: request.url(), at: Date.now() });
      });
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (/\[vite\]|\[nuxt\]/i.test(message.text()))
          diagnostics.console.push({ type: message.type(), text: message.text() });
        if (message.type() === 'warning' && /hydration/i.test(message.text()))
          hydrationWarnings.push(message.text());
      });
      page.on('response', (response) => {
        if (/index\.vue(?:\?|$)/.test(response.url()))
          transformedModules.push(response.text().catch(() => ''));
      });
      await page.goto(devServer.baseURL + '/?tone=red', { waitUntil: 'networkidle' });
      await page.locator('[data-auto]').waitFor();
      await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
      assert.equal(
        await page.locator('[data-auto]').evaluate((node) => getComputedStyle(node).width),
        '80px',
      );
      const transformed = (await Promise.all(transformedModules)).join('\n');
      assert.match(
        transformed,
        /bindUnit|__zcss_bind_unit|compiler-runtime/,
        'Optional Nuxt compiler did not transform the same-SFC createStyles call.',
      );
      await page.evaluate(() => {
        window.__zerodepHmrDocument = Math.random();
      });
      const documentMarker = await page.evaluate(() => window.__zerodepHmrDocument);
      const hmrCount = () => page.evaluate(() => window.__zerodepHmrEvents?.length ?? -1);
      const waitForHmr = (previous, file) =>
        page.waitForFunction(
          ({ previous, file }) =>
            window.__zerodepHmrEvents
              ?.slice(previous)
              .some((paths) => paths.some((path) => path.includes(file))),
          { previous, file },
          { timeout: 20_000 },
        );
      assert((await hmrCount()) >= 0, 'Nuxt test HMR clock was not installed.');

      const changedApp = appSource.replace("'#fee2e2'", "'#fef3c7'");
      const beforeAppScript = await hmrCount();
      await writeFile(appFile, changedApp);
      await waitForHmr(beforeAppScript, 'app.vue');
      await page.waitForFunction(
        () => getComputedStyle(document.body).backgroundColor === 'rgb(254, 243, 199)',
        undefined,
        { timeout: 20_000 },
      );
      assert.equal(await page.evaluate(() => window.__zerodepHmrDocument), documentMarker);
      const styles = await page.evaluate(() =>
        [...document.querySelectorAll('style[data-zerodep="nuxt-fixture"]')].map((style) => ({
          id: style.getAttribute('data-zerodep-id'),
          css: style.sheet ? [...style.sheet.cssRules].map((rule) => rule.cssText).join('\n') : '',
        })),
      );
      assert(styles.length > 0);
      assert.equal(new Set(styles.map((style) => style.id)).size, styles.length);
      const css = styles.map((style) => style.css).join('\n');
      assert.match(css, /#fef3c7|rgb\(254,\s*243,\s*199\)/i);
      assert.doesNotMatch(css, /#fee2e2|rgb\(254,\s*226,\s*226\)/i);

      // 纯模板更新应保留同一个setup/lease；若误触发dispose，背景会丢失。
      assert(changedApp.includes('<main data-fixture-root'));
      const beforeAppTemplate = await hmrCount();
      await writeFile(
        appFile,
        changedApp.replace('<main data-fixture-root', '<main data-fixture-root data-template-hot'),
      );
      await waitForHmr(beforeAppTemplate, 'app.vue');
      await page.locator('[data-fixture-root][data-template-hot]').waitFor();
      assert.equal(await page.evaluate(() => window.__zerodepHmrDocument), documentMarker);
      assert.equal(
        await page.evaluate(() => getComputedStyle(document.body).backgroundColor),
        'rgb(254, 243, 199)',
      );
      const afterTemplate = await page.evaluate(() =>
        [...document.querySelectorAll('style[data-zerodep="nuxt-fixture"]')].map((style) =>
          style.getAttribute('data-zerodep-id'),
        ),
      );
      assert.deepEqual(
        afterTemplate,
        styles.map((style) => style.id),
      );

      // Nuxt自身可能因pages文件改动随后刷新虚拟route-rules模块；放在根HMR之后。
      const beforeIndex = await hmrCount();
      routeEditStarted = true;
      await writeFile(
        indexFile,
        indexSource.replace('const width = ref(80);', 'const width = ref(96);'),
      );
      await waitForHmr(beforeIndex, 'index.vue');
      await page.waitForFunction(
        () => {
          const node = document.querySelector('[data-auto]');
          return node && getComputedStyle(node).width === '96px';
        },
        undefined,
        { timeout: 20_000 },
      );
      const nativeRefresh = await Promise.race([
        routeRefresh,
        delay(5_000, undefined, { ref: false }).then(() => null),
      ]);
      if (nativeRefresh) {
        assert(nativeRefresh.paths.includes('*'));
        await page.waitForFunction(
          (marker) => window.__zerodepHmrDocument !== marker,
          documentMarker,
          { timeout: 30_000 },
        );
        await page.locator('[data-card]').waitFor();
        await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
        assert.match(devServer.logs.join(''), /page reload virtual:nuxt:.*route-rules\.mjs/);
        assert.equal(
          await page.locator('[data-auto]').evaluate((node) => getComputedStyle(node).width),
          '96px',
        );
        diagnostics.nativeRouteRefresh = true;
      } else {
        assert.equal(await page.evaluate(() => window.__zerodepHmrDocument), documentMarker);
        diagnostics.nativeRouteRefresh = false;
      }

      await page.reload({ waitUntil: 'networkidle' });
      await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
      assert.equal(
        await page.locator('[data-auto]').evaluate((node) => getComputedStyle(node).width),
        '96px',
      );
      assert.deepEqual(errors, []);
      assert.deepEqual(hydrationWarnings, []);
    });
    report.checks.push('nuxt-dev-hmr-and-optional-compiler');
  } finally {
    const restores = await Promise.allSettled([
      writeFile(indexFile, indexSource),
      writeFile(appFile, appSource),
    ]);
    const server = devServer;
    try {
      await stopNodeServer(server);
    } finally {
      diagnostics.serverLog = server?.logs.join('').slice(-30_000) ?? '';
    }
    devServer = undefined;
    const failed = restores.filter((result) => result.status === 'rejected');
    if (failed.length)
      throw new AggregateError(
        failed.map((result) => result.reason),
        'Failed to restore Nuxt HMR fixtures.',
      );
  }
}
async function verifyNativeRouteRulesRefresh(folder) {
  const appFile = join(folder, 'app/app.vue');
  const appSource = await readFile(appFile, 'utf8');
  assert(appSource.includes("'#fee2e2'"));
  const diagnostics = {
    signals: [],
    navigations: [],
    errors: [],
    nativeRouteRefresh: false,
    serverLog: '',
  };
  report.nativeRouteRulesDiagnostics = diagnostics;
  devServer = await startNodeServer(folder, true, false);
  try {
    browser ??= await launchBrowser();
    await withBrowserPage(browser, output, 'nuxt-dev-route-rules-refresh', async (page) => {
      let resolveUpdate;
      let resolveReload;
      let editStarted = false;
      const updated = new Promise((resolve) => {
        resolveUpdate = resolve;
      });
      const reloading = new Promise((resolve) => {
        resolveReload = resolve;
      });
      await page.exposeFunction('__zerodepRecordHmr', (signal) => {
        diagnostics.signals.push(signal);
        if (
          editStarted &&
          signal.event === 'afterUpdate' &&
          signal.paths.some((path) => path.includes('app.vue'))
        )
          resolveUpdate(signal);
        if (editStarted && signal.event === 'beforeFullReload') resolveReload(signal);
      });
      page.on('framenavigated', (frame) => {
        if (frame === page.mainFrame()) diagnostics.navigations.push(frame.url());
      });
      page.on('pageerror', (error) => diagnostics.errors.push(error.message));
      await page.goto(devServer.baseURL + '/?tone=red', { waitUntil: 'networkidle' });
      await page.locator('[data-card]').waitFor();
      await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
      await page.evaluate(() => {
        window.__zerodepNativeDocument = Math.random();
      });
      const marker = await page.evaluate(() => window.__zerodepNativeDocument);

      editStarted = true;
      await writeFile(appFile, appSource.replace("'#fee2e2'", "'#fef3c7'"));
      const first = await Promise.race([
        updated,
        reloading,
        delay(20_000, undefined, { ref: false }).then(() => null),
      ]);
      assert(first, 'Nuxt did not report an app.vue update or native reload.');
      const nativeReload = await Promise.race([
        reloading,
        delay(5_000, undefined, { ref: false }).then(() => null),
      ]);
      if (nativeReload) {
        assert(nativeReload.paths.includes('*'));
        await page.waitForFunction(
          (previous) => window.__zerodepNativeDocument !== previous,
          marker,
          { timeout: 30_000 },
        );
        await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
        assert.match(devServer.logs.join(''), /page reload virtual:nuxt:.*route-rules\.mjs/);
        diagnostics.nativeRouteRefresh = true;
      } else {
        await updated;
        assert.equal(await page.evaluate(() => window.__zerodepNativeDocument), marker);
      }
      await page.waitForFunction(
        () => getComputedStyle(document.body).backgroundColor === 'rgb(254, 243, 199)',
        undefined,
        { timeout: 20_000 },
      );
      await page.locator('[data-grow]').click();
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-card]')).width === '100px',
      );
      assert((await page.locator('style[data-zerodep="nuxt-fixture"]').count()) > 0);
      assert.deepEqual(diagnostics.errors, []);
    });
    report.checks.push('nuxt-dev-native-route-rules-refresh');
  } finally {
    await writeFile(appFile, appSource);
    const server = devServer;
    try {
      await stopNodeServer(server);
    } finally {
      diagnostics.serverLog = server?.logs.join('').slice(-30_000) ?? '';
    }
    devServer = undefined;
  }
}
async function verifyResumedHMR() {
  await verifyResumeWorkspace();
  await verifyPackageIdentity(appDir);
  const files = ['app/app.vue', 'app/pages/index.vue', 'app/plugins/hmr-clock.client.ts'];
  const pluginsDir = join(appDir, 'app/plugins');
  const hadPluginsDir = await stat(pluginsDir).then(
    () => true,
    (error) => {
      if (error.code === 'ENOENT') return false;
      throw error;
    },
  );
  const originals = await Promise.all(
    files.map((file) =>
      readFile(join(appDir, file), 'utf8').catch((error) => {
        if (error.code === 'ENOENT') return undefined;
        throw error;
      }),
    ),
  );
  try {
    for (const file of files) {
      await mkdir(dirname(join(appDir, file)), { recursive: true });
      await cp(join(fixture, file), join(appDir, file));
    }
    await verifyDevelopmentHMR(appDir);
    report.checks.push('diagnostic-hmr-existing-install');
  } finally {
    const restored = await Promise.allSettled(
      files.map((file, index) =>
        originals[index] === undefined
          ? rm(join(appDir, file), { force: true })
          : writeFile(join(appDir, file), originals[index]),
      ),
    );
    if (!hadPluginsDir)
      await rmdir(pluginsDir).catch((error) => {
        if (error.code !== 'ENOENT') throw error;
      });
    const failed = restored.filter((result) => result.status === 'rejected');
    if (failed.length)
      throw new AggregateError(
        failed.map((result) => result.reason),
        'Failed to restore resumed Nuxt fixture files.',
      );
  }
}
async function startStaticServer(publicDir) {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
      const target = resolve(publicDir, '.' + pathname, pathname.endsWith('/') ? 'index.html' : '');
      assert(target.startsWith(publicDir + sep), 'Static request escaped output directory.');
      const file = (await stat(target)).isDirectory() ? join(target, 'index.html') : target;
      const types = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
      };
      response.setHeader('Content-Type', types[extname(file)] ?? 'application/octet-stream');
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
async function verifyGenerated(folder) {
  const publicDir = join(folder, '.output/public');
  for (const page of ['index.html', 'other/index.html']) {
    const html = await readFile(join(publicDir, page), 'utf8');
    extracted(html);
  }
  for (const page of ['async/index.html', 'cached/index.html'])
    await assert.rejects(stat(join(publicDir, page)), { code: 'ENOENT' });
  staticServer = await startStaticServer(publicDir);
  browser ??= await launchBrowser();
  await withBrowserPage(browser, output, 'nuxt-generated-hydration', async (page) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(staticServer.baseURL + '/', { waitUntil: 'networkidle' });
    await page.locator('[data-card]').waitFor();
    await page.waitForFunction(() => !document.getElementById('__zerodep_css_manifest__'));
    assert.equal(
      await page.locator('[data-card]').evaluate((node) => getComputedStyle(node).width),
      '80px',
    );
    assert.deepEqual(errors, []);
  });
  report.checks.push('generate-html-hydration');
}

try {
  await saveReport();
  if (hmrOnly) {
    await verifyResumedHMR();
  } else {
    if (diagnosticResume) {
      await verifyResumeWorkspace();
      await verifyPackageIdentity(appDir);
      report.checks.push('diagnostic-resume-existing-build');
    } else {
      await mkdir(packsDir);
      await mkdir(appDir);
      for (const name of ['core', 'vue', 'nuxt'])
        pnpm(['pack', '--pack-destination', packsDir], {
          cwd: resolve(root, name),
          env: environment,
        });
      const archives = await readdir(packsDir);
      const core = archive(archives, 'core');
      const vue = archive(archives, 'vue');
      const nuxt = archive(archives, 'nuxt');
      await cp(fixture, appDir, { recursive: true });
      await writeFile(
        join(appDir, 'pnpm-workspace.yaml'),
        [
          'packages: []',
          'autoInstallPeers: false',
          'strictPeerDependencies: true',
          'linkWorkspacePackages: false',
          'onlyBuiltDependencies:',
          '  - esbuild',
          'overrides:',
          `  '@zerodep-css/core': ${JSON.stringify(`file:${core}`)}`,
          `  '@zerodep-css/vue': ${JSON.stringify(`file:${vue}`)}`,
          '',
        ].join('\n'),
      );
      await writeFile(
        join(appDir, 'package.json'),
        JSON.stringify(
          {
            name: 'isolated-nuxt-consumer',
            private: true,
            type: 'module',
            packageManager: 'pnpm@10.34.5',
            dependencies: {
              '@zerodep-css/core': `file:${core}`,
              '@zerodep-css/vue': `file:${vue}`,
              '@zerodep-css/nuxt': `file:${nuxt}`,
              nuxt: catalog.catalog.nuxt,
              vue: catalog.catalog.vue,
            },
            devDependencies: {
              typescript: catalog.catalog.typescript,
              'vue-tsc': catalog.catalogs.languageServices['vue-tsc'],
              '@types/node': catalog.catalog['@types/node'],
            },
          },
          null,
          2,
        ),
      );
      assert.equal(await version('nuxt'), catalog.catalog.nuxt);
      assert.equal(await version('vue'), catalog.catalog.vue);
      pnpm(['install', '--no-frozen-lockfile'], { cwd: appDir, env: environment });
      await verifyPackageIdentity(appDir);
      pnpm(['audit', '--prod', '--audit-level', 'moderate'], { cwd: appDir, env: environment });
      report.checks.push('isolated-production-audit');
      pnpm(['exec', 'nuxt', 'build'], { cwd: appDir, env: environment });
      pnpm(['exec', 'nuxt', 'typecheck'], { cwd: appDir, env: environment });
      report.checks.push('package-identity-and-types');
    }
    nodeServer = await startNodeServer(appDir);
    await verifySSR(nodeServer.baseURL);
    await verifyBrowser(nodeServer.baseURL);
    await stopNodeServer(nodeServer);
    nodeServer = undefined;
    if (!diagnosticResume) {
      await verifyDevelopmentHMR(appDir);
      await verifyNativeRouteRulesRefresh(appDir);
    }
    pnpm(['exec', 'nuxt', 'generate'], {
      cwd: appDir,
      env: { ...environment, ZERODEP_NUXT_GENERATE: '1' },
    });
    await verifyGenerated(appDir);
  }
  report.passed = true;
  report.status = hmrOnly
    ? 'diagnostic-hmr-passed'
    : diagnosticResume
      ? 'diagnostic-passed'
      : 'passed';
  report.cleanFullPass = !diagnosticResume;
} catch (error) {
  report.status = 'failed';
  report.error = String(error.stack ?? error);
  throw error;
} finally {
  const cleanup = await Promise.allSettled([
    stopNodeServer(nodeServer),
    stopNodeServer(devServer),
    staticServer
      ? new Promise((done, fail) =>
          staticServer.server.close((error) => (error ? fail(error) : done())),
        )
      : Promise.resolve(),
    browser?.close() ?? Promise.resolve(),
  ]);
  const cleanupErrors = cleanup
    .filter((result) => result.status === 'rejected')
    .map((result) => String(result.reason));
  if (cleanupErrors.length) {
    report.cleanupErrors = cleanupErrors;
    report.passed = false;
    report.status = 'cleanup-failed';
  }
  await saveReport();
  if (report.passed) {
    const actual = await realpath(workspace);
    const parent = await realpath(tmpdir());
    assert.equal(dirname(actual), parent);
    assert(basename(actual).startsWith('zerodep-nuxt-'));
    await rm(actual, { recursive: true });
  } else {
    console.error('Nuxt consumer workspace retained for diagnosis: ' + workspace);
  }
  if (cleanupErrors.length && !report.error) throw new Error(cleanupErrors.join('\n'));
}
