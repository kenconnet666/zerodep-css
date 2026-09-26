import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { transform } from 'esbuild';
import { launchBrowser } from './browser.mjs';

// 只替换研究副本中的拼接语句，保留实际注册器的查重、哈希和写入路径。
const source = await readFile(new URL('../../core/src/registry.ts', import.meta.url), 'utf8');
const original = "const body = parts.join('');";
assert.equal(source.split(original).length, 2);
const variants = {
  join: original,
  plusLoop: "let body = ''; for (let i = 0; i < parts.length; i++) body += parts[i];",
  concat: "const body = ''.concat(...parts);",
  reduce: "const body = parts.reduce((text, part) => text + part, '');",
  small2:
    "const body = parts.length === 1 ? parts[0] : parts.length === 2 ? parts[0] + parts[1] : parts.join('');",
  small4:
    "let body; switch(parts.length) { case 1: body = parts[0]; break; case 2: body = parts[0] + parts[1]; break; case 3: body = parts[0] + parts[1] + parts[2]; break; case 4: body = parts[0] + parts[1] + parts[2] + parts[3]; break; default: body = parts.join(''); }",
};
const scripts = await Promise.all(
  Object.entries(variants).map(async ([name, replacement]) => {
    const { code } = await transform(
      source.replace(original, replacement) +
        `\nglobalThis.factories.${name} = createRuleRegistry;`,
      { loader: 'ts', format: 'iife', minify: true, target: 'es2023' },
    );
    return code;
  }),
);
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  const result = await page.evaluate((scripts) => {
    globalThis.factories = {};
    for (const script of scripts) eval(script);
    const factories = globalThis.factories;
    const names = Object.keys(factories);
    const check = (condition) => {
      if (!condition) throw new Error('拼接结果或规则数量不一致');
    };
    const rows = [];
    let checksum = 0;
    const median = (values) => [...values].sort((a, b) => a - b)[3];
    const measure = (run) => {
      const start = performance.now();
      run();
      return performance.now() - start;
    };
    for (const unicode of [false, true]) {
      for (const count of [1, 2, 4, 8, 32]) {
        const partsFor = (value) =>
          Array.from({ length: count }, (_, i) =>
            i === count - 1
              ? `width:${value}px;`
              : unicode
                ? `--label-${i}:"中文🚀";`
                : `--space-${i}:${i}px;`,
          );
        const inputs = Array.from({ length: 16 }, (_, i) => partsFor(20 + i));
        const misses = Array.from({ length: 1400 }, (_, i) => partsFor(100 + i));
        const reference = factories.join(() => {});
        for (const parts of [[], [''], ['', 'color:red;', ''], ...inputs]) reference.css(...parts);
        const samples = Object.fromEntries(names.map((name) => [name, { hit: [], miss: [] }]));
        for (let round = 0; round < 7; round++) {
          // 轮换顺序；每个变体都经过预热，避免固定首位承担所有 JIT 成本。
          for (let offset = 0; offset < names.length; offset++) {
            const name = names[(round + offset) % names.length];
            const registry = factories[name](() => {});
            for (const parts of [[], [''], ['', 'color:red;', ''], ...inputs])
              registry.css(...parts);
            check(JSON.stringify(registry.rules()) === JSON.stringify(reference.rules()));
            for (let i = 0; i < 20_000; i++) checksum += registry.css(...inputs[i & 15]).length;
            samples[name].hit.push(
              measure(() => {
                for (let i = 0; i < 100_000; i++)
                  checksum += registry.css(...inputs[i & 15]).length;
              }),
            );
            const style = document.createElement('style');
            document.head.append(style);
            const sheet = style.sheet;
            const fresh = factories[name]((className, body) => {
              sheet.insertRule(`.${className}{${body}}`, sheet.cssRules.length);
            });
            try {
              samples[name].miss.push(
                measure(() => {
                  for (const parts of misses) checksum += fresh.css(...parts).length;
                }),
              );
              check(fresh.size === 1400 && sheet.cssRules.length === 1400);
              check(fresh.rules().every((rule, i) => rule.body === misses[i].join('')));
            } finally {
              style.remove();
            }
          }
        }
        rows.push({
          kind: unicode ? 'unicode' : 'ascii',
          parts: count,
          bodyLength: inputs[0].join('').length,
          variants: Object.fromEntries(
            names.map((name) => [
              name,
              {
                hit100kMs: median(samples[name].hit),
                insert1400Ms: median(samples[name].miss),
              },
            ]),
          ),
          samples,
        });
      }
    }
    return { rows, checksum };
  }, scripts);
  assert.ok(result.checksum > 0);
  console.log(JSON.stringify({ browser: browser.version(), ...result }, null, 2));
} finally {
  await browser.close();
}
