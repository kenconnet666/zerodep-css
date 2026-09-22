import { lstat, realpath, rm, copyFile, mkdir } from 'node:fs/promises';
import { build } from 'esbuild';
import { resolve, sep } from 'node:path';
import { root, pnpm } from './lib/environment.mjs';

// tsc 不会清除已更名模块；每次构建只清理三个包的生成目录，避免旧入口混入 tarball。
const boundary = await realpath(root);
for (const name of ['core', 'vue', 'svelte']) {
  const parent = await realpath(resolve(root, name));
  if (!parent.startsWith(boundary + sep)) throw new Error('Package path leaves the workspace.');
  const target = resolve(parent, 'dist');
  try {
    if ((await lstat(target)).isSymbolicLink())
      throw new Error('Refusing to clean a symlink: ' + target);
    await rm(target, { recursive: true });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}
pnpm(['-r', 'run', 'build']);

// 两端共用宏的词法/单位分析，构建时内联到独立 compiler 子路径，不增加产品包。
for (const name of ['vue', 'svelte']) {
  const output = resolve(root, name, 'dist/compiler');
  await mkdir(output, { recursive: true });
  await build({
    entryPoints: [resolve(root, name, 'src/compiler/index.mjs')],
    outfile: resolve(output, 'index.js'),
    bundle: true,
    packages: 'external',
    platform: 'node',
    format: 'esm',
    target: 'node24',
    sourcemap: true,
  });
  await copyFile(resolve(root, name, 'src/compiler/index.d.mts'), resolve(output, 'index.d.ts'));
  // svelte-package 会复制源码 mjs；独立入口只交付已内联共享分析器的构建产物。
  await rm(resolve(output, 'index.mjs'), { force: true });
  await rm(resolve(output, 'index.d.mts'), { force: true });
}
