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
    ? `import { Css, WidthCss, createCssContext, css, bx, keyframes, globalCss, createServerCssHost, withCssHost } from '@zerodep-css/${name}';`
    : `import { Css, WidthCss, createCssContext, css, bx, keyframes, globalCss, hydrateCss, configureCss } from '@zerodep-css/${name}';`;
  return `${imports}
import type { CssRule } from '@zerodep-css/core';
import type { CssInput } from '@zerodep-css/core';
import type { CssString } from '@zerodep-css/core';
import type { CssSelector } from '@zerodep-css/core';
// @ts-expect-error 独立 ic 已移除，选择器入口在作者对象
import { ic } from '@zerodep-css/${name}';
// @ts-expect-error cx 已移除，组合统一使用 css
import { cx } from '@zerodep-css/${name}';
// @ts-expect-error 规则注册器不是公开作者 API
import { createCss } from '@zerodep-css/core';
class ThemeWidth extends WidthCss { readonly _md = this.raw('48rem'); }
class ThemeCss extends Css { override readonly width = new ThemeWidth(); }
class AppCss extends ThemeCss { readonly brand = 'brand'; }
const s = new AppCss();
const selector: CssSelector = '& > .custom[data-open]';
s._selector(selector, [s.color.red, false, [null, undefined]]);
s._hover(s._active(s.color.blue));
s._focus(s._focusVisible(s._focusWithin(s.color.red)));
s._disabled(s._checked(s._before(s._after(s.color.red))));
// @ts-expect-error 快捷方法只有下划线命名，不提供重复入口
s.hover(s.color.red);
// @ts-expect-error 选择器必须是字符串
s._selector(42, s.color.red);
// @ts-expect-error 条件对象不属于声明片段
s._hover({ active: true });
const base = new Css();
bx(12) satisfies string;
bx('20px') satisfies string;
bx(null); bx(undefined);
s.width.raw(bx('20px'));
s.color.rgb(bx(120), 20, 30, bx(0.5));
s.color.oklch(bx(0.7), 0.1, 240);
keyframes([false, s._selector('from', s.opacity.raw(0)), [s._selector('to', s.opacity.raw(1))]]);
globalCss('base', [s._selector('body', s.margin.px(0)), false]);
// @ts-expect-error bx 返回 CSS 值字符串，px 只接受数字
s.width.px(bx(12));
// @ts-expect-error 显式绑定恰好一个值
bx();
const custom: CssString = 'var(--project-size)';
s.width.raw(custom);
s.animationPlayState.raw('running');
const { provideCss, useCss } = createCssContext<AppCss>();
useCss().width._md satisfies string;
provideCss(s);
css(s.color.red, s.width.px(20), s.width.raw('calc(100% - 2rem)'), s._hover(s.display.flex));
const fragments = [s.color.red, [false, null, undefined, s.padding.px(4)]] as const satisfies readonly CssInput[];
css(css(s.display.flex), fragments, Math.random() > 0.5 && s.opacity.raw(0.5));
// @ts-expect-error 条件对象交给框架 class，不是 CSS 声明
css({ active: true });
// @ts-expect-error 数字必须由属性方法转成声明
css(24);
// @ts-expect-error true 不是声明或条件空项
css(true);
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
${server ? 'createServerCssHost(); withCssHost(createServerCssHost(), () => css(s.color.blue));' : 'configureCss({ warnAfter: 50_000 }); hydrateCss([]);'}
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
    ['s._selector', '原生选择器'],
    ['s._hover', '生成 &:hover'],
    ['s.display', '显示类型'],
    ['s.fill', 'CSS 属性 fill'],
    ['base.width', '宽度'],
    ['s.width.raw', '原样生成声明'],
  ]);
  const checker = program.getTypeChecker();
  const keywordHints = new Map([
    ['s.width.raw', ['auto', 'min-content']],
    ['s.animationPlayState.raw', ['paused', 'running']],
  ]);
  function visit(item) {
    if (ts.isPropertyAccessExpression(item)) {
      const key = item.getText(program.getSourceFile(file));
      const expected = expectedDocs.get(key);
      const keywords = keywordHints.get(key);
      if (keywords) {
        const signature = checker.getTypeAtLocation(item).getCallSignatures()[0];
        const parameter = signature?.parameters[0];
        if (!parameter) throw new Error(`Missing raw parameter: ${key}`);
        const type = checker.getTypeOfSymbolAtLocation(parameter, item);
        const values = new Set();
        const collect = (value) => {
          if (value.isUnion()) value.types.forEach(collect);
          else if (value.flags & ts.TypeFlags.StringLiteral) values.add(value.value);
        };
        collect(type);
        if (!keywords.every((keyword) => values.has(keyword)))
          throw new Error(`Lost raw keyword hints: ${key}`);
        keywordHints.delete(key);
      }
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
  if (keywordHints.size) throw new Error('Missing keyword hint fixtures.');
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
