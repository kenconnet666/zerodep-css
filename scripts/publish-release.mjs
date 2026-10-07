import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { removeOutput } from './remove-output.mjs';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const directory = join(root, 'test-results', 'release');
const registry = 'https://registry.npmjs.org/';
const { values } = parseArgs({ options: { tag: { type: 'string', default: 'next' } } });
assert(['next', 'latest'].includes(values.tag), 'Publish tag must be next or latest');
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
assert.equal(git('branch', '--show-current'), 'main', 'Publish from main');
assert.equal(git('status', '--porcelain'), '', 'Commit release changes before publishing');
assert.equal(
  git('rev-parse', 'HEAD'),
  git('rev-parse', 'origin/main'),
  'Push main before publishing',
);
const release = JSON.parse(await readFile(join(directory, 'manifest.json'), 'utf8'));
assert.equal(release.commit, git('rev-parse', 'HEAD'), 'Pack the committed release again');
const pnpm = process.env.npm_execpath;
if (!pnpm) throw new Error('Run pnpm release:publish.');
let token = process.env.NPM_TOKEN;
if (!token && process.platform === 'win32')
  token = execFileSync(
    'pwsh',
    ['-NoProfile', '-Command', "[Environment]::GetEnvironmentVariable('NPM_TOKEN', 'User')"],
    { encoding: 'utf8' },
  ).trim();
if (!token) throw new Error('NPM_TOKEN is unavailable.');
// 只写环境变量占位符；令牌只进入子进程环境，不写配置或日志。
const temporary = await mkdtemp(join(root, 'test-results', 'npm-auth-'));
const config = join(temporary, '.npmrc');
try {
  await writeFile(
    config,
    'registry=' + registry + '\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n',
  );
  const identity = await fetch(registry + '-/whoami', {
    headers: { Authorization: 'Bearer ' + token },
  });
  assert.equal(identity.status, 200, 'npm authentication failed');
  for (const pkg of release.packages) {
    assert.equal(pkg.file, pkg.file.split(/[\\/]/).at(-1), 'Unexpected tarball path');
    const archive = join(directory, pkg.file);
    const digest =
      'sha512-' +
      createHash('sha512')
        .update(await readFile(archive))
        .digest('base64');
    assert.equal(digest, pkg.integrity, 'Tarball changed after verification');
    const endpoint =
      registry + encodeURIComponent(pkg.name) + '/' + encodeURIComponent(pkg.version);
    const existing = await fetch(endpoint);
    if (existing.ok) {
      assert.equal(
        (await existing.json()).dist.integrity,
        digest,
        `${pkg.name} already exists with different contents`,
      );
      console.log(`${pkg.name}@${pkg.version}: already published and verified`);
      continue;
    }
    assert.equal(existing.status, 404, `Cannot read ${pkg.name} registry state`);
    const result = spawnSync(
      process.execPath,
      [
        pnpm,
        'publish',
        archive,
        '--access',
        'public',
        '--tag',
        values.tag,
        '--publish-branch',
        'main',
        '--ignore-scripts',
      ],
      {
        cwd: root,
        encoding: 'utf8',
        env: { ...process.env, NPM_TOKEN: token, NPM_CONFIG_USERCONFIG: config },
      },
    );
    const output = ((result.stdout ?? '') + (result.stderr ?? '')).replaceAll(token, '[REDACTED]');
    process.stdout.write(output);
    if (result.error || result.status !== 0)
      throw new Error(`${pkg.name}: publication failed; remaining packages were not attempted`);
    // 新版本以 registry 返回的内容摘要确认，不能只看 CLI 的退出码。
    const published = await fetch(endpoint, { cache: 'no-store' });
    assert.equal(
      published.status,
      200,
      `${pkg.name}: published version is not yet readable; rerun verification before continuing`,
    );
    assert.equal(
      (await published.json()).dist.integrity,
      digest,
      `${pkg.name}: registry integrity mismatch`,
    );
  }
} finally {
  await removeOutput(root, temporary);
}
