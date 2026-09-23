// 对照依赖只安装到独占临时目录；并行构建，正式计时交给同一个浏览器执行器。
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, copyFile, realpath, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, basename, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { gzipSync } from 'node:zlib';
import { randomUUID } from 'node:crypto';
import { build } from 'esbuild';
import { parse } from 'yaml';
import { root, pnpm, run } from '../../scripts/lib/environment.mjs';

const catalogs = parse(await readFile(resolve(root, 'pnpm-workspace.yaml'), 'utf8'));
const dependencies = { ...catalogs.catalogs.benchmark, esbuild: catalogs.catalog.esbuild };
const output = resolve(root, 'test-results/engine-comparison');
await mkdir(output, { recursive: true });
const runId = randomUUID();
await writeFile(
  resolve(output, 'results.json'),
  JSON.stringify({ runId, status: 'preparing', passed: false }),
);
const workspace = await mkdtemp(resolve(tmpdir(), 'zerodep-bench-'));
const prepareOnly = process.argv.includes('--prepare-only');
let passed = false;
try {
  await writeFile(
    resolve(workspace, 'package.json'),
    JSON.stringify(
      { name: 'zerodep-engine-comparison', private: true, type: 'module', dependencies },
      null,
      2,
    ),
  );
  await writeFile(
    resolve(workspace, 'pnpm-workspace.yaml'),
    'packages: []\nautoInstallPeers: false\n',
  );
  pnpm(['install', '--ignore-scripts'], {
    cwd: workspace,
    env: { ...process.env, NODE_PATH: '', CI: 'true' },
  });
  await copyFile(resolve(workspace, 'pnpm-lock.yaml'), resolve(output, 'pnpm-lock.yaml'));
  const require = createRequire(resolve(workspace, 'package.json'));
  const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');
  const assets = resolve(workspace, 'assets');
  await mkdir(assets);
  await writeFile(
    resolve(workspace, 'styles.css.ts'),
    `import {style} from '@vanilla-extract/css';
export const fixed=style({width:20});
export const variable=style({width:'var(--bench-width,20px)'});
export const widths=Object.fromEntries(Array.from({length:16},(_,i)=>[i+20,style({width:i+20})]));
`,
  );
  const common = {
    absWorkingDir: workspace,
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: 'es2023',
    minify: true,
    metafile: true,
    define: { 'process.env.NODE_ENV': '"production"' },
  };
  const built = await Promise.allSettled([
    build({
      ...common,
      stdin: {
        contents: `export {default as createEmotion} from '@emotion/css/create-instance';`,
        resolveDir: workspace,
      },
      globalName: 'emotionBench',
      outfile: resolve(assets, 'emotion.js'),
    }),
    build({
      ...common,
      stdin: { contents: `export {css} from 'goober';`, resolveDir: workspace },
      globalName: 'gooberBench',
      outfile: resolve(assets, 'goober.js'),
    }),
    build({
      ...common,
      entryPoints: [resolve(workspace, 'styles.css.ts')],
      globalName: 'vanillaBench',
      outfile: resolve(assets, 'vanilla.js'),
      plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
    }),
  ]);
  for (const result of built) if (result.status === 'rejected') throw result.reason;
  const sizes = {};
  for (const name of ['emotion.js', 'goober.js', 'vanilla.js', 'vanilla.css']) {
    const bytes = await readFile(resolve(assets, name));
    sizes[name] = { bytes: bytes.length, gzipBytes: gzipSync(bytes).length };
  }
  const manifest = {
    runId,
    dependencies,
    frameworks: { vue: catalogs.catalog.vue, svelte: catalogs.catalog.svelte },
    sizes,
    scripts: ['emotion.js', 'goober.js', 'vanilla.js'],
    stylesheet: 'vanilla.css',
  };
  const manifestFile = resolve(assets, 'manifest.json');
  await writeFile(manifestFile, JSON.stringify(manifest, null, 2));
  await writeFile(resolve(output, 'build.json'), JSON.stringify(manifest, null, 2));
  if (prepareOnly) {
    await writeFile(
      resolve(output, 'prepared.json'),
      JSON.stringify({ workspace, manifestFile }, null, 2),
    );
    console.log('Prepared comparison assets: ' + manifestFile);
  } else {
    run(process.execPath, [resolve(root, '.research/performance/frameworks.mjs'), manifestFile]);
    passed = true;
  }
  console.log(JSON.stringify({ dependencies, sizes }, null, 2));
} finally {
  if (passed) {
    const actual = await realpath(workspace),
      parent = await realpath(tmpdir());
    assert.equal(dirname(actual), parent);
    assert(basename(actual).startsWith('zerodep-bench-'));
    await rm(actual, { recursive: true });
  } else if (!prepareOnly) {
    await writeFile(
      resolve(output, 'failure.json'),
      JSON.stringify({ workspace, dependencies, passed: false }, null, 2),
    );
    console.error('Comparison workspace retained for diagnosis: ' + workspace);
    await writeFile(
      resolve(output, 'results.json'),
      JSON.stringify({ runId, status: 'failed', passed: false }),
    );
  }
}
