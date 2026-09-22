// 研究探针：只读取固定版本数据，在本目录输出报告；不修改参考仓库。
// pnpm install && pnpm run audit
// 也可 node audit.mjs --deps <装有相同依赖的目录>，避免重复安装。
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const depIndex = process.argv.indexOf('--deps');
const deps = depIndex < 0 ? here : resolve(process.argv[depIndex + 1]);
const require = createRequire(join(deps, 'package.json'));
const ts = require('typescript');
const tree = require('css-tree');
const webref = await require('@webref/css').index();
const manifest = JSON.parse(await readFile(join(here, 'package.json'), 'utf8'));
const versions = {};
for (const [name, expected] of Object.entries(manifest.dependencies)) {
  const actual = require(name + '/package.json').version;
  assert.equal(actual, expected, `数据版本不一致: ${name}`);
  versions[name] = actual;
}

const entry = join(dirname(require.resolve('csstype/package.json')), 'index.d.ts');
const virtual = join(deps, '__zerodep_css_probe__.ts');
const options = {
  strict: true,
  noEmit: true,
  skipLibCheck: true,
  target: ts.ScriptTarget.ESNext,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
};
function programFor(text) {
  const host = ts.createCompilerHost(options);
  const getSourceFile = host.getSourceFile.bind(host);
  host.getSourceFile = (path, version, onError, fresh) =>
    resolve(path) === virtual
      ? ts.createSourceFile(path, text, version, true)
      : getSourceFile(path, version, onError, fresh);
  return ts.createProgram([entry, virtual], options, host);
}
function assertClean(program) {
  const errors = ts.getPreEmitDiagnostics(program);
  assert.equal(errors.length, 0, errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')).join('\n'));
}
const program = programFor("import type * as CSS from 'csstype'; type UnitProbe = CSS.Properties<'__length__', '__time__'>;");
assertClean(program);
const checker = program.getTypeChecker();
const source = program.getSourceFile(entry);
function declaration(name) {
  const node = source.statements.find(n => n.name?.text === name);
  assert.ok(node, `缺少上游声明: ${name}`);
  return node;
}
function members(name) {
  return checker.getPropertiesOfType(checker.getTypeAtLocation(declaration(name)));
}
function literals(type) {
  if (type.isUnion()) return type.types.flatMap(literals);
  return type.isStringLiteral() ? [type.value] : [];
}
const propertySymbols = members('Properties');
const categories = Object.fromEntries(
  ['StandardProperties', 'VendorProperties', 'ObsoleteProperties', 'SvgProperties']
    .map(name => [name, members(name).map(p => p.name).sort()]),
);
const probeNode = program.getSourceFile(virtual).statements.find(ts.isTypeAliasDeclaration);
const probeSymbols = new Map(checker.getPropertiesOfType(checker.getTypeAtLocation(probeNode)).map(p => [p.name, p]));
const keywordAlias = value => value.replace(/^-+/, '').replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const canonicalNames = new Map();
for (const feature of Object.values(webref.properties)) {
  for (const name of [feature.name, ...(feature.styleDeclaration ?? [])]) {
    canonicalNames.set(name, feature.name);
  }
}
const properties = propertySymbols.map(symbol => {
  const keywords = [...new Set(literals(checker.getTypeOfSymbolAtLocation(symbol, declaration('Properties'))))].sort();
  const probeValues = literals(checker.getTypeOfSymbolAtLocation(probeSymbols.get(symbol.name), probeNode));
  const pointKeywords = keywords.filter(v => /^-?[a-z][a-z0-9-]*$/i.test(v));
  const aliases = pointKeywords.map(keywordAlias);
  return {
    name: symbol.name,
    specName: canonicalNames.get(symbol.name) ?? null,
    keywords,
    pointKeywords: Object.fromEntries(pointKeywords.map(v => [keywordAlias(v), v])),
    aliasCollision: aliases.length !== new Set(aliases).size,
    callableMemberCollisions: aliases.filter(v => ['name', 'length', 'call', 'apply', 'bind', 'prototype', 'arguments', 'caller'].includes(v)),
    // 只表示上游泛型中出现过该维度，不代表这个属性能直接接受此单位。
    lengthSentinel: probeValues.includes('__length__'),
    timeSentinel: probeValues.includes('__time__'),
  };
}).sort((a, b) => a.name.localeCompare(b.name, 'en'));
const pseudoCounts = Object.fromEntries(['SimplePseudos', 'AdvancedPseudos'].map(name =>
  [name, literals(checker.getTypeAtLocation(declaration(name))).length]));

// 检查规范语法是否可解析，同时列出不在数据集中的引用。
// 缺失引用不自动按 string 处理；这里的 unresolved 是候选项，还需作用域/基础类型分类。
let parsed = 0;
const parseErrors = [];
const unresolved = new Map();
const syntaxless = [];
const features = Object.entries(webref).flatMap(([category, records]) => Object.entries(records).map(([key, feature]) => ({category, key, feature})));
for (const {key, feature} of features.filter(f => f.category === 'atrules')) {
  for (const descriptor of Object.values(feature.descriptors ?? {})) {
    features.push({category: 'descriptors', key: `${key}/${descriptor.name}`, feature: descriptor});
  }
}
for (const {category, key, feature} of features) {
  if (!feature.syntax) { syntaxless.push(`${category}:${key}`); continue; }
  try {
    const ast = tree.definitionSyntax.parse(feature.syntax);
    parsed++;
    tree.definitionSyntax.walk(ast, node => {
      if (!['Type', 'Property'].includes(node.type)) return;
      const table = node.type === 'Property' ? webref.properties : node.name.endsWith('()') ? webref.functions : webref.types;
      if (table[node.name]) return;
      const target = `${node.type}:${node.name}`;
      const uses = unresolved.get(target) ?? [];
      uses.push(`${category}:${key}`);
      unresolved.set(target, uses);
    });
  } catch (error) { parseErrors.push({category, key, message: error.message}); }
}

// 生成全量属性成员和关键字访问器的类型探针；单位仅取几个已经明确语义的属性作对照。
const unitSignatures = {
  width: 'px(value: Input<number>): void; pct(value: Input<number>): void;',
  outlineWidth: 'px(value: Input<number>): void;',
  padding: 'px(...values: [Input<number>] | [Input<number>, Input<number>] | [Input<number>, Input<number>, Input<number>] | [Input<number>, Input<number>, Input<number>, Input<number>]): void;',
  animationDuration: 'ms(value: Input<number>): void; s(value: Input<number>): void;',
};
const generated = `import type * as CSS from 'csstype';
declare const binding: unique symbol;
interface Binding<T> { readonly [binding]: T }
type Input<T> = T | Binding<T>;
declare function ibind<T extends string | number>(value: T): Binding<T>;
interface Builder {
${properties.map(p => `readonly ${JSON.stringify(p.name)}: ((value: Input<NonNullable<CSS.Properties[${JSON.stringify(p.name)}]>>) => void) & { ${Object.keys(p.pointKeywords).map(k => `readonly ${JSON.stringify(k)}: void;`).join(' ')} ${unitSignatures[p.name] ?? ''} };`).join('\n')}
}
declare const s: Builder;
${properties.map(p => `s[${JSON.stringify(p.name)}].inherit;`).join('\n')}
s.display.flex;
s.width.px(ibind(12));
s.opacity(ibind(0.5));
s.padding.px(1, 2, ibind(3), 4);
s.animationDuration.ms(100);
// 以下语义错误必须被类型系统拒绝。
// @ts-expect-error 属性拼写错误
s.dispaly;
// @ts-expect-error 属性下不存在的关键字
s.display.notAKeyword;
// @ts-expect-error 边框线宽不接受百分比方法
s.outlineWidth.pct(10);
// @ts-expect-error 单位方法接受数值，不能再次附带字符串单位
s.width.px(ibind('12px'));
// @ts-expect-error 简写最多四个参数
s.padding.px(1, 2, 3, 4, 5);
// @ts-expect-error 时间值不接受长度单位
s.animationDuration.px(10);
// @ts-expect-error ibind 不是任意对象的包装器
ibind({ x: 1 });
// @ts-expect-error 类型化绑定不是普通数字，不能当作数值运算
ibind(10) * 2;
// 下面是已知的 csstype 宽松边界，编译成功是探针结论，不是推荐合同。
s.display('definitely-not-a-display-value');
`;
const started = performance.now();
const typeProgram = programFor(generated);
assertClean(typeProgram);
const typeCheckMs = Math.round(performance.now() - started);

// 使用 css-tree 自带的值语法验证若干风险例子，不能冒充完整 Webref 语义验证。
const grammarCases = [
  ['outline-width', '10%', false],
  ['border-width', '10%', false],
  ['padding', '10%', true],
  ['opacity', '50%', true],
  ['animation-duration', '100ms, 200ms', true],
  ['animation-duration', '100ms 200ms', false],
  ['display', 'banana', false],
];
const grammarResults = grammarCases.map(([property, value, expected]) => {
  const result = tree.lexer.matchProperty(property, value);
  const valid = !result.error;
  assert.equal(valid, expected, `${property}: ${value}`);
  return {property, value, valid};
});
assert.equal(parseErrors.length, 0, '规范语法解析失败，不能静默忽略。');
assert.equal(properties.filter(p => p.aliasCollision).length, 0, '关键字别名冲突。');
const names = new Set(properties.map(p => p.specName).filter(Boolean));
const keywordGroups = [];
const keywordGroupIds = new Map();
const compactProperties = properties.map(({keywords, pointKeywords, ...property}) => {
  const signature = JSON.stringify({keywords, pointKeywords});
  let group = keywordGroupIds.get(signature);
  if (group === undefined) {
    group = keywordGroups.length;
    keywordGroupIds.set(signature, group);
    keywordGroups.push({keywords, pointKeywords});
  }
  return {...property, keywordGroup: group};
});
const report = {
  purpose: '研究探针；不是完整生成器、CSS 引擎或产品支持声明',
  versions,
  counts: {
    csstypeProperties: properties.length,
    categories: Object.fromEntries(Object.entries(categories).map(([k, v]) => [k, v.length])),
    categoryCountsOverlap: true,
    pseudos: pseudoCounts,
    webref: Object.fromEntries(Object.entries(webref).map(([k, v]) => [k, Object.keys(v).length])),
    descriptors: features.filter(f => f.category === 'descriptors').length,
    parsedSyntaxes: parsed,
    syntaxlessFeatures: syntaxless.length,
    unresolvedReferenceCandidates: unresolved.size,
  },
  comparison: {
    csstypeWithoutExactWebrefName: properties.filter(p => !p.specName).map(p => p.name),
    webrefWithoutCsstypeMatch: Object.keys(webref.properties).filter(name => !names.has(name)).sort(),
    note: '按 Webref CSSOM 别名进行匹配；差异包含旧属性、厂商属性、草案和大小写别名，不等于缺陷数量。',
  },
  typeProbe: {
    generatedPropertyMembers: properties.length,
    generatedKeywordMembers: properties.reduce((n, p) => n + Object.keys(p.pointKeywords).length, 0),
    allPropertyAccessChecks: properties.length,
    negativeChecks: 8,
    diagnostics: 0,
    elapsedMs: typeCheckMs,
    upstreamDisplayAcceptsInvalidString: true,
    note: '时间为单次本地检查；不含 IDE 补全测量。单位方法只做代表性样本，不代表全量已生成。',
  },
  grammarResults,
  callableMemberCollisions: properties.filter(p => p.callableMemberCollisions.length),
  syntaxless,
  unresolved: [...unresolved].map(([reference, uses]) => ({reference, uses})),
  keywordGroups,
  properties: compactProperties,
};
await writeFile(join(here, 'report.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({versions, counts: report.counts, differences: Object.fromEntries(Object.entries(report.comparison).filter(([, v]) => Array.isArray(v)).map(([k, v]) => [k, v.length])), typeProbe: report.typeProbe, grammarResults}, null, 2));
