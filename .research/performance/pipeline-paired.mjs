// 将解析次数归因和未插桩计时分开；临时插桩只进入探针 bundle，不修改产品文件。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { performance } from 'node:perf_hooks';
import { createHash, randomUUID } from 'node:crypto';
import { Session } from 'node:inspector';
import { build } from 'esbuild';
import { root } from '../../scripts/lib/environment.mjs';

const revision = process.argv[2] ?? '447acd1',
  label = process.argv[3] ?? 'current';
assert.match(revision, /^[a-f0-9]{7,40}$/);
assert.match(label, /^[a-z0-9-]+$/);
const baselineSha = execFileSync('git', ['rev-parse', revision + '^{commit}'], {
  cwd: root,
  encoding: 'utf8',
}).trim();
const output = resolve(root, 'test-results/pipeline-paired', label);
await mkdir(output, { recursive: true });
const report = {
  runId: randomUUID(),
  baselineSha,
  node: process.version,
  status: 'building',
  samples: {},
  counts: {},
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report));
const modules = {},
  sources = new Map();
for (const implementation of ['baseline', 'current'])
  for (const instrumented of [false, true]) {
    const name = implementation + (instrumented ? '-counts' : '');
    const file = resolve(output, name + '.mjs');
    await build({
      entryPoints: [resolve(root, 'core/src/index.ts')],
      outfile: file,
      bundle: true,
      format: 'esm',
      platform: 'node',
      external: ['css-tree'],
      plugins: [
        {
          name: 'source-baseline-and-counters',
          setup(bundler) {
            bundler.onLoad({ filter: /\.ts$/ }, async ({ path }) => {
              const local = relative(root, path).replaceAll('\\', '/');
              if (!local.startsWith('core/src/')) return;
              let text;
              if (implementation === 'baseline') {
                if (!sources.has(local))
                  sources.set(
                    local,
                    execFileSync('git', ['show', `${baselineSha}:${local}`], {
                      cwd: root,
                      encoding: 'utf8',
                      maxBuffer: 16 * 1024 * 1024,
                    }),
                  );
                text = sources.get(local);
              } else text = await readFile(path, 'utf8');
              if (instrumented && local === 'core/src/serialize.ts') {
                const needle = 'const ast = parse(text, {';
                assert(text.includes(needle));
                text = text.replace(
                  needle,
                  `globalThis.__parseCounts[context]=(globalThis.__parseCounts[context]??0)+1; ${needle}`,
                );
              }
              return { contents: text, loader: 'ts', resolveDir: dirname(path) };
            });
          },
        },
      ],
    });
    modules[name] = await import(pathToFileURL(file).href);
  }
const cases = { 'new-single': 500, 'new-nested': 500, 'warm-repeat': 2000, restore: 20 };
function sample(api, name, iterations = cases[name]) {
  globalThis.gc?.();
  globalThis.__parseCounts = {};
  const runtime = api.createRuntime({ target: null });
  const step = (i) =>
    runtime.css((s) => {
      s.display.flex;
      s.width.px(20 + (name === 'warm-repeat' ? i % 16 : i));
      s.padding.px(8, 16);
      if (name === 'new-nested') {
        s.hover((h) => h.color.red);
        s.media('(width > 10px)', (m) => m.borderRadius.px(i % 4));
      }
    });
  try {
    for (let i = 0; i < 50; i++) step(i);
    const manifest = name === 'restore' ? runtime.snapshot() : undefined;
    globalThis.__parseCounts = {};
    const start = performance.now();
    for (let i = 50; i < iterations + 50; i++) {
      if (manifest) api.createRuntime({ target: null, hydrate: manifest }).dispose();
      else step(i);
    }
    const milliseconds = performance.now() - start;
    return {
      milliseconds,
      counts: globalThis.__parseCounts,
      records: runtime.stats().records,
      digest: createHash('sha256').update(JSON.stringify(runtime.snapshot())).digest('hex'),
    };
  } finally {
    runtime.dispose();
  }
}
for (const name of Object.keys(cases)) {
  report.samples[name] = { baseline: [], current: [] };
  report.counts[name] = {};
  for (const implementation of ['baseline', 'current'])
    report.counts[name][implementation] = sample(modules[implementation + '-counts'], name).counts;
}
for (let round = 0; round < 5; round++)
  for (const name of round % 2 ? Object.keys(cases).reverse() : Object.keys(cases)) {
    const pair = {};
    for (const implementation of round % 2 ? ['current', 'baseline'] : ['baseline', 'current']) {
      pair[implementation] = sample(modules[implementation], name);
      report.samples[name][implementation].push(pair[implementation].milliseconds);
    }
    assert.equal(pair.baseline.digest, pair.current.digest, '规则、哈希、顺序或 manifest 不等价');
    assert.equal(pair.baseline.records, pair.current.records);
  }
const median = (values) => [...values].sort((a, b) => a - b)[2];
report.medians = Object.fromEntries(
  Object.entries(report.samples).map(([name, pair]) => [
    name,
    { baseline: median(pair.baseline), current: median(pair.current) },
  ]),
);
// 单独运行采样分析；采样阶段的时间不纳入上面的性能比值。
const inspector = new Session();
inspector.connect();
const post = (method, params = {}) =>
  new Promise((ok, fail) =>
    inspector.post(method, params, (error, value) => (error ? fail(error) : ok(value))),
  );
try {
  await post('Profiler.enable');
  await post('Profiler.start');
  sample(modules.baseline, 'new-nested', 2000);
  const { profile } = await post('Profiler.stop');
  const nodes = new Map(profile.nodes.map((node) => [node.id, node]));
  const parent = new Map(
    profile.nodes.flatMap((node) => (node.children ?? []).map((id) => [id, node.id])),
  );
  const categories = { cssTree: 0, gc: 0, other: 0 };
  for (const id of profile.samples ?? []) {
    let current = id,
      found = false;
    while (current !== undefined) {
      if (nodes.get(current).callFrame.url.replaceAll('\\', '/').includes('/css-tree/')) {
        found = true;
        break;
      }
      current = parent.get(current);
    }
    categories[
      found
        ? 'cssTree'
        : nodes.get(id).callFrame.functionName === '(garbage collector)'
          ? 'gc'
          : 'other'
    ]++;
  }
  report.profile = {
    scenario: 'new-nested',
    iterations: 2000,
    categories,
    note: 'inclusive sample counts, not browser time percentages',
  };
  await writeFile(resolve(output, 'baseline.cpuprofile'), JSON.stringify(profile));
} finally {
  inspector.disconnect();
}
report.status = 'passed';
report.cases = cases;
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(
  JSON.stringify(
    { medians: report.medians, counts: report.counts, profile: report.profile },
    null,
    2,
  ),
);
