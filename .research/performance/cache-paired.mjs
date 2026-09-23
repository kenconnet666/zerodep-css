// 两套源码在计时前独立打包；core 身份也隔离，防止旧引擎意外使用新值校验器。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { root } from '../../scripts/lib/environment.mjs';

const requested = process.argv[2] ?? 'f63ac11';
const label = process.argv[3] ?? 'current';
const control = process.argv.includes('--control');
if (!/^[a-z0-9-]+$/.test(label)) throw new Error('Use a plain result label.');
const baseline = execFileSync(
  'git',
  ['rev-parse', '--verify', '--end-of-options', requested + '^{commit}'],
  { cwd: root },
)
  .toString()
  .trim();
const output = resolve(root, 'test-results/cache-paired', label);
await mkdir(output, { recursive: true });

async function bundle(name, historical) {
  const outfile = resolve(output, name + '.mjs');
  await build({
    stdin: {
      contents:
        "export * from './internal/runtime/index.ts'; export {lightTheme,ThemeCss} from './core/src/themes.ts';",
      resolveDir: root,
    },
    outfile,
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node24',
    packages: 'external',
    plugins: [
      {
        name: 'isolated-author-sources',
        setup(bundler) {
          bundler.onResolve(
            { filter: /^@zerodep-css\/core(?:\/(?:internal|themes))?$/ },
            ({ path }) => ({
              path: resolve(
                root,
                'core/src',
                path.endsWith('/internal')
                  ? 'internal.ts'
                  : path.endsWith('/themes')
                    ? 'themes.ts'
                    : 'index.ts',
              ),
            }),
          );
          if (historical)
            bundler.onLoad({ filter: /\.ts$/ }, ({ path }) => {
              const file = relative(root, path).replaceAll('\\', '/');
              if (!file.startsWith('core/src/') && !file.startsWith('internal/runtime/')) return;
              return {
                contents: execFileSync('git', ['show', baseline + ':' + file], {
                  cwd: root,
                  maxBuffer: 16 * 1024 * 1024,
                }).toString(),
                loader: 'ts',
              };
            });
        },
      },
    ],
  });
  return import(pathToFileURL(outfile).href);
}

const before = await bundle('before', true),
  after = await bundle('after', control);
const iterations = 30_000,
  warmup = 3_000,
  rounds = 7;
const names = ['keyword', 'unit', 'three-properties', 'nested', 'raw-variable', 'themed-unit'];
function sample(engine, name) {
  const runtime = engine.createRuntime({ target: null, namespace: 'paired', warnAt: false });
  const prepared = engine.prepareThemeStyle(engine.lightTheme, engine.lightTheme.defaults);
  const scope = engine.createThemeScope(
    engine.lightTheme,
    () => engine.lightTheme.defaults,
    undefined,
    () => prepared,
  );
  const view = engine.createRuntimeView(runtime, scope, engine.ThemeCss);
  let calls = 0;
  const action = (s, i) => {
    calls++;
    switch (name) {
      case 'keyword':
        s.color.red;
        break;
      case 'raw-variable':
        s.width.raw('var(--paired-width)');
        break;
      case 'three-properties':
        s.display.flex;
        s.width.px(20 + (i % 16));
        s.color.red;
        break;
      case 'nested':
        s.color.red;
        s.width.px(20 + (i % 16));
        s.hover((h) => h.color.blue);
        break;
      default:
        s.width.px(20 + (i % 16));
    }
  };
  const css = name === 'themed-unit' ? view.css : runtime.css;
  try {
    for (let i = 0; i < warmup; i++) css((s) => action(s, i));
    const initial = runtime.snapshot();
    const start = performance.now();
    for (let i = 0; i < iterations; i++) css((s) => action(s, i));
    const milliseconds = performance.now() - start;
    assert.equal(calls, iterations + warmup);
    assert.deepEqual(runtime.snapshot(), initial);
    return { milliseconds, snapshot: initial, calls };
  } finally {
    runtime.dispose();
  }
}

const report = { baseline, control, iterations, warmup, rounds, node: process.version, cases: {} };
for (const name of names) {
  const samples = { before: [], after: [] };
  // 先各运行一次，正式采样交替先后；两边完整结果与调用次数相同才记录时间。
  const first = sample(before, name),
    second = sample(after, name);
  assert.deepEqual(first.snapshot, second.snapshot);
  for (let round = 0; round < rounds; round++) {
    const pair = {};
    for (const side of round % 2 ? ['after', 'before'] : ['before', 'after']) {
      global.gc?.();
      pair[side] = sample(side === 'before' ? before : after, name);
      samples[side].push(pair[side].milliseconds);
    }
    assert.deepEqual(pair.before.snapshot, pair.after.snapshot);
    assert.equal(pair.before.calls, pair.after.calls);
  }
  const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
  const beforeMs = median(samples.before),
    afterMs = median(samples.after);
  report.cases[name] = { beforeMs, afterMs, ratio: afterMs / beforeMs, samples };
  console.log(name, JSON.stringify({ beforeMs, afterMs, ratio: afterMs / beforeMs }));
}
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
