// 同进程、相同依赖的交替对照；同时检查 CSS、哈希、资源数和用户回调执行次数。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { performance } from 'node:perf_hooks';
import { build } from 'esbuild';
import { computed, shallowRef } from 'vue';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const revision = process.argv[2] ?? '9cd39b9';
assert.match(revision, /^[a-f0-9]{7,40}$/);
const baselineSha = execFileSync('git', ['rev-parse', revision + '^{commit}'], {
  cwd: root,
  encoding: 'utf8',
}).trim();
const label = process.argv[3] ?? 'current';
assert.match(label, /^[a-z0-9-]+$/);
const output = resolve(root, 'test-results/runtime-paired', label);
await mkdir(output, { recursive: true });
const modules = {};
for (const name of ['baseline', 'current']) {
  const file = resolve(output, name + '.mjs');
  await build({
    stdin: {
      contents: `export * from './index.ts'; export * from './themes.ts'; export * from './style-scope.ts';`,
      resolveDir: resolve(root, 'core/src'),
      loader: 'ts',
    },
    outfile: file,
    bundle: true,
    format: 'esm',
    platform: 'node',
    external: ['css-tree'],
    plugins:
      name === 'baseline'
        ? [
            {
              name: 'git-baseline',
              setup(bundler) {
                bundler.onLoad({ filter: /\.ts$/ }, ({ path }) => {
                  const local = relative(root, path).replaceAll('\\', '/');
                  assert(local.startsWith('core/src/'));
                  return {
                    contents: execFileSync('git', ['show', `${baselineSha}:${local}`], {
                      cwd: root,
                      encoding: 'utf8',
                      maxBuffer: 16 * 1024 * 1024,
                    }),
                    loader: 'ts',
                    resolveDir: dirname(path),
                  };
                });
              },
            },
          ]
        : [],
  });
  modules[name] = await import(pathToFileURL(file).href);
}
const iterations = 2000,
  rounds = 5;
const cases = [
  'basic',
  'units',
  'tokens',
  'theme-fixed',
  'theme-toggle',
  'theme-fresh',
  'theme-keywords',
  'theme-native-fixed',
  'theme-native-toggle',
  'theme-native-keywords',
];
function sample(api, name) {
  globalThis.gc?.();
  const runtime = api.createRuntime({ target: null });
  const current = shallowRef(api.lightTheme.defaults);
  let reads = 0,
    calls = 0;
  const native = name.includes('native');
  // 与适配器相同：两个版本均由 computed 负责有效主题解析，不能只让新版承担它。
  const values = native
    ? computed(() => api.resolveTheme(api.lightTheme, current.value))
    : undefined;
  const read = () => {
    reads++;
    return values ? values.value : current.value;
  };
  const prepared =
    native && api.prepareThemeStyle
      ? computed(() => api.prepareThemeStyle(api.lightTheme, read()))
      : undefined;
  const scope = api.createThemeScope(
    api.lightTheme,
    read,
    undefined,
    prepared ? () => prepared.value : undefined,
  );
  const view = api.createRuntimeView(
    runtime,
    scope,
    name.endsWith('keywords') ? api.ThemeCss : api.Css,
  );
  let width = 0,
    last;
  const factory = (s) => {
    calls++;
    if (name === 'tokens') {
      s.display.token('flex');
      s.position.token('relative');
      s.color.token('rebeccapurple');
    } else if (name === 'units') {
      // 重复访问同一属性方法，区分固定查找成本与真正的响应式计算。
      for (let i = 0; i < 4; i++) s.padding.px(width, 16);
      s.margin.rem(1, 2);
      s.width.px(width);
    } else if (name.endsWith('keywords')) {
      s.color.primary;
      s.backgroundColor.surface;
      s.padding.md;
      s.width.px(width);
    } else {
      s.display.flex;
      s.padding.px(8, 16);
      s.width.px(width);
    }
  };
  const themed = name.startsWith('theme-');
  const step = (i) => {
    width = (i % 16) + 100;
    if (name.endsWith('toggle'))
      current.value = i % 2 ? api.lightTheme.defaults : api.darkTheme.defaults;
    if (name === 'theme-fresh')
      current.value = api.lightTheme.resolve({ color: { primary: i % 2 ? '#123456' : '#654321' } });
    last = (themed ? view : runtime).css(factory);
  };
  try {
    for (let i = 0; i < 100; i++) step(i);
    calls = 0;
    reads = 0;
    const start = performance.now();
    for (let i = 0; i < iterations; i++) step(i);
    const milliseconds = performance.now() - start;
    assert.equal(calls, iterations, '用户回调不能因缓存跳过');
    assert.equal(
      reads,
      prepared ? (name.endsWith('toggle') ? iterations : 0) : themed ? iterations : 0,
      '原生缓存只在依赖变化时重新准备',
    );
    return { milliseconds, calls, reads, last, manifest: runtime.snapshot() };
  } finally {
    runtime.dispose();
  }
}
const samples = Object.fromEntries(cases.map((name) => [name, { baseline: [], current: [] }]));
for (let round = 0; round < rounds; round++) {
  for (const name of round % 2 ? [...cases].reverse() : cases) {
    const pair = {};
    for (const implementation of round % 2 ? ['current', 'baseline'] : ['baseline', 'current']) {
      const value = sample(modules[implementation], name);
      samples[name][implementation].push(value.milliseconds);
      pair[implementation] = value;
    }
    assert.equal(pair.current.last, pair.baseline.last);
    assert.deepEqual(pair.current.manifest, pair.baseline.manifest, '输出、哈希与注册顺序必须一致');
  }
}
const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const results = Object.fromEntries(
  cases.map((name) => {
    const baseline = median(samples[name].baseline),
      current = median(samples[name].current);
    return [name, { baseline, current, ratio: current / baseline }];
  }),
);
const report = {
  baselineSha,
  node: process.version,
  platform: process.platform,
  iterations,
  rounds,
  label,
  results,
  samples,
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
