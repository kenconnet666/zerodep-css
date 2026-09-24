import assert from 'node:assert/strict';
import test from 'node:test';
import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { root } from '../../lib/environment.mjs';

test('现行文档的本地链接可解析，目录迁移不留下断链', async () => {
  const files = [
    'README.md',
    'AGENTS.md',
    'CHANGELOG.md',
    ...['core', 'vue', 'svelte', 'nuxt', 'sveltekit'].map((name) => `${name}/README.md`),
  ];
  for (const entry of await readdir(resolve(root, 'docs'), {
    withFileTypes: true,
    recursive: true,
  }))
    if (entry.isFile() && entry.name.endsWith('.md'))
      files.push(resolve(entry.parentPath, entry.name));
  const missing = [];
  for (const file of files) {
    const path = resolve(root, file);
    // 示例中的 Markdown 不当作当前文档链接；外部 URL 不在离线验证中联网。
    const source = (await readFile(path, 'utf8')).replace(/```[\s\S]*?```/g, '');
    for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].trim().replace(/^<|>$/g, '');
      if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(target)) continue;
      const local = decodeURIComponent(target.split('#')[0]);
      const destination = resolve(dirname(path), local);
      assert(
        destination.startsWith(root + sep),
        `Documentation link leaves workspace: ${file} -> ${target}`,
      );
      try {
        await access(destination);
      } catch {
        missing.push(`${file} -> ${target}`);
      }
    }
  }
  assert.deepEqual(missing, []);
});
