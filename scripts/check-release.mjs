import { removeOutput } from './remove-output.mjs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, symlink, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { build } from 'esbuild';
import ts from 'typescript';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const { values } = parseArgs({
  options: { directory: { type: 'string', default: 'test-results/release' } },
});
const release = resolve(root, values.directory);
const { packages } = JSON.parse(await readFile(join(release, 'manifest.json'), 'utf8'));
const fixture = await mkdtemp(join(root, 'test-results', 'release-consumer-'));
try {
  await writeFile(join(fixture, 'package.json'), '{"private":true,"type":"module"}\n');
  const externals = new Map();
  for (const pkg of packages) {
    assert.equal(pkg.file, pkg.file.split(/[\\/]/).at(-1));
    const target = join(fixture, 'node_modules', pkg.name);
    await mkdir(target, { recursive: true });
    execFileSync('tar', ['-xzf', join(release, pkg.file), '-C', target, '--strip-components', '1']);
    const manifest = JSON.parse(await readFile(join(target, 'package.json'), 'utf8'));
    const source = manifest.repository.directory;
    for (const name of Object.keys({ ...manifest.dependencies, ...manifest.peerDependencies }))
      if (name !== 'zerodep-css' && !name.startsWith('zerodep-css-')) externals.set(name, source);
  }
  externals.set('@types/node', 'core');
  // 四个待发布包必须来自 tarball；只复用已安装的外部依赖，避免本地重复安装整个框架。
  for (const [name, source] of externals) {
    const require = createRequire(join(root, source, 'package.json'));
    const target = join(fixture, 'node_modules', name);
    await mkdir(dirname(target), { recursive: true });
    await symlink(
      dirname(require.resolve(name + '/package.json')),
      target,
      process.platform === 'win32' ? 'junction' : 'dir',
    );
  }
  await writeFile(
    join(fixture, 'consume.mjs'),
    `
import assert from 'node:assert/strict';
import {Css} from 'zerodep-css';
for (const framework of ['vue','svelte']) {
  const api=await import('zerodep-css-'+framework+'/server');
  const host=api.createServerCssHost();
  const name=api.withCssHost(host,()=>api.css(new Css().gridTemplateColumns.repeat(2,'1fr')));
  assert.ok(host.cssText().includes('.'+name+'{grid-template-columns:repeat(2, 1fr);}'));
  const plugin=(await import('zerodep-css-'+framework+'/vite')).default();
  assert.equal(typeof plugin.transform,'function');
}
assert.equal(typeof (await import('zerodep-css-vue/nuxt')).default,'function');
assert.equal(typeof (await import('zerodep-css-svelte/sveltekit/server')).handle,'function');
console.log('Packed Node entries and compiler dependencies pass.');
`,
  );
  process.stdout.write(
    execFileSync(process.execPath, [join(fixture, 'consume.mjs')], {
      cwd: fixture,
      encoding: 'utf8',
    }),
  );
  for (const framework of ['vue', 'svelte']) {
    const result = await build({
      stdin: {
        contents: `import {Css,css,hydrateCss} from 'zerodep-css-${framework}'; hydrateCss(); console.log(css(new Css().color.red));`,
        resolveDir: fixture,
      },
      bundle: true,
      write: false,
      platform: 'browser',
      format: 'esm',
      metafile: true,
    });
    assert.ok(
      !Object.keys(result.metafile.inputs).some((path) => path.includes('/typescript/')),
      'Browser entry must not bundle the compiler',
    );
  }
  const input = join(fixture, 'consume.ts');
  await writeFile(
    input,
    `
import {Css,createCssContext,css} from 'zerodep-css-vue';
import {css as svelteCss} from 'zerodep-css-svelte';
import vueBindings from 'zerodep-css-vue/vite';
import svelteBindings from 'zerodep-css-svelte/vite';
import {handle} from 'zerodep-css-svelte/sveltekit/server';
const s=createCssContext<Css>().provideCss(new Css());
css(s.gridTemplateColumns.repeat(3,'1fr')); svelteCss(s.gridAutoRows.minmax(0,'1fr'));
vueBindings({inlineBindings:false}); svelteBindings(); void handle;
`,
  );
  const program = ts.createProgram([input], {
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ES2023,
    strict: true,
    skipLibCheck: true,
    noEmit: true,
    types: ['node'],
    typeRoots: [join(fixture, 'node_modules', '@types')],
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  assert.equal(
    diagnostics.length,
    0,
    ts.formatDiagnostics(diagnostics, {
      getCurrentDirectory: () => fixture,
      getCanonicalFileName: (x) => x,
      getNewLine: () => '\n',
    }),
  );
  console.log('Packed browser entries and consumer types pass.');
} finally {
  await removeOutput(root, fixture);
}
