import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { access, mkdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(resolve(root, 'package.json'));
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const paths = [
  'core/test/types/__style_negative__.ts',
  'vue/test/types/__StyleNegative.vue',
  'svelte/test/types/__StyleNegative.svelte',
];
for (const path of paths) {
  try {
    await access(resolve(root, path));
  } catch (e) {
    if (e.code === 'ENOENT') continue;
    throw e;
  }
  throw new Error('Probe exists: ' + path);
}
const client = new Client({ name: 'zerodep-style-acceptance', version: '1' });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [resolve(root, 'scripts/language-services/server.mjs'), root],
  cwd: root,
  stderr: 'pipe',
});
let logs = '';
transport.stderr?.on('data', (chunk) => {
  logs = (logs + chunk).slice(-6000);
});
const created = [];
const checks = [];
const declarations = (valid) =>
  valid
    ? 's.display.flex; s.width.px(2); s.padding.px(1,2,3,4); s.display.token("grid"); s.width.raw("50%"); s.display.raw("future-display-value");'
    : 's.dispaly.flex; s.width.ms(2); s.padding.px(1,2,3,4,5); s.display.token("banana"); s.width("50%"); s.display.raw("future-display-value");';
function source(file, valid) {
  const adapter = file.endsWith('.vue') ? 'vue' : 'svelte';
  const imported = `import { createStyles } from '@zerodep-css/${adapter}'; const { useCss } = createStyles(); const css = useCss();`;
  if (file.endsWith('.vue'))
    return `<script setup lang="ts">${imported}</script>\n<template><div :title="String(css(s => { ${declarations(valid).replaceAll('"', "'")} }).length)"></div></template>`;
  if (file.endsWith('.svelte'))
    return `<script lang="ts">${imported}</script>\n<div title={String(css(s => { ${declarations(valid)} }).length)}></div>`;
  return (
    "import { css } from '../../src/index.js';\nexport const result = css(s => { " +
    declarations(valid) +
    ' });'
  );
}
async function call(name, args) {
  const r = await client.callTool({ name, arguments: args }, undefined, { timeout: 90000 });
  assert(!r.isError, r.content?.[0]?.text);
  return JSON.parse(r.content[0].text);
}
try {
  await client.connect(transport);
  for (const filePath of paths) {
    for (const valid of [false, true]) {
      const contents = source(filePath, valid);
      await writeFile(resolve(root, filePath), contents, {
        encoding: 'utf8',
        flag: created.includes(filePath) ? 'w' : 'wx',
      });
      if (!created.includes(filePath)) created.push(filePath);
      const start = performance.now();
      const result = await call('diagnostics', { filePath });
      assert(result.complete, JSON.stringify(result));
      assert.equal(result.errors, valid ? 0 : 5, JSON.stringify(result));
      checks.push({ filePath, valid, elapsedMs: Math.round(performance.now() - start), ...result });
      console.log(JSON.stringify({ filePath, valid, errors: result.errors }));
      if (valid) {
        const index = contents.indexOf('s.width.') + 's.width.'.length;
        const before = contents.slice(0, index);
        const pos = {
          filePath,
          line: before.split('\n').length,
          column: index - before.lastIndexOf('\n'),
        };
        const started = performance.now();
        const completions = await call('completions', { ...pos, limit: 100 });
        assert(
          completions.items.some((c) => c.label === 'px'),
          JSON.stringify(completions),
        );
        assert(!completions.items.some((c) => c.label === 'ms'), JSON.stringify(completions));
        assert(
          !completions.items.some((c) => ['prototype', 'call', 'bind', 'apply'].includes(c.label)),
          JSON.stringify(completions),
        );
        const hover = await call('hover', pos);
        assert(hover.contents, JSON.stringify(hover));
        const definitions = await call('definitions', pos);
        assert(
          definitions.items.some((i) =>
            i.filePath.replaceAll('\\', '/').includes('/generated/properties.'),
          ),
          JSON.stringify(definitions),
        );
        checks.push({
          filePath,
          completions,
          hover,
          definitions,
          elapsedMs: Math.round(performance.now() - started),
        });
        for (const method of ['token', 'raw']) {
          const needle = 's.display.' + method + '(';
          const at = contents.indexOf(needle) + needle.length + 1;
          const prefix = contents.slice(0, at);
          const suggestions = await call('completions', {
            filePath,
            line: prefix.split('\n').length,
            column: at - prefix.lastIndexOf('\n'),
            limit: 200,
          });
          const labels = suggestions.items.map((item) => item.label.replace(/^['"]|['"]$/g, ''));
          assert(
            labels.includes('flex') && labels.includes('inline-grid'),
            method + ': ' + JSON.stringify(suggestions),
          );
          checks.push({ filePath, method, literalCompletions: suggestions });
        }
      }
    }
  }
  await mkdir(resolve(root, 'test-results/types'), { recursive: true });
  await writeFile(
    resolve(root, 'test-results/types/style-types.json'),
    JSON.stringify(
      { note: '真实 TS/Vue/Svelte 脚本或模板语义验证；耗时为本次机器状态，非性能承诺。', checks },
      null,
      2,
    ) + '\n',
  );
  console.log('VERIFIED: generated CSS types in TS / Vue / Svelte');
} catch (e) {
  console.error(logs);
  console.error(e);
  process.exitCode = 1;
} finally {
  await client.close();
  await transport.close();
  for (const file of created) await unlink(resolve(root, file));
}
