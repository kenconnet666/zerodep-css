import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchBrowser } from './browser.mjs';

const { outputFiles } = await build({
  stdin: {
    contents: "export { createRuleRegistry } from '../../core/src/registry.ts';",
    resolveDir: dirname(fileURLToPath(import.meta.url)),
  },
  bundle: true,
  format: 'iife',
  globalName: 'prefixProbe',
  minify: true,
  write: false,
});
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.addScriptTag({ content: outputFiles[0].text });
  const result = await page.evaluate(() => {
    const { createRuleRegistry } = globalThis.prefixProbe;
    const parts = [
      'display:flex;',
      'align-items:center;',
      'color:red;',
      'padding:4px;',
      'margin:2px;',
      'border:0;',
      'opacity:1;',
    ];
    const prefix = parts.join('');
    const registry = createRuleRegistry(() => {});
    const inputs = Array.from({ length: 16 }, (_, i) => `width:${20 + i}px;`);
    const classes = inputs.map((width) => registry.css(...parts, width));
    const paths = {
      separate: (index) =>
        registry.css(
          parts[0],
          parts[1],
          parts[2],
          parts[3],
          parts[4],
          parts[5],
          parts[6],
          inputs[index & 15],
        ),
      prefix: (index) => registry.css(prefix, inputs[index & 15]),
      classTable: (index) => classes[index & 15],
    };
    const samples = { separate: [], prefix: [], classTable: [] };
    const names = Object.keys(paths);
    let checksum = 0;
    for (const run of Object.values(paths)) {
      for (let i = 0; i < inputs.length; i++) {
        if (run(i) !== classes[i]) throw new Error('组合输出不一致');
      }
    }
    for (let round = 0; round < 7; round++) {
      for (let offset = 0; offset < names.length; offset++) {
        const name = names[(round + offset) % names.length];
        const run = paths[name];
        for (let i = 0; i < 20_000; i++) checksum += run(i).length;
        const start = performance.now();
        for (let i = 0; i < 100_000; i++) checksum += run(i).length;
        samples[name].push(performance.now() - start);
      }
    }
    return {
      samples,
      median100kMs: Object.fromEntries(
        names.map((name) => [name, [...samples[name]].sort((a, b) => a - b)[3]]),
      ),
      rules: registry.size,
      checksum,
    };
  });
  assert.equal(result.rules, 16);
  assert.ok(result.checksum > 0);
  console.log(JSON.stringify({ browser: browser.version(), ...result }, null, 2));
} finally {
  await browser.close();
}
