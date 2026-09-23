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
for (const name of [
  'Css',
  'defineTheme',
  'css',
  'createRuntime',
  'createStyleContext',
  'cssVar',
  'readTheme',
]) {
  const entry = ['Css', 'defineTheme', 'cssVar'].includes(name)
    ? './core/dist/index.js'
    : './internal/runtime/dist/index.js';
  const result = await build({
    stdin: {
      contents: `import { ${name} } from '${entry}'; console.log(${name});`,
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
  if (modules.some((m) => m.bytes && /css-tree\/dist\/csstree\.esm\.js$/.test(m.file)))
    assert(
      !modules.some(
        (m) => m.bytes && /css-tree\/(?:lib\/(?:syntax|lexer|parser|data)|dist\/data)/.test(m.file),
      ),
      'Portable parser must not retain a second copy through a root side-effect import.',
    );
  if (name === 'Css')
    assert(
      !modules.some((m) => m.bytes && /(?:generated\/metadata|css-tree)/.test(m.file)),
      'Author class must not retain runtime validation metadata or the CSS parser.',
    );
  if (name === 'defineTheme')
    assert(
      !modules.some(
        (m) => m.bytes && /css-tree\/(?:lib|dist)\/(?:syntax|lexer|parser|data)/.test(m.file),
      ),
      'Theme definitions need token boundaries, not the complete property parser or grammar data.',
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
