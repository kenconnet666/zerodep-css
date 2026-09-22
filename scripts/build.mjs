import { lstat, realpath, rm, copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';
import ts from 'typescript';
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
pnpm(['exec', 'tsc', '-p', 'internal/compiler/tsconfig.build.json']);

// 两端共用编译分析，构建时内联到独立 compiler 子路径，不增加产品包。
for (const name of ['vue', 'svelte']) {
  const output = resolve(root, name, 'dist/compiler');
  await mkdir(output, { recursive: true });
  await build({
    entryPoints: [resolve(root, name, 'compiler/index.ts')],
    outfile: resolve(output, 'index.js'),
    bundle: true,
    packages: 'external',
    platform: 'node',
    format: 'esm',
    target: 'node24',
    sourcemap: true,
  });
  // 声明来自实际实现；只将共享公开类型的路径投影到包内，不泄漏工作区私有路径。
  for (const entry of ['index', 'transform']) {
    let declaration = await readFile(
      resolve(root, 'test-results/compiler-types', name, `compiler/${entry}.d.ts`),
      'utf8',
    );
    const ast = ts.createSourceFile(entry + '.d.ts', declaration, ts.ScriptTarget.Latest, true);
    const replacements = [];
    for (const statement of ast.statements) {
      if (!ts.isImportDeclaration(statement) && !ts.isExportDeclaration(statement)) continue;
      const specifier = statement.moduleSpecifier;
      if (
        specifier &&
        ts.isStringLiteral(specifier) &&
        specifier.text.endsWith('/internal/compiler/types.js')
      )
        replacements.push({ start: specifier.getStart(ast), end: specifier.end });
    }
    for (const replacement of replacements.reverse())
      declaration =
        declaration.slice(0, replacement.start) +
        "'./types.js'" +
        declaration.slice(replacement.end);
    await writeFile(resolve(output, entry + '.d.ts'), declaration);
  }
  await copyFile(
    resolve(root, 'test-results/compiler-types/internal/compiler/types.d.ts'),
    resolve(output, 'types.d.ts'),
  );
}
