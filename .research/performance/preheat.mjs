// 首次计算/请求隔离/热命中与产物大小对照；所有优化仅进入研究 bundle。
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { performance } from 'node:perf_hooks';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { build, transform } from 'esbuild';
import { root } from '../../scripts/lib/environment.mjs';
import { prototypePlugin, staticDefinition, artifactFor, freeze } from './preheat-prototype.mjs';

const label = process.argv[2] ?? 'current';
const control = process.argv.includes('--control');
assert.match(label, /^[a-z0-9-]+$/);
const output = resolve(root, 'test-results/preheat', label);
await mkdir(output, { recursive: true });
const report = {
  status: 'building',
  control,
  revision: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  node: process.version,
  samples: [],
  sizes: [],
  counts: {},
  checks: [],
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report));
const entry = `export * from './index.ts';export {buildStyleDefinition} from './builder.ts';export {prepareStyle,withStyleSource} from './style-metadata.ts';export {compileProgram,inspectStylesheet,renderRecord} from './serialize.ts';export {attach} from 'research:preheat';`;
const modules = {};
for (const name of ['baseline', 'prototype', 'counts']) {
  const file = resolve(output, name + '.mjs');
  await build({
    stdin: { contents: entry, resolveDir: resolve(root, 'core/src'), loader: 'ts' },
    outfile: file,
    bundle: true,
    platform: 'node',
    format: 'esm',
    external: ['css-tree'],
    plugins: [
      prototypePlugin({ patch: name !== 'baseline' && !control, counts: name === 'counts' }),
    ],
  });
  modules[name] = await import(pathToFileURL(file).href);
}
const analyzeFile = resolve(output, 'analyzer.mjs');
await build({
  entryPoints: [resolve(root, 'internal/compiler/automatic.ts')],
  outfile: analyzeFile,
  bundle: true,
  platform: 'node',
  format: 'esm',
  packages: 'external',
});
const { automaticDeclarations } = await import(pathToFileURL(analyzeFile).href);
const api = modules.baseline,
  configs = [
    {},
    { namespace: 'app' },
    { namespace: 'request', layers: ['reset', 'ui'], layer: 'ui' },
  ];
const runtime = api.createRuntime({ target: null }),
  config = runtime.config;
runtime.dispose();
const sources = Array.from(
  { length: 64 },
  (_, i) =>
    `s=>{s.name('sample${i}');s.display.flex;s.width.px(${20 + i});s.padding.px(8,16);s.hover(h=>{h.color.red;});s.media('(width > 600px)',m=>{m.opacity.raw(0.8);});}`,
);
const fixtureFile = resolve(output, 'fixtures.mjs');
await writeFile(fixtureFile, `export default [${sources.join(',')}];`);
const factories = (await import(pathToFileURL(fixtureFile).href)).default;
const definitions = sources.map((source, i) => {
  const result = staticDefinition(source, api, automaticDeclarations);
  assert(result);
  assert.deepEqual(result.definition, api.buildStyleDefinition(factories[i]));
  return result.definition;
});
const artifacts = {};
for (const kind of ['ir', 'body', 'template', 'full'])
  artifacts[kind] = definitions.map((d) => artifactFor(kind, d, api, config));
function prepared(module, kind) {
  return factories.map((f, i) => {
    const factory = module.prepareStyle(f, createHash('sha256').update(sources[i]).digest('hex'));
    return kind === 'baseline' ? factory : module.attach(factory, artifacts[kind][i]);
  });
}
const preparedFactories = { baseline: prepared(api, 'baseline') };
for (const kind of ['ir', 'body', 'template', 'full'])
  preparedFactories[kind] = prepared(modules.prototype, kind);

// 回退与元数据不改变类名、诊断、manifest 或错误的发生时机。
for (const options of configs)
  for (const debug of [undefined, false, true]) {
    const snapshots = [];
    for (const kind of ['baseline', 'ir', 'body', 'template', 'full']) {
      const module = kind === 'baseline' ? api : modules.prototype,
        rt = module.createRuntime({ target: null, ...options, debug });
      try {
        preparedFactories[kind].slice(0, 8).forEach((f) => rt.css(f));
        snapshots.push(rt.snapshot());
      } finally {
        rt.dispose();
      }
    }
    for (const snapshot of snapshots.slice(1)) assert.deepEqual(snapshot, snapshots[0]);
  }
report.checks.push(
  'namespace/layers/runtime debug parity; full artifacts fall back on config mismatch',
);
const corpus = [
  "s=>{s.color.raw(null);s.width.raw('var(--x, 2px)');s.margin.px(8);s.marginLeft.px(2);}",
  "s=>{s.name('中文').config({debug:false});s.important(h=>{h.width.px(2)});}",
  's=>{if(false){arbitrarySideEffect()}else{s.color.red;}}',
];
for (const source of corpus) {
  const result = staticDefinition(source, api, automaticDeclarations);
  assert(result, source);
  for (const kind of ['ir', 'body', 'template', 'full'])
    artifactFor(kind, result.definition, api, config);
}
for (const source of [
  's=>{s.width.px(value)}',
  's=>{doWork();s.color.red}',
  's=>{if(false){function s(){}}s.color.red;}',
  'async s=>{s.color.red}',
  's=>{s.width.px(-1);}',
])
  assert.equal(staticDefinition(source, api, automaticDeclarations), undefined, source);
const malformed = staticDefinition(
  "s=>{s.color.raw('red;display:none');}",
  api,
  automaticDeclarations,
);
assert(malformed);
assert.throws(() => artifactFor('body', malformed.definition, api, config));
// 构建期失败只能放弃预计算；回退函数只有到原使用点才会报错。
for (const module of [api, modules.prototype]) {
  const rt = module.createRuntime({ target: null });
  assert.equal(rt.stats().records, 0);
  assert.throws(() =>
    rt.css((s) => {
      s.width.px(-1);
    }),
  );
  rt.dispose();
}
class Custom extends modules.prototype.Css {
  get width() {
    return { px: (n) => this.property.raw('width', n + 100 + 'px') };
  }
}
const customRuntime = modules.prototype.createRuntime({ target: null });
customRuntime.css(preparedFactories.body[0], Custom);
assert(customRuntime.renderStyles().includes('120px'));
customRuntime.dispose();
report.checks.push(
  'selected branches only; unsafe AST rejected; invalid CSS deferred via fallback; derived Css fallback',
);
// 预计算结果不替代 SSR manifest 校验，也不绕过 dispose/预算/恢复协议。
const ssr = api.createRuntime({ target: null });
preparedFactories.baseline.slice(0, 8).forEach((f) => ssr.css(f));
const manifest = ssr.snapshot();
ssr.dispose();
for (const kind of ['ir', 'body', 'template', 'full']) {
  const restored = modules.prototype.createRuntime({ target: null, hydrate: manifest });
  preparedFactories[kind].slice(0, 8).forEach((f) => restored.css(f));
  assert.deepEqual(restored.snapshot(), manifest);
  restored.dispose();
  assert.throws(() => restored.css(preparedFactories[kind][0]), /disposed/);
  const limited = modules.prototype.createRuntime({ target: null, maxRecords: 1 });
  limited.css(preparedFactories[kind][0]);
  assert.throws(() => limited.css(preparedFactories[kind][1]), /limit/);
  assert.equal(limited.stats().records, 1);
  limited.dispose();
}
report.checks.push('manifest restore parity; disposed runtime and record limits');

const diagnosticSource = { file: 'src/Example.vue', line: 4, column: 8 };
for (const debug of [false, true]) {
  const original = (s) => {
    s.name('有来源').config({ debug });
    s.color.red;
  };
  const definition = api.buildStyleDefinition(api.withStyleSource(original, diagnosticSource));
  let expected;
  for (const kind of ['baseline', 'ir', 'body', 'template', 'full']) {
    const module = kind === 'baseline' ? api : modules.prototype;
    let factory = module.prepareStyle(
      module.withStyleSource(original, diagnosticSource),
      'a'.repeat(64),
    );
    if (kind !== 'baseline')
      factory = module.attach(factory, artifactFor(kind, definition, api, config));
    const rt = module.createRuntime({ target: null, debug: !debug });
    rt.css(factory);
    if (expected) assert.deepEqual(rt.snapshot(), expected);
    else expected = rt.snapshot();
    rt.dispose();
  }
}
const evicted = modules.prototype.createRuntime({ target: null });
const first = evicted.css(preparedFactories.template[0]);
for (let i = 0; i < 300; i++)
  evicted.css((s) => {
    s.height.px(i + 1);
  });
const recordCount = evicted.stats().records;
assert.equal(evicted.css(preparedFactories.template[0]), first);
assert.equal(evicted.stats().records, recordCount);
evicted.dispose();
const mismatch = modules.prototype.createRuntime({ target: null });
const stale = modules.prototype.attach(
  modules.prototype.prepareStyle(factories[0], 'b'.repeat(64)),
  freeze({ ...artifacts.template[0], version: 999 }),
);
assert.equal(mismatch.css(stale), first);
mismatch.dispose();
report.checks.push(
  'source diagnostics and explicit debug override; cache eviction; artifact version fallback',
);

for (const kind of ['baseline', 'ir', 'body', 'template', 'full']) {
  globalThis.__preheatParses = {};
  const counted = prepared(modules.counts, kind),
    rt = modules.counts.createRuntime({ target: null });
  rt.css(counted[0]);
  report.counts[kind] = { first: { ...globalThis.__preheatParses } };
  globalThis.__preheatParses = {};
  rt.css(counted[0]);
  report.counts[kind].warm = { ...globalThis.__preheatParses };
  rt.dispose();
}
function sample(kind, scenario) {
  const module = kind === 'baseline' ? api : modules.prototype,
    list = preparedFactories[kind];
  let start = performance.now();
  let signature;
  const repetitions = scenario === 'requests' ? 25 : 1;
  for (let request = 0; request < repetitions; request++) {
    const rt = module.createRuntime({ target: null });
    try {
      if (scenario === 'warm') list.forEach((f) => rt.css(f));
      if (scenario === 'warm') start = performance.now();
      for (let i = 0; i < (scenario === 'warm' ? 20000 : 64); i++) rt.css(list[i % 64]);
      signature = rt.renderStyles();
    } finally {
      rt.dispose();
    }
  }
  return { milliseconds: performance.now() - start, signature };
}
const modes = ['baseline', 'ir', 'body', 'template', 'full'],
  scenarios = ['first-use', 'requests', 'warm'];
for (const kind of modes) for (const scenario of scenarios) sample(kind, scenario);
for (let round = 0; round < 7; round++)
  for (const scenario of scenarios) {
    let signature;
    for (const kind of round % 2 ? [...modes].reverse() : modes) {
      globalThis.gc?.();
      const result = sample(kind, scenario);
      if (signature) assert.equal(result.signature, signature);
      else signature = result.signature;
      report.samples.push({ round, scenario, kind, milliseconds: result.milliseconds });
    }
  }
report.results = [];
for (const scenario of scenarios)
  for (const kind of modes) {
    const sorted = report.samples
      .filter((s) => s.scenario === scenario && s.kind === kind)
      .map((s) => s.milliseconds)
      .sort((a, b) => a - b);
    report.results.push({ scenario, kind, median: sorted[3] });
  }
// 使用最小化 JS 与 gzip，包含保留的原回调；不是只比较裸 CSS 字符数。
for (const kind of modes) {
  const js = `export const styles=[${sources
    .map(
      (source, i) =>
        `prepareStyle(${source},${JSON.stringify(createHash('sha256').update(source).digest('hex'))})`,
    )
    .map((text, i) =>
      kind === 'baseline' ? text : `attach(${text},${JSON.stringify(artifacts[kind][i])})`,
    )
    .join(',')}];`;
  const minified = (await transform(js, { minify: true, loader: 'js' })).code;
  report.sizes.push({
    kind,
    sites: sources.length,
    minified: Buffer.byteLength(minified),
    gzip: gzipSync(minified).length,
  });
}
const buildSamples = [];
for (let round = 0; round < 5; round++) {
  const start = performance.now();
  for (const source of sources) {
    const result = staticDefinition(source, api, automaticDeclarations);
    artifactFor('body', result.definition, api, config);
  }
  buildSamples.push(performance.now() - start);
}
report.build = { sites: 64, samples: buildSamples };
report.status = 'passed';
await writeFile(
  resolve(output, 'artifacts.json'),
  JSON.stringify({ sources, artifacts }, null, 2) + '\n',
);
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(
  JSON.stringify(
    { results: report.results, counts: report.counts, sizes: report.sizes, build: report.build },
    null,
    2,
  ),
);
