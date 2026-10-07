import { lstat, readdir, rmdir, unlink } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

/** 只逐项删除指定输出目录，不跟随 pnpm 链接，也不越过仓库边界。 */
export async function removeOutput(root, target) {
  root = resolve(root);
  target = resolve(target);
  if (!target.startsWith(root + sep)) throw new Error(`Unsafe output path: ${target}`);
  const pending = [target];
  const directories = [];
  while (pending.length) {
    const file = pending.pop();
    const stat = await lstat(file).catch((error) => {
      if (error.code === 'ENOENT') return null;
      throw error;
    });
    if (!stat) continue;
    if (stat.isDirectory() && !stat.isSymbolicLink()) {
      directories.push(file);
      for (const name of await readdir(file)) pending.push(resolve(file, name));
    } else await unlink(file);
  }
  for (const directory of directories.reverse()) await rmdir(directory);
}
