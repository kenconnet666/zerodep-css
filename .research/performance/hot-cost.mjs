// 仅研究热路径：生产源码不改动；各阶段独立测量，不将不同实验相加为百分比。
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname, relative } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { performance } from 'node:perf_hooks';
import { Session } from 'node:inspector';
import { randomUUID } from 'node:crypto';
import { build } from 'esbuild';
import ts from 'typescript';
import MagicString from 'magic-string';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';
import { root } from '../../scripts/lib/environment.mjs';

const label = process.argv[2] ?? 'current';
assert.match(label, /^[a-z0-9-]+$/);
const output = resolve(root, 'test-results/hot-cost', label);
await mkdir(output, { recursive: true });
const report = {
  runId: randomUUID(),
  status: 'building',
  revision: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  node: process.version,
  samples: {},
  profiles: {},
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report));
const file = resolve(output, 'core.mjs');
await build({
  stdin: {
    contents:
      "export * from './index.ts'; export {buildStyleDefinition} from './builder.ts'; export {prepareStyle} from './style-metadata.ts';",
    resolveDir: resolve(root, 'core/src'),
    loader: 'ts',
  },
  outfile: file,
  bundle: true,
  platform: 'node',
  format: 'esm',
  external: ['css-tree'],
  sourcemap: 'external',
});
const api = await import(pathToFileURL(file).href);
// 只在探针 bundle 中试验直接 reader；保留 Css 外层 Proxy、真实继承及描述符 Proxy。
const directFile = resolve(output, 'direct-reader.mjs');
await build({
  stdin: {
    contents: "export * from './index.ts'; export {buildStyleDefinition} from './builder.ts';",
    resolveDir: resolve(root, 'core/src'),
    loader: 'ts',
  },
  outfile: directFile,
  bundle: true,
  platform: 'node',
  format: 'esm',
  external: ['css-tree'],
  plugins: [
    {
      name: 'research-direct-reader',
      setup(bundler) {
        bundler.onLoad({ filter: /builder\.ts$/ }, async ({ path }) => {
          if (path !== resolve(root, 'core/src/builder.ts')) return;
          const text = await readFile(path, 'utf8'),
            ast = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS),
            edit = new MagicString(text);
          const declaration = ast.statements.find(
            (n) => ts.isFunctionDeclaration(n) && n.name?.text === 'declarations',
          );
          const returned = declaration.body.statements.find(ts.isReturnStatement);
          const getter = returned.expression.arguments[1].properties.find(
            (p) => p.name?.getText(ast) === 'get',
          );
          edit.appendLeft(declaration.parameters.at(-1).end, ', asReader = false');
          edit.overwrite(
            returned.getStart(ast),
            returned.end,
            'const __readProperty=(key:PropertyKey)=>' +
              getter.body.getText(ast) +
              '; return asReader ? __readProperty : new Proxy(Object.create(null), {get(_target,key){return __readProperty(key)}});',
          );
          const transformed = edit
            .toString()
            .replace(
              'declarations(propertyMetadata, nodes, session, important, helpers) as object',
              'declarations(propertyMetadata, nodes, session, important, helpers, true, true)',
            )
            .replace(
              'read: (key) => Reflect.get(properties, key)',
              'read: properties as (key:PropertyKey)=>unknown',
            );
          assert.notEqual(transformed, edit.toString());
          return { contents: transformed, loader: 'ts', resolveDir: dirname(path) };
        });
      },
    },
  ],
});
const direct = await import(pathToFileURL(directFile).href);
const map = new TraceMap(JSON.parse(await readFile(file + '.map', 'utf8')));
let value = 20,
  callbacks = 0;
const factories = {
  empty: () => {
    callbacks++;
  },
  width: (s) => {
    callbacks++;
    s.width.px(value);
  },
  three: (s) => {
    callbacks++;
    s.display.flex;
    s.padding.px(8, 16);
    s.width.px(value);
  },
  nested: (s) => {
    callbacks++;
    s.width.px(value);
    s.hover((h) => h.color.red);
  },
};
const iterations = 20000,
  rounds = 7;
const median = (items) => [...items].sort((a, b) => a - b)[Math.floor(items.length / 2)];
function compactKey(definition) {
  const nodes = (items) =>
    items.map((node) => {
      if (node.kind === 'declaration') {
        const v = node.value;
        if (v.kind === 'animations') throw Error('研究编码未处理动画依赖');
        return [
          0,
          node.property,
          node.important,
          v.kind,
          v.kind === 'variable' ? [v.name, v.fallback ?? null] : v.value,
        ];
      }
      if (node.kind === 'style-rule')
        return [1, node.selector, node.relative, nodes(node.children)];
      return [2, node.name, node.prelude, nodes(node.children)];
    });
  const m = definition.metadata;
  return (
    'd:' +
    JSON.stringify([
      m.name ?? null,
      m.debug ?? null,
      m.source ? [m.source.file, m.source.line, m.source.column] : null,
      nodes(definition.program),
    ])
  );
}
const scenarios = [];
for (const [name, factory] of Object.entries(factories)) {
  const definitions = Array.from({ length: 16 }, (_, i) => {
    value = 20 + i;
    return api.buildStyleDefinition(factory);
  });
  const keys = definitions.map((d) => 'd:' + JSON.stringify(d));
  const cached = new Map(keys.map((key, i) => [key, i]));
  const compactKeys = definitions.map(compactKey),
    compactCached = new Map(compactKeys.map((key, i) => [key, i]));
  assert.equal(new Set(compactKeys).size, new Set(keys).size);
  for (const stage of [
    'runtime',
    'direct-reader',
    'builder',
    'key',
    'key-lookup',
    'compact-key',
    'compact-lookup',
  ]) {
    const run = () => {
      const runtime = (stage === 'direct-reader' ? direct : api).createRuntime({ target: null });
      let last;
      const step = (i) => {
        value = 20 + (i % 16);
        if (stage === 'runtime' || stage === 'direct-reader') return runtime.css(factory);
        if (stage === 'builder') return api.buildStyleDefinition(factory);
        if (stage.startsWith('compact')) {
          const key = compactKey(definitions[i % 16]);
          return stage === 'compact-key' ? key : compactCached.get(key);
        }
        const key = 'd:' + JSON.stringify(definitions[i % 16]);
        return stage === 'key' ? key : cached.get(key);
      };
      try {
        for (let i = 0; i < 2000; i++) step(i);
        callbacks = 0;
        const start = performance.now();
        for (let i = 0; i < iterations; i++) last = step(i);
        const milliseconds = performance.now() - start;
        assert.equal(
          callbacks,
          ['runtime', 'direct-reader', 'builder'].includes(stage) ? iterations : 0,
        );
        if (stage === 'runtime' || stage === 'direct-reader')
          assert.equal(runtime.stats().records, name === 'empty' ? 1 : 16);
        assert.notEqual(last, undefined);
        return milliseconds;
      } finally {
        runtime.dispose();
      }
    };
    scenarios.push({ name: name + '/' + stage, run });
  }
}
// 原型只算研究结果；先验证继承、嵌套、元数据、描述符和生命周期的基本等价性。
const snapshots = [];
for (const module of [api, direct]) {
  class AppCss extends module.Css {
    #space = 8;
    get brand() {
      return this.extendProperty(super.color, { brand: 'red' });
    }
    layout() {
      this.padding.px(this.#space);
    }
  }
  const runtime = module.createRuntime({ target: null });
  let captured;
  runtime.css((s) => {
    captured = s;
    s.name('probe').config({ debug: true });
    s.layout();
    s.brand.brand;
    s.hover((h) => h.layout());
  }, AppCss);
  runtime.mountGlobal((g) =>
    g.fontFace((d) => {
      d.fontFamily.raw('Test');
      d.src.raw('url(test.woff2)');
    }),
  );
  assert.throws(() => captured.width, /synchronous/);
  snapshots.push(runtime.snapshot());
  runtime.dispose();
}
assert.deepEqual(snapshots[0], snapshots[1]);
const fixed = (s) => s.width.px(20);
const prepared = api.prepareStyle(fixed, 'a'.repeat(64));
for (const mode of ['runtime-static', 'prepared-inline', 'prepared-stable'])
  scenarios.push({
    name: mode,
    run() {
      const runtime = api.createRuntime({ target: null });
      const step = () =>
        runtime.css(
          mode === 'runtime-static'
            ? fixed
            : mode === 'prepared-inline'
              ? api.prepareStyle(fixed, 'a'.repeat(64))
              : prepared,
        );
      try {
        const expected = runtime.css(fixed);
        for (let i = 0; i < 2000; i++) step();
        const start = performance.now();
        let last;
        for (let i = 0; i < iterations; i++) last = step();
        const elapsed = performance.now() - start;
        assert.equal(last, expected);
        assert.equal(runtime.stats().records, 1);
        return elapsed;
      } finally {
        runtime.dispose();
      }
    },
  });
for (const scenario of scenarios) report.samples[scenario.name] = [];
for (let round = 0; round < rounds; round++) {
  const order = round % 2 ? [...scenarios].reverse() : scenarios;
  for (const scenario of order) {
    globalThis.gc?.();
    report.samples[scenario.name].push(scenario.run());
  }
}
report.medians = Object.fromEntries(
  Object.entries(report.samples).map(([name, samples]) => [name, median(samples)]),
);

const inspector = new Session();
inspector.connect();
const post = (method, params = {}) =>
  new Promise((ok, fail) =>
    inspector.post(method, params, (error, value) => (error ? fail(error) : ok(value))),
  );
try {
  await post('Profiler.enable');
  for (const name of ['width/runtime', 'three/runtime', 'nested/runtime']) {
    const scenario = scenarios.find((s) => s.name === name);
    scenario.run();
    await post('Profiler.start');
    for (let i = 0; i < 4; i++) scenario.run();
    const { profile } = await post('Profiler.stop');
    const nodes = new Map(profile.nodes.map((n) => [n.id, n])),
      counts = {},
      locations = {};
    for (const id of profile.samples ?? []) {
      const frame = nodes.get(id).callFrame;
      let category = 'other',
        location = frame.functionName;
      if (frame.functionName === '(garbage collector)') category = 'gc';
      else if (
        frame.url &&
        fileURLToPath(
          frame.url.startsWith('file:') ? frame.url : pathToFileURL(frame.url),
        ).toLowerCase() === file.toLowerCase()
      ) {
        const original = originalPositionFor(map, {
          line: frame.lineNumber + 1,
          column: Math.max(0, frame.columnNumber),
        });
        if (original.source) {
          category = relative(root, resolve(dirname(file), original.source)).replaceAll('\\', '/');
          location = category + ':' + original.line + ' ' + frame.functionName;
        }
      } else if (frame.url.includes('css-tree')) category = 'css-tree';
      counts[category] = (counts[category] ?? 0) + 1;
      locations[location] = (locations[location] ?? 0) + 1;
    }
    report.profiles[name] = {
      samples: profile.samples?.length ?? 0,
      selfSamples: counts,
      topLocations: Object.entries(locations)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12),
    };
    await writeFile(
      resolve(output, name.replace('/', '-') + '.cpuprofile'),
      JSON.stringify(profile),
    );
  }
} finally {
  inspector.disconnect();
}
report.status = 'passed';
report.iterations = iterations;
report.rounds = rounds;
report.note = '各阶段独立测量，不能直接相加或相减作为精确占比；prepared 仅使用固定样式。';
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ medians: report.medians, profiles: report.profiles }, null, 2));
