import { lstat, realpath, rm } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { root, pnpm } from './testing/environment.mjs';

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
