import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import ts from 'typescript';
import { Css } from '../../dist/index.js';

const root = fileURLToPath(new URL('../..', import.meta.url))
  .replaceAll('\\', '/')
  .replace(/\/$/, '');
const types = resolve(root, 'dist/types/generated');
const declarations = readdirSync(types)
  .filter((name) => name.endsWith('.d.ts'))
  .map((name) => {
    const path = resolve(types, name);
    return ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true);
  });
const text = (comment) =>
  typeof comment === 'string' ? comment : (ts.getTextOfJSDocComment(comment) ?? '');
const summary = (node) => node.jsDoc?.map((doc) => text(doc.comment)).join('\n') ?? '';
const tags = (node, name) => ts.getJSDocTags(node).filter((tag) => tag.tagName.text === name);

// 仅创建内存文档；包名解析必须经过实际 package.json 的 types 导出。
function languageService(code) {
  const file = root + '/__author_documentation__.ts';
  const isVirtual = (path) => path.replaceAll('\\', '/').toLowerCase() === file.toLowerCase();
  const read = (path) => (isVirtual(path) ? code : ts.sys.readFile(path));
  const options = {
    target: ts.ScriptTarget.ES2023,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    strict: true,
    skipLibCheck: true,
    types: [],
    noEmit: true,
  };
  const service = ts.createLanguageService({
    getScriptFileNames: () => [file],
    getScriptVersion: () => '1',
    getScriptSnapshot: (path) => {
      const content = read(path);
      return content === undefined ? undefined : ts.ScriptSnapshot.fromString(content);
    },
    getCurrentDirectory: () => root,
    getCompilationSettings: () => options,
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    fileExists: (path) => isVirtual(path) || ts.sys.fileExists(path),
    readFile: read,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  });
  return {
    file,
    service,
    position: (needle) => {
      const index = code.indexOf(needle);
      assert(index >= 0, needle);
      return index;
    },
  };
}

test('发布声明覆盖全部属性、关键字字段和公开方法签名', () => {
  let properties = 0;
  let methods = 0;
  let fields = 0;
  for (const file of declarations)
    for (const node of file.statements) {
      if (!ts.isClassDeclaration(node)) continue;
      assert.match(summary(node), /[\u4e00-\u9fff]/, `${node.name.text} 缺少中文类说明`);
      for (const member of node.members) {
        if (
          member.modifiers?.some((modifier) =>
            [ts.SyntaxKind.PrivateKeyword, ts.SyntaxKind.ProtectedKeyword].includes(modifier.kind),
          )
        )
          continue;
        const name = member.name?.getText(file) ?? 'constructor';
        const label = `${node.name.text}.${name}`;
        assert.match(summary(member), /[\u4e00-\u9fff]/, `${label} 缺少中文说明`);
        if (ts.isPropertyDeclaration(member)) {
          fields++;
          if (node.name.text === 'Css') {
            properties++;
            assert(!summary(member).startsWith('CSS 属性 '), `${label} 只有占位说明`);
            assert.equal(tags(member, 'see').length, 1, `${label} 缺少参考链接`);
          }
        }
        if (!ts.isMethodDeclaration(member) && !ts.isConstructorDeclaration(member)) continue;
        methods++;
        assert(tags(member, 'example').length > 0, `${label} 缺少调用示例`);
        if (ts.isMethodDeclaration(member))
          assert.equal(tags(member, 'returns').length, 1, `${label} 缺少返回值说明`);
        const parameters = tags(member, 'param');
        assert.deepEqual(
          parameters.map((p) => p.name.getText(file)),
          member.parameters.map((p) => p.name.getText(file)),
          `${label} 参数说明不完整`,
        );
        for (const p of parameters)
          assert.match(text(p.comment), /[\u4e00-\u9fff]/, `${label} 参数为空`);
      }
    }
  assert.equal(properties, 502);
  assert(fields >= 12586 + 502);
  assert(methods > 2000);
  console.log(
    JSON.stringify({ properties, documentedFields: fields, documentedSignatures: methods }),
  );
});

test('消费端 hover、补全详情和各重载参数提示包含实际使用说明', () => {
  const code = `import {Css} from 'zerodep-css';
import {ThemeCss} from 'zerodep-css/theme';
const s=new Css();const themed=new ThemeCss();
s.display; s.display.flex; s.display.inlineFlex; s.objectFit.cover; s.position.sticky; s.overflow.clip;
s.width.rem(1); s.width.clamp('12rem','50vw','40rem');
s.margin.px(8); s.margin.px(8,16); s.margin.px(8,16,4); s.margin.px(8,16,4,2);
s.gap.px(8,16); s.borderSpacing.px(8,16); s.color.hsl(210,50,40);
themed.color._accent;
`;
  const { file, service, position } = languageService(code);
  try {
    assert.equal(service.getSemanticDiagnostics(file).length, 0);
    const hover = (expression) => {
      const offset = expression.lastIndexOf('.') + 2;
      return service.getQuickInfoAtPosition(file, position(expression) + offset);
    };
    for (const [expression, expected] of [
      ['s.display;', /内部布局/],
      ['s.display.flex', /直接子元素.*Flex/],
      ['s.display.inlineFlex', /普通文档流.*行内排版/s],
      ['s.objectFit.cover', /contain.*完整内容|contain.*完整图像/s],
      ['s.position.sticky', /inset.*auto/],
      ['s.overflow.clip', /不建立滚动容器/],
      ['s.width.rem', /根元素字号/],
      ['s.width.clamp', /下限和上限/],
      ['themed.color._accent', /主题变量/],
    ])
      assert.match(ts.displayPartsToString(hover(expression)?.documentation), expected, expression);
    const propertyDocs = ts.displayPartsToString(hover('s.display;')?.documentation);
    assert.match(propertyDocs, /常用值：[\s\S]*inline-flex/);
    assert.doesNotMatch(propertyDocs, /<display-outside>/, '形式语法不应挤占悬停说明');
    const inlineDocs = hover('s.display.inlineFlex');
    assert.match(ts.displayPartsToString(inlineDocs?.documentation), /区别：[\s\S]*适用场景：/);
    assert(
      inlineDocs?.tags?.some(
        (tag) =>
          tag.name === 'example' &&
          ts.displayPartsToString(tag.text).includes('s.display.inlineFlex'),
      ),
      '关键字应提供可调用示例',
    );
    const definition = service.getDefinitionAtPosition(
      file,
      position('s.display.flex') + 's.display.'.length + 1,
    );
    assert(
      definition?.every((entry) => entry.fileName.replaceAll('\\', '/').includes('/dist/types/')),
      '必须读取发布声明',
    );
    const details = service.getCompletionEntryDetails(
      file,
      position('s.display.flex') + 's.display.'.length,
      'flex',
      {},
      undefined,
      {},
    );
    assert.match(ts.displayPartsToString(details?.documentation), /弹性容器/);
    const inlineDetails = service.getCompletionEntryDetails(
      file,
      position('s.display.inlineFlex') + 's.display.'.length,
      'inlineFlex',
      {},
      undefined,
      {},
    );
    assert.match(ts.displayPartsToString(inlineDetails?.documentation), /图标与文字组合/);
    const signature = (call, count) => {
      const help = service.getSignatureHelpItems(
        file,
        position(call) + call.lastIndexOf(')'),
        undefined,
      );
      const item = help?.items.find((entry) => entry.parameters.length === count);
      assert(item, `缺少 ${call} 对应重载`);
      return item.parameters.map((p) => ts.displayPartsToString(p.documentation));
    };
    assert.match(signature('s.margin.px(8)', 1)[0], /四边/);
    assert.match(signature('s.margin.px(8,16)', 2)[0], /上、下/);
    assert.match(signature('s.margin.px(8,16)', 2)[1], /左、右/);
    assert.match(signature('s.margin.px(8,16,4)', 3)[2], /下/);
    assert.match(signature('s.margin.px(8,16,4,2)', 4)[3], /左/);
    assert.match(signature('s.gap.px(8,16)', 2)[0], /行间距/);
    assert.match(signature('s.borderSpacing.px(8,16)', 2)[0], /水平/);
    assert.match(signature('s.color.hsl(210,50,40)', 4)[0] ?? '', /色相/);
  } finally {
    service.dispose();
  }
});

test('生成文档中的属性/方法示例均可通过公共类型入口编译', () => {
  const ordinary = new Set();
  const themed = new Set();
  for (const file of declarations) {
    const target = file.fileName.endsWith('theme.d.ts') ? themed : ordinary;
    function visit(node) {
      for (const tag of tags(node, 'example')) {
        const example = text(tag.comment).trim();
        if (example.startsWith('s.') || example.startsWith('css(')) target.add(example);
      }
      ts.forEachChild(node, visit);
    }
    visit(file);
  }
  assert(ordinary.size > 2000);
  const code = `import {Css} from 'zerodep-css';import {css} from 'zerodep-css/server';import {ThemeCss} from 'zerodep-css/theme';
{const s=new Css();\n${[...ordinary].join('\n')}\n}
{const s=new ThemeCss();\n${[...themed].join('\n')}\n}`;
  const { file, service } = languageService(code);
  try {
    const diagnostics = [
      ...service.getSyntacticDiagnostics(file),
      ...service.getSemanticDiagnostics(file),
    ];
    assert.equal(
      diagnostics.length,
      0,
      ts.formatDiagnosticsWithColorAndContext(diagnostics.slice(0, 10), {
        getCanonicalFileName: (f) => f,
        getCurrentDirectory: () => root,
        getNewLine: () => '\n',
      }),
    );
    console.log(
      `Checked ${ordinary.size + themed.size} distinct documented expressions through package exports.`,
    );
  } finally {
    service.dispose();
  }
});

test('文档关键示例输出完整声明，数值和参数顺序不变', () => {
  const s = new Css();
  assert.equal(s.margin.px(8, 16), 'margin:8px 16px;');
  assert.equal(s.margin.px(8, 16, 4, 2), 'margin:8px 16px 4px 2px;');
  assert.equal(s.gap.px(8, 16), 'gap:8px 16px;');
  assert.equal(s.color.hsl(210, 50, 40, 0), 'color:hsl(210 50% 40% / 0);');
  assert.equal(s.color.oklch(0.7, 0.15, 250), 'color:oklch(0.7 0.15 250);');
  assert.equal(s.width.clamp('12rem', '50vw', '40rem'), 'width:clamp(12rem, 50vw, 40rem);');
  assert.equal(
    s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)'),
    'grid-template-columns:repeat(3, minmax(0, 1fr));',
  );
  assert.equal(s._hover(s.color.red), '&:hover{color:red;}');
});

test('注入主题的 hover 与候选保留系统文档和自定义关键字说明', () => {
  const code = `import {Css,SystemKeywords,systemKeywords} from 'zerodep-css';
interface AppKeywords extends SystemKeywords {
  readonly color: SystemKeywords['color'] & {
    /** 主操作颜色，供确认按钮与链接使用。 */
    readonly _primary: string;
  };
}
class Theme extends SystemKeywords implements AppKeywords {
  override readonly color: AppKeywords['color'] = {...systemKeywords.color, _primary: 'purple'};
}
const s=new Css(new Theme());
s.display.inlineFlex;
s.color._primary;
s.color.raw('_primary');
s.display.raw('inline-flex');
systemKeywords.display.inlineFlex;
`;
  const { file, service, position } = languageService(code);
  try {
    assert.deepEqual(
      service
        .getSemanticDiagnostics(file)
        .map((d) => ts.flattenDiagnosticMessageText(d.messageText, ' ')),
      [],
    );
    const hover = (expression) =>
      service.getQuickInfoAtPosition(file, position(expression) + expression.lastIndexOf('.') + 2);
    const nativeDocs = ts.displayPartsToString(hover('s.display.inlineFlex').documentation);
    assert.match(nativeDocs, /行内排版/);
    assert.equal(
      nativeDocs.split('创建行内级的 Flex 容器。').length - 1,
      1,
      '原生 hover 文档不得重复',
    );
    assert.match(ts.displayPartsToString(hover('s.color._primary').documentation), /主操作颜色/);
    assert.match(
      ts.displayPartsToString(hover('systemKeywords.display.inlineFlex').documentation),
      /行内排版/,
    );
    const offset = position('s.color._primary') + 's.color.'.length;
    const completion = service.getCompletionsAtPosition(file, offset, {});
    assert(completion.entries.some((item) => item.name === '_primary'));
    const details = service.getCompletionEntryDetails(file, offset, '_primary', {}, undefined, {});
    assert.match(ts.displayPartsToString(details.documentation), /主操作颜色/);
    const raw = service.getCompletionsAtPosition(file, position("'_primary'") + 1, {});
    assert(raw.entries.some((item) => item.name === '_primary'));
    const nativeRaw = service.getCompletionsAtPosition(file, position("'inline-flex'") + 1, {});
    assert(nativeRaw.entries.some((item) => item.name === 'inline-flex'));
    assert(
      !nativeRaw.entries.some((item) => item.name === 'inlineFlex'),
      'raw 不提示作者成员的 camelCase 名称',
    );
    assert.match(ts.displayPartsToString(hover('s.color._primary').displayParts), /string/);
  } finally {
    service.dispose();
  }
});
