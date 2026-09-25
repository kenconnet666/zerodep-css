import { mkdtemp, mkdir, rm, symlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const results = join(root, 'test-results');
await mkdir(results, { recursive: true });
const fixture = await mkdtemp(join(results, 'package-types-'));

function sourceFor(name, server) {
  const imports = server
    ? `import { Css, WidthCss, createCssContext, css, createServerCssHost, withCssHost } from '@zerodep-css/${name}';`
    : `import { Css, WidthCss, createCssContext, css, hydrateCss } from '@zerodep-css/${name}';`;
  return `${imports}
import { ic } from '@zerodep-css/core';
import type { CssRule } from '@zerodep-css/core';
// @ts-expect-error 规则注册器不是公开作者 API
import { createCss } from '@zerodep-css/core';
class ThemeWidth extends WidthCss { readonly _md = this.raw('48rem'); }
class ThemeCss extends Css { override readonly width = new ThemeWidth(); }
class AppCss extends ThemeCss { readonly brand = 'brand'; }
const s = new AppCss();
const base = new Css();
const { provideCss, useCss } = createCssContext<AppCss>();
useCss().width._md satisfies string;
provideCss(s);
css(s.color.red, s.width.px(20), s.width.raw('calc(100% - 2rem)'), ic('&:hover', s.display.flex));
s.margin.px(4, 8);
s.alignItems.center;
s.borderTopWidth.px(1);
s.gridTemplateColumns.raw('1fr 2fr');
s.padding.px(4, 8);
s.textDecorationLine.underline;
s.userSelect.none;
s.fill.red satisfies string;
base.width.auto satisfies string;
s.opacity.raw(0.5);
const rule: CssRule = { className: 'z-example', body: 'color:red;' };
// @ts-expect-error opacity 不是长度
s.opacity.px(0.5);
// @ts-expect-error width 只接受一个 px 参数
s.width.px(4, 8);
${server ? 'createServerCssHost(); withCssHost(createServerCssHost(), () => css(s.color.blue));' : 'hydrateCss([]);'}
// @ts-expect-error 根入口必须与当前运行条件一致
${server ? 'hydrateCss([]);' : 'createServerCssHost();'}
`;
}

function check(file, node) {
  const options = {
    module: node ? ts.ModuleKind.NodeNext : ts.ModuleKind.ESNext,
    moduleResolution: node ? ts.ModuleResolutionKind.NodeNext : ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ES2023,
    lib: ['lib.es2023.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'],
    types: ['node'],
    strict: true,
    noEmit: true,
    skipLibCheck: false,
  };
  const program = ts.createProgram([file], options);
  const errors = ts.getPreEmitDiagnostics(program).filter((item) => item.category === 1);
  if (errors.length) {
    const host = {
      getCanonicalFileName: (name) => name,
      getCurrentDirectory: () => fixture,
      getNewLine: () => '\n',
    };
    throw new Error(ts.formatDiagnosticsWithColorAndContext(errors, host));
  }

  const expectedDocs = new Map([
    ['s.display', '显示类型'],
    ['s.fill', 'CSS 属性 fill'],
    ['base.width', '宽度'],
  ]);
  const checker = program.getTypeChecker();
  function visit(item) {
    if (ts.isPropertyAccessExpression(item) && ts.isIdentifier(item.expression)) {
      const key = `${item.expression.text}.${item.name.text}`;
      const expected = expectedDocs.get(key);
      if (expected) {
        const docs = ts.displayPartsToString(
          checker.getSymbolAtLocation(item.name)?.getDocumentationComment(checker),
        );
        if (!docs.includes(expected)) throw new Error(`Missing package documentation for ${key}.`);
        expectedDocs.delete(key);
      }
    }
    ts.forEachChild(item, visit);
  }
  visit(program.getSourceFile(file));
  if (expectedDocs.size)
    throw new Error(`Unresolved documentation checks: ${[...expectedDocs.keys()]}`);
}

try {
  const modules = join(fixture, 'node_modules', '@zerodep-css');
  await mkdir(modules, { recursive: true });
  for (const name of ['core', 'vue', 'svelte'])
    await symlink(join(root, name), join(modules, name), 'junction');
  await writeFile(join(fixture, 'package.json'), '{"type":"module"}\n');

  for (const name of ['vue', 'svelte']) {
    for (const node of [false, true]) {
      const file = join(fixture, `${name}.${node ? 'mts' : 'ts'}`);
      await writeFile(file, sourceFor(name, node));
      check(file, node);
    }
  }
  console.log('Package types pass for Vue/Svelte in Bundler and NodeNext.');
} finally {
  await rm(fixture, { recursive: true, force: true });
}
