import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';
import { root } from '../../scripts/lib/environment.mjs';
const requested = process.argv[2];
if (!requested) throw new Error('Usage: node binding-browser.mjs <baseline-ref>');
const baseline = execFileSync('git', ['rev-parse', '--verify', requested + '^{commit}'], {
  cwd: root,
})
  .toString()
  .trim();
const output = resolve(root, 'test-results/optimization-probes');
await mkdir(output, { recursive: true });
async function bundle(historical, globalName) {
  const result = await build({
    entryPoints: [resolve(root, 'internal/runtime/binding.ts')],
    bundle: true,
    write: false,
    platform: 'browser',
    format: 'iife',
    globalName,
    target: 'es2023',
    minify: true,
    alias: { '@zerodep-css/core/internal': resolve(root, 'core/dist/internal.js') },
    plugins: [
      {
        name: 'old-binding',
        setup(b) {
          if (historical)
            b.onLoad({ filter: /[\\/]internal[\\/]runtime[\\/]binding\.ts$/ }, () => ({
              contents: execFileSync('git', ['show', baseline + ':internal/runtime/binding.ts'], {
                cwd: root,
              }).toString(),
              loader: 'ts',
            }));
        },
      },
    ],
  });
  return result.outputFiles[0].text;
}
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setContent(
    '<!doctype html><html><head><style>.bench{width:var(--bench-width);height:1px}</style></head><body></body></html>',
  );
  await page.addScriptTag({ content: await bundle(true, 'beforeBinding') });
  await page.addScriptTag({ content: await bundle(false, 'afterBinding') });
  const r = await page.evaluate(async () => {
    const count = 200,
      batches = 30;
    function sample(name) {
      const library = name === 'before' ? window.beforeBinding : window.afterBinding;
      const binding = library.createDeclarationBinding('--bench-width', { property: 'width' });
      const host = document.createElement('div');
      const nodes = Array.from({ length: count }, () => {
        const el = document.createElement('div');
        el.className = 'bench';
        host.appendChild(el);
        return el;
      });
      document.body.appendChild(host);
      let frame = 0,
        checksum = 0;
      function update() {
        frame++;
        for (let i = 0; i < nodes.length; i++) {
          const bindings = Object.create(null);
          const value = 20 + ((frame + i) % 16);
          const css = library.bindValue(bindings, '--bench-width', binding, value + 'px');
          if (css !== 'var(--bench-width)' || bindings['--bench-width'] !== value + 'px')
            throw new Error('Incorrect binding result');
          nodes[i].style.setProperty('--bench-width', bindings['--bench-width']);
        }
        checksum += host.offsetHeight;
      }
      for (let i = 0; i < 5; i++) update();
      const start = performance.now();
      for (let i = 0; i < batches; i++) update();
      const ms = performance.now() - start;
      for (let i of [0, 99, 199]) {
        const expected = 20 + ((frame + i) % 16);
        if (getComputedStyle(nodes[i]).width !== expected + 'px')
          throw new Error('Incorrect CSS width');
      }
      host.remove();
      return { ms, checksum };
    }
    const results = { before: [], after: [] };
    for (let round = 0; round < 9; round++) {
      for (const side of round % 2 ? ['after', 'before'] : ['before', 'after'])
        results[side].push(sample(side));
      await new Promise((done) => requestAnimationFrame(done));
    }
    const median = (v) => [...v].sort((a, b) => a - b)[4];
    return {
      count,
      batches,
      results,
      medians: {
        before: median(results.before.map((x) => x.ms)),
        after: median(results.after.map((x) => x.ms)),
      },
    };
  });
  for (let i = 0; i < 9; i++)
    assert.equal(r.results.before[i].checksum, r.results.after[i].checksum);
  const report = { browser: browser.version(), ...r };
  await writeFile(resolve(output, 'binding-browser.json'), JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify({
      browser: report.browser,
      medians: report.medians,
      samples: {
        before: r.results.before.map((x) => x.ms),
        after: r.results.after.map((x) => x.ms),
      },
    }),
  );
} finally {
  await browser.close();
}
