import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';
import { root } from '../../scripts/lib/environment.mjs';
const output = resolve(root, 'test-results/optimization-probes');
await mkdir(output, { recursive: true });
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setContent('<!doctype html><html><head></head><body></body></html>');
  const result = await page.evaluate(async () => {
    const count = 1400;
    function sample(mode) {
      const nodes = [];
      const started = performance.now();
      if (mode === 'per-record') {
        for (let i = 0; i < count; i++) {
          const tag = document.createElement('style');
          tag.setAttribute('data-probe', '');
          document.head.appendChild(tag);
          tag.sheet.insertRule(`.probe-${i}{width:${20 + i}px}`, 0);
          nodes.push(tag);
        }
      } else {
        const tag = document.createElement('style');
        tag.setAttribute('data-probe', '');
        document.head.appendChild(tag);
        for (let i = 0; i < count; i++)
          tag.sheet.insertRule(`.probe-${i}{width:${20 + i}px}`, tag.sheet.cssRules.length);
        nodes.push(tag);
      }
      const ms = performance.now() - started;
      const total = nodes.reduce((n, tag) => n + tag.sheet.cssRules.length, 0);
      if (total !== count) throw new Error(`CSSOM count ${total}`);
      for (const index of [0, 699, 1399]) {
        const el = document.createElement('div');
        el.className = `probe-${index}`;
        document.body.appendChild(el);
        const value = getComputedStyle(el).width;
        el.remove();
        if (value !== `${20 + index}px`) throw new Error(`Wrong computed width ${value}`);
      }
      for (const node of nodes) node.remove();
      return ms;
    }
    const out = { 'per-record': [], grouped: [] };
    for (let round = 0; round < 9; round++) {
      const order = round % 2 ? ['grouped', 'per-record'] : ['per-record', 'grouped'];
      for (const name of order) out[name].push(sample(name));
      await new Promise((done) => requestAnimationFrame(done));
    }
    const median = (v) => [...v].sort((a, b) => a - b)[Math.floor(v.length / 2)];
    return {
      count,
      samples: out,
      medians: Object.fromEntries(Object.entries(out).map(([k, v]) => [k, median(v)])),
      tags: { 'per-record': count, grouped: 1 },
    };
  });
  assert(result.medians['per-record'] > 0 && result.medians.grouped > 0);
  const report = { browser: browser.version(), result };
  await writeFile(resolve(output, 'style-node.json'), JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify({ browser: report.browser, medians: result.medians, samples: result.samples }),
  );
} finally {
  await browser.close();
}
