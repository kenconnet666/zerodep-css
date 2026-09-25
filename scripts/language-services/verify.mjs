import assert from 'node:assert/strict';
import { access, mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { directory, requireProject, root } from './environment.mjs';

const { Client } = requireProject('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = requireProject('@modelcontextprotocol/sdk/client/stdio.js');
const paths = [
  'core/src/__lsp_shared__.ts',
  'core/src/__lsp_probe__.ts',
  'vue/src/__LspProbe.vue',
  'svelte/src/__LspProbe.svelte',
  'nuxt/src/__lsp_probe__.ts',
  'sveltekit/src/__lsp_probe__.ts',
];
for (const file of paths) {
  try {
    await access(resolve(root, file));
  } catch (error) {
    if (error.code === 'ENOENT') continue;
    throw error;
  }
  throw new Error('Refusing to overwrite existing probe: ' + file);
}
const created = [];
const client = new Client({ name: 'zerodep-language-verification', version: '1' });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [resolve(directory, 'server.mjs'), root],
  cwd: root,
  stderr: 'pipe',
});
let log = '';
transport.stderr?.on('data', (data) => {
  log = (log + data).slice(-12000);
});
const report = { versions: {}, checks: [] };
for (const name of [
  'typescript',
  'typescript-language-server',
  'svelte-language-server',
  'typescript-svelte-plugin',
  '@vue/language-server',
  '@vue/typescript-plugin',
  'vue-tsc',
]) {
  report.versions[name] = requireProject(name + '/package.json').version;
}
async function save(file, text) {
  await writeFile(resolve(root, file), text, {
    encoding: 'utf8',
    flag: created.includes(file) ? 'w' : 'wx',
  });
  if (!created.includes(file)) created.push(file);
}
async function call(name, args) {
  const result = await client.callTool({ name, arguments: args }, undefined, { timeout: 90000 });
  assert(!result.isError, result.content?.[0]?.text);
  return JSON.parse(result.content[0].text);
}
async function position(filePath, needle, offset = 0) {
  const text = await readFile(resolve(root, filePath), 'utf8');
  const index = text.indexOf(needle);
  assert(index >= 0, 'Missing probe text: ' + needle);
  const before = text.slice(0, index + offset);
  return {
    filePath,
    line: before.split('\n').length,
    column: before.length - before.lastIndexOf('\n'),
  };
}
function fixture(file, valid) {
  const isTs = file.endsWith('.ts');
  const shared = file.startsWith('core/')
    ? './__lsp_shared__.js'
    : '../../core/src/__lsp_shared__.js';
  const body = `import { tokens, pixels } from '${shared}';
${isTs ? '' : "import '@zerodep-css/core';"}
const count: number = ${valid ? '1' : "'wrong'"};
const tone = tokens.${valid ? 'primary' : 'missing'};
const width = pixels(${valid ? '12' : "'bad'"});
const output = count.toFixed() + tone + width;
`;
  if (isTs) return body + 'export { output };\n';
  const template = valid ? 'output' : 'count.notAMethod()';
  if (file.endsWith('.vue'))
    return `<script setup lang="ts">\n${body}</script>\n<template><span>{{ ${template} }}</span></template>\n`;
  return `<script lang="ts">\n${body}</script>\n<span>{${template}}</span>\n`;
}
try {
  await save(
    paths[0],
    '/** 类型诊断与跳转探针；验证结束自动删除。 */\nexport const tokens = { primary: "red" } as const;\nexport function pixels(value: number): string { return `${value}px`; }\n',
  );
  await client.connect(transport, { timeout: 60000 });
  const names = (await client.listTools()).tools.map((t) => t.name).sort();
  assert.deepEqual(names, ['completions', 'definitions', 'diagnostics', 'hover', 'references']);
  for (const filePath of paths.slice(1)) {
    for (const valid of [false, true, false, true]) {
      await save(filePath, fixture(filePath, valid));
      const result = await call('diagnostics', { filePath });
      assert.equal(result.complete, true);
      if (valid) assert.equal(result.errors, 0, JSON.stringify(result));
      else {
        assert(result.errors >= (filePath.endsWith('.ts') ? 3 : 4), JSON.stringify(result));
        for (const code of [2322, 2339, 2345])
          assert(
            result.diagnostics.some((d) => Number(d.code) === code),
            'Missing error code ' + code,
          );
      }
      report.checks.push({ filePath, valid, ...result });
      console.log(
        JSON.stringify({ filePath, valid, errors: result.errors, complete: result.complete }),
      );
    }
    const hover = await call('hover', await position(filePath, 'pixels(12)'));
    assert(JSON.stringify(hover.contents).includes('number'), JSON.stringify(hover));
    const definitions = await call('definitions', await position(filePath, 'pixels(12)'));
    assert(
      definitions.items.some((d) => d.filePath.includes('__lsp_shared__')),
      JSON.stringify(definitions),
    );
    const references = await call('references', await position(filePath, 'count.toFixed'));
    assert(references.total >= 2, JSON.stringify(references));
    const completions = await call('completions', {
      ...(await position(filePath, 'tokens.primary', 'tokens.'.length)),
      prefix: 'pri',
      resolveLimit: 1,
    });
    assert(
      completions.items.some((c) => c.label === 'primary'),
      JSON.stringify(completions),
    );
    report.checks.push({ filePath, hover, definitions, references, completions });
    console.log('Semantic tools passed: ' + filePath);
  }
  for (const filePath of [
    'core/src/index.ts',
    'vue/src/index.ts',
    'svelte/src/index.ts',
    'nuxt/src/index.ts',
    'sveltekit/src/index.ts',
    'vue/test/types/LanguageFixture.vue',
    'svelte/test/types/LanguageFixture.svelte',
  ]) {
    const result = await call('diagnostics', { filePath });
    assert(result.complete && result.errors === 0, JSON.stringify(result));
    report.checks.push(result);
  }
  await mkdir(resolve(root, 'test-results/language-services'), { recursive: true });
  await writeFile(
    resolve(root, 'test-results/language-services/verification.json'),
    JSON.stringify(report, null, 2) + '\n',
  );
  console.log(
    'VERIFIED: TypeScript / Vue / Svelte diagnostics, hover, definitions, references and completions',
  );
} catch (error) {
  console.error(log);
  console.error(error);
  process.exitCode = 1;
} finally {
  await client.close();
  await transport.close();
  for (const file of created) await unlink(resolve(root, file));
}
