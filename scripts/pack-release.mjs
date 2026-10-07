import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = join(root, 'test-results', 'release');
const pnpm = process.env.npm_execpath;
if (!pnpm) throw new Error('Run pnpm release:pack after pnpm build.');
await mkdir(output, { recursive: true });
const packages = [];
for (const directory of ['core', 'compiler', 'vue', 'svelte', 'nuxt', 'sveltekit']) {
  const source = JSON.parse(await readFile(join(root, directory, 'package.json'), 'utf8'));
  assert.equal(source.private, undefined, `${directory} is not publishable`);
  assert.ok(source.license, `${directory}: choose a project license before release`);
  const packed = JSON.parse(
    execFileSync(process.execPath, [pnpm, 'pack', '--json', '--pack-destination', output], {
      cwd: join(root, directory),
      encoding: 'utf8',
    }),
  );
  const manifest = JSON.parse(
    execFileSync('tar', ['-xOf', packed.filename, 'package/package.json'], { encoding: 'utf8' }),
  );
  const paths = new Set(packed.files.map((file) => file.path));
  assert.equal(manifest.name, source.name);
  assert.equal(manifest.version, source.version);
  assert.equal(manifest.publishConfig.access, 'public');
  assert.ok(paths.has('README.md'));
  if (source.license !== 'UNLICENSED')
    assert.ok(paths.has('LICENSE'), `${directory}: missing license`);
  if (directory === 'core') assert.ok(paths.has('THIRD_PARTY_NOTICES.md'));
  for (const path of paths)
    assert.ok(
      !path.includes('..') &&
        /^(dist\/|package\.json$|README\.md$|LICENSE$|THIRD_PARTY_NOTICES\.md$)/.test(path),
      `Unexpected package file: ${path}`,
    );
  function checkExports(exports) {
    for (const value of Object.values(exports)) {
      if (typeof value === 'string')
        assert.ok(paths.has(value.replace(/^\.\//, '')), `Missing export: ${value}`);
      else checkExports(value);
    }
  }
  checkExports(manifest.exports);
  for (const field of [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
  ])
    for (const [name, range] of Object.entries(manifest[field] ?? {})) {
      assert.ok(!/^(workspace|catalog|file|link):/.test(range), `${name}: unresolved ${range}`);
      if (name === 'zerodep-css' || name.startsWith('zerodep-css-'))
        assert.equal(range, source.version);
    }
  const bytes = await readFile(packed.filename);
  const file = packed.filename.split(/[\\/]/).at(-1);
  packages.push({
    name: manifest.name,
    version: manifest.version,
    file,
    integrity: 'sha512-' + createHash('sha512').update(bytes).digest('base64'),
    shasum: createHash('sha1').update(bytes).digest('hex'),
  });
  console.log(`${manifest.name}@${manifest.version}: ${paths.size} files, ${bytes.length} bytes`);
}
assert.equal(
  new Set(packages.map((pkg) => pkg.version)).size,
  1,
  'Release packages must share a version',
);
await writeFile(
  join(output, 'manifest.json'),
  JSON.stringify(
    {
      commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
      packages,
    },
    null,
    2,
  ) + '\n',
);
