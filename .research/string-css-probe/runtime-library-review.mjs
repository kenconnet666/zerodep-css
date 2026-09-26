import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { launchBrowser } from './browser.mjs';

const require = createRequire(import.meta.url);
const emotionRequire = createRequire(require.resolve('@emotion/css'));
const versions = {};
for (const name of ['@emotion/css', '@emotion/cache', '@emotion/hash', '@emotion/serialize']) {
  const path = resolve(dirname(emotionRequire.resolve(name)), '../package.json');
  versions[name] = JSON.parse(await readFile(path, 'utf8')).version;
}

// 研究副本只统计 hash 调用次数并公开探针函数，不修改产品源码。
const { outputFiles } = await build({
  stdin: {
    contents: `import { css as own } from '../../core/src/browser.ts';
      import { createRuleRegistry, probeHash } from '../../core/src/registry.ts';
      import { css as emotion } from '@emotion/css';
      globalThis.libraryProbe = { own, emotion, createRuleRegistry, probeHash };`,
    resolveDir: dirname(fileURLToPath(import.meta.url)),
  },
  bundle: true,
  write: false,
  minify: true,
  format: 'iife',
  platform: 'browser',
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [
    {
      name: 'count-registry-hashes',
      setup(bundler) {
        bundler.onLoad({ filter: /[\\/]core[\\/]src[\\/]registry\.ts$/ }, async ({ path }) => {
          const source = await readFile(path, 'utf8');
          const marker = 'function hash(text: string): string {';
          assert.equal(source.split(marker).length, 2);
          return {
            loader: 'ts',
            contents:
              source.replace(
                marker,
                marker + '\nglobalThis.hashCalls = (globalThis.hashCalls ?? 0) + 1;',
              ) + '\nexport { hash as probeHash };',
          };
        });
      },
    },
  ],
});
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.addScriptTag({ content: outputFiles[0].text });
  const result = await page.evaluate(() => {
    const { own, emotion, createRuleRegistry, probeHash } = globalThis.libraryProbe;
    globalThis.hashCalls = 0;
    const registry = createRuleRegistry(() => {});
    registry.css('color:red;');
    const missHashes = globalThis.hashCalls;
    registry.css('color:', 'red;');
    const hitHashes = globalThis.hashCalls - missHashes;

    const pseudoContent = (className) => {
      const node = document.createElement('div');
      node.className = className;
      document.body.append(node);
      return getComputedStyle(node, '::before').content;
    };
    const unicode = {};
    for (const [name, css] of [
      ['own', own],
      ['emotion', emotion],
    ]) {
      const a = css('&::before{content:"Ā";}');
      const b = css('&::before{content:"Ȁ";}');
      unicode[name] = { classes: [a, b], contents: [pseudoContent(a), pseudoContent(b)] };
    }

    const nesting = {};
    for (const [name, css] of [
      ['own', own],
      ['emotion', emotion],
    ]) {
      const className = css('&-child{color:rgb(1,2,3);}');
      const node = document.createElement('div');
      node.className = `${className}-child`;
      document.body.append(node);
      nesting[name] = getComputedStyle(node).color;
    }

    const seen = new Map();
    let collision = null;
    for (let i = 0; i < 300_000; i++) {
      const body = `--probe:${i.toString(36)}-${(Math.imul(i, 0x9e3779b1) >>> 0).toString(36)};`;
      const hash = probeHash(body);
      if (seen.has(hash)) {
        collision = { hash, bodies: [seen.get(hash), body] };
        break;
      }
      seen.set(hash, body);
    }
    if (collision) {
      const collided = createRuleRegistry(() => {});
      collided.css(collision.bodies[0]);
      try {
        collided.css(collision.bodies[1]);
      } catch (error) {
        collision.error = error.message;
      }
    }

    const known = own('color:rgb(4,5,6);');
    const node = document.createElement('div');
    node.className = known;
    document.body.append(node);
    const beforeRemoval = getComputedStyle(node).color;
    document.querySelector('style[data-zerodep-css]').remove();
    const cachedClass = own('color:rgb(4,5,6);');
    const afterRemoval = getComputedStyle(node).color;
    return {
      missHashes,
      hitHashes,
      unicode,
      nesting,
      collision,
      detachedHost: { sameClass: cachedClass === known, beforeRemoval, afterRemoval },
    };
  });
  assert.equal(result.missHashes, 2);
  assert.equal(result.hitHashes, 0);
  assert.notEqual(result.unicode.own.classes[0], result.unicode.own.classes[1]);
  assert.equal(result.unicode.emotion.classes[0], result.unicode.emotion.classes[1]);
  assert.ok(result.collision);
  assert.equal(result.collision.error, 'CSS class hash collision.');
  assert.notEqual(result.detachedHost.beforeRemoval, result.detachedHost.afterRemoval);
  console.log(JSON.stringify({ browser: browser.version(), versions, ...result }, null, 2));
} finally {
  await browser.close();
}
