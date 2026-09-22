import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { root } from '../lib/environment.mjs';

const baseline = JSON.parse(
  await readFile(resolve(root, 'scripts/testing/bundle-budget.json'), 'utf8'),
);
const entries = [];
const themeDeclarationBytes = (await readFile(resolve(root, 'core/dist/themes.d.ts'))).length;
assert(
  themeDeclarationBytes <= 8192,
  'Preset declarations must reuse base types instead of expanding the full keyword tables.',
);
for (const name of ['css', 'createRuntime', 'createStyleContext', 'cssVar']) {
  const result = await build({
    stdin: {
      contents: `import { ${name} } from './core/dist/index.js'; console.log(${name});`,
      resolveDir: root,
    },
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: 'es2023',
    minify: true,
    write: false,
    metafile: true,
  });
  const bytes = result.outputFiles[0].contents;
  const modules = Object.values(result.metafile.outputs)
    .flatMap((o) =>
      Object.entries(o.inputs).map(([file, data]) => ({
        file: file.replaceAll('\\', '/'),
        bytes: data.bytesInOutput,
      })),
    )
    .sort((a, b) => b.bytes - a.bytes);
  // 使用输出贡献判断泄漏，未被 tree shaking 保留的开发模块不计为运行时依赖。
  const leaked = modules.filter(
    (m) => m.bytes && /(?:node:|vite|typescript|@babel|compiler-sfc|svelte\/compiler)/.test(m.file),
  );
  entries.push({
    name,
    minifiedBytes: bytes.length,
    gzipBytes: gzipSync(bytes).length,
    modules,
    leaked,
  });
}
const output = resolve(root, 'test-results/bundle');
await mkdir(output, { recursive: true });
await writeFile(
  resolve(output, 'results.json'),
  JSON.stringify(
    {
      note: '单函数保活，非网络或速度承诺；预算用于阻止意外体积回归。',
      themeDeclarationBytes,
      entries,
    },
    null,
    2,
  ) + '\n',
);
for (const entry of entries) {
  assert.deepEqual(entry.leaked, [], `Browser compiler dependency leak: ${entry.name}`);
  assert(
    entry.minifiedBytes <= baseline[entry.name].minifiedBytes,
    `Minified budget exceeded: ${entry.name}`,
  );
  assert(entry.gzipBytes <= baseline[entry.name].gzipBytes, `Gzip budget exceeded: ${entry.name}`);
}
console.log(
  JSON.stringify(
    entries.map(({ name, minifiedBytes, gzipBytes }) => ({ name, minifiedBytes, gzipBytes })),
  ),
);
