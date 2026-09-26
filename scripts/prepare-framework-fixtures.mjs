import { mkdir, lstat, realpath, symlink } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
for (const [directory, name] of [
  ['nuxt/test/app', 'nuxt'],
  ['sveltekit/test/app', 'sveltekit'],
  ['.research/string-css-probe', 'vue'],
  ['.research/string-css-probe', 'svelte'],
]) {
  const scope = join(root, directory, 'node_modules/@zerodep-css');
  await mkdir(scope, { recursive: true });
  const link = join(scope, name);
  const target = join(root, name);
  const existing = await lstat(link).catch((error) => {
    if (error.code === 'ENOENT') return null;
    throw error;
  });
  if (existing) {
    if ((await realpath(link)) !== (await realpath(target)))
      throw new Error(`Unexpected fixture dependency: ${link}`);
  } else {
    // 独立夹具通过真实包 exports 消费产物，不用 alias 绕开待验收的入口。
    await symlink(target, link, 'junction');
  }
}
