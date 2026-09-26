import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';
import ts from 'typescript';
import { units, extraUnits, unitMethod, valueMethods } from './css-author-methods.mjs';
import { selectorShortcuts } from '../core/src/selectors.ts';
import { themePalette, themeVariable } from '../core/src/theme-palette.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const input = resolve(root, 'core/node_modules/csstype/index.d.ts');
const outputDir = resolve(root, 'core/src/generated');
const config = JSON.parse(await readFile(resolve(root, 'scripts/css-author-notes.json'), 'utf8'));
const version = JSON.parse(
  await readFile(resolve(root, 'core/node_modules/csstype/package.json'), 'utf8'),
).version;
const mode = process.argv[2];
if (!['--write', '--check'].includes(mode) || process.argv.length !== 3)
  throw new Error('Use --write or --check.');

const program = ts.createProgram([input], { noEmit: true, skipLibCheck: true });
const source = program.getSourceFile(input);
if (!source) throw new Error('Cannot read csstype declarations.');
const checker = program.getTypeChecker();

function membersOf(name) {
  const declaration = source.statements.find(
    (node) => ts.isInterfaceDeclaration(node) && node.name.text === name,
  );
  if (!declaration) throw new Error(`Missing csstype interface ${name}.`);
  return declaration.members.filter(ts.isPropertySignature);
}

const properties = new Map();
// 同序的 Hyphen 接口给出真正写入 CSS 的属性名；错位时必须停止生成。
for (const [camel, hyphen] of [
  ['StandardLonghandProperties', 'StandardLonghandPropertiesHyphen'],
  ['StandardShorthandProperties', 'StandardShorthandPropertiesHyphen'],
  ['SvgProperties', 'SvgPropertiesHyphen'],
]) {
  const names = membersOf(camel);
  const cssNames = membersOf(hyphen);
  if (names.length !== cssNames.length) throw new Error(`${camel} changed its property count.`);
  for (let index = 0; index < names.length; index++) {
    const member = names[index];
    const cssMember = cssNames[index];
    if (member.type?.getText(source) !== cssMember.type?.getText(source))
      throw new Error(`${camel} and ${hyphen} are no longer aligned at ${index}.`);
    if (!properties.has(member.name.text))
      properties.set(member.name.text, { member, cssName: cssMember.name.text });
  }
}

function propertyType(member) {
  const nodes = ts.isUnionTypeNode(member.type) ? member.type.types : [member.type];
  const reference = nodes.find(
    (node) =>
      ts.isTypeReferenceNode(node) &&
      ts.isQualifiedName(node.typeName) &&
      node.typeName.left.text === 'Property',
  );
  if (!reference) throw new Error(`Missing Property.* type for ${member.name.text}.`);
  return reference.typeName.right.text;
}

const reserved = new Set([
  'raw',
  'px',
  'constructor',
  'then',
  '__proto__',
  'prototype',
  'toString',
  'toLocaleString',
  'valueOf',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
]);
function keywordName(value) {
  if (/^-(?:moz|ms|webkit|o)-/i.test(value)) return null;
  const name = value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) || reserved.has(name)) return null;
  return name;
}

function keywordsOf(member) {
  // 开放字符串留给 raw()；只有固定字面量预生成成一行声明。
  const type = checker.getTypeAtLocation(member.type);
  const variants = type.isUnion() ? type.types : [type];
  const keywords = new Map();
  for (const value of new Set(
    variants.filter((item) => item.flags & ts.TypeFlags.StringLiteral).map((item) => item.value),
  )) {
    const name = keywordName(value);
    if (!name) continue;
    if (keywords.has(name) && keywords.get(name) !== value)
      throw new Error(`CSS keyword name collision: ${member.name.text}.${name}`);
    keywords.set(name, value);
  }
  return [...keywords].sort(([left], [right]) => (left < right ? -1 : left > right ? 1 : 0));
}

function commentOf(member, description, cssName) {
  const docs = member.jsDoc?.map((item) => item.getFullText(source)).join('\n') ?? '';
  const initial = docs.match(/\*\*Initial value\*\*: `([^`]+)`/)?.[1];
  const url = docs.match(/@see (https:\/\/[^\s*]+)/)?.[1];
  return `/** ${description ? `${description}（CSS ${cssName}）` : `CSS 属性 ${cssName}`}${initial ? `；初始值 ${initial}` : ''}。\n * @see ${url ?? `https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/${cssName}`}\n */`;
}

const header = [
  `// 由 scripts/generate-css-author.mjs 从 csstype@${version} 生成；请勿手改。`,
  '// 来源许可见 core/THIRD_PARTY_NOTICES.md。',
];
const base = [
  ...header,
  '',
  'export class CssProperty<T> {',
  '  protected readonly name: string;',
  '  constructor(name: string) { this.name = name; }',
  '  raw(value: T | (string & {})): string { return `${this.name}:${value};`; }',
  '}',
  'export class LengthCssProperty<T> extends CssProperty<T> {',
  ...Object.entries(units).flatMap(([name, suffix]) => unitMethod(name, suffix)),
  '}',
  `export const unitSuffix: Readonly<Record<string, string>> = ${JSON.stringify({ ...units, ...extraUnits })};`,
];
const groups = ['a', 'b', 'c-f', 'g-l', 'm-o', 'p-r', 's-t', 'u-z'];
const groupLines = new Map(
  groups.map((group) => [
    group,
    [
      ...header,
      "import type { Property } from 'csstype';",
      "import { CssProperty, LengthCssProperty } from './base.js';",
      '// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。',
    ],
  ]),
);
const author = [...header];
for (const [index, group] of groups.entries()) {
  author.push(`import * as group${index} from './${group}.js';`);
}
for (const group of groups) author.push(`export * from './${group}.js';`);

function groupFor(name) {
  const first = name[0].toLowerCase();
  return groups.find((group) => first >= group[0] && first <= group.at(-1));
}

const systemFields = [];
const systemCreators = [];
let keywordCount = 0;
const notes = new Map(config.properties.map((setting) => [setting.name, setting]));
for (const name of notes.keys())
  if (!properties.has(name)) throw new Error(`Unknown CSS property ${name}.`);
const names = [...properties.keys()].sort((left, right) =>
  left < right ? -1 : left > right ? 1 : 0,
);
for (const name of names) {
  const setting = notes.get(name) ?? { name };
  const found = properties.get(name);
  const { member, cssName } = found;
  const type = propertyType(member);
  const className = `${setting.name[0].toUpperCase()}${setting.name.slice(1)}Css`;
  const keywords = keywordsOf(member);
  const documentation = commentOf(member, setting.description, cssName);
  keywordCount += keywords.length;
  const hasLength = member.type.getText(source).includes('TLength');
  const syntax =
    member.jsDoc
      ?.map((item) => item.getFullText(source))
      .join('\n')
      .match(/\*\*Syntax\*\*: `([^`]+)`/)?.[1] ?? '';
  const maxArgs =
    setting.maxArguments ??
    setting.maxPxArguments ??
    Number(syntax.match(/\{1,([234])\}/)?.[1] ?? 1);
  const hasPercent =
    setting.percentage ??
    /<(?:length-percentage|percentage|alpha-value|opacity-value)(?:\s[^>]*)?>/.test(syntax);
  const hasTime = member.type.getText(source).includes('TTime');
  const hasAngle = /<angle(?:\s[^>]*)?>/.test(syntax);
  const hasColor = keywords.some(([name]) => name === 'red');
  const resolved = checker.getTypeAtLocation(member.type);
  const isNumber = (type) =>
    Boolean(type.flags & ts.TypeFlags.NumberLike) ||
    Boolean(type.isUnionOrIntersection() && type.types.some(isNumber));
  const hasNumber = isNumber(resolved);
  const methodNames = [
    ...(hasLength ? Object.keys(units) : []),
    ...(hasPercent ? ['percent'] : []),
    ...(hasTime ? ['ms', 's'] : []),
    ...(hasAngle ? ['deg', 'grad', 'rad', 'turn'] : []),
    ...(hasColor ? ['rgb', 'hsl'] : []),
    ...(hasLength || hasPercent || hasTime || hasAngle || hasNumber
      ? ['calc', 'min', 'max', 'clamp']
      : []),
  ];
  for (const method of methodNames)
    if (keywords.some(([name]) => name === method))
      throw new Error(`CSS method conflicts with keyword: ${name}.${method}`);
  if (setting.maxPxArguments && (!hasLength || setting.maxPxArguments < 2))
    throw new Error(`Invalid px arity for ${setting.name}.`);
  const group = groupFor(name);
  if (!group) throw new Error(`No generated group for ${name}.`);
  const lines = groupLines.get(group);
  const alias = `group${groups.indexOf(group)}`;
  lines.push(
    '',
    documentation,
    `export class ${className} extends ${hasLength ? 'LengthCssProperty' : 'CssProperty'}<Property.${type}> {`,
  );
  for (const [keyword, value] of keywords)
    lines.push(`  readonly ${keyword} = ${JSON.stringify(`${cssName}:${value};`)};`);
  lines.push(`  constructor() { super(${JSON.stringify(cssName)}); }`);
  if (hasLength && maxArgs > 1)
    for (const [name, suffix] of Object.entries(units))
      lines.push(...unitMethod(name, suffix, 1, maxArgs, true));
  if (hasPercent) lines.push(...unitMethod('percent', '%', 1, maxArgs));
  if (hasTime) for (const name of ['ms', 's']) lines.push(...unitMethod(name, name));
  if (hasAngle)
    for (const name of ['deg', 'grad', 'rad', 'turn']) lines.push(...unitMethod(name, name));
  lines.push(
    ...valueMethods(type, hasColor, hasLength || hasPercent || hasTime || hasAngle || hasNumber),
  );
  lines.push('}');
  systemFields.push(documentation, `  declare readonly ${setting.name}: ${alias}.${className};`);
  systemCreators.push(
    `defineSystemProperty(${JSON.stringify(setting.name)}, () => new ${alias}.${className}());`,
  );
}
for (const name of ['_selector', ...Object.keys(selectorShortcuts)]) {
  if (properties.has(name)) throw new Error(`CSS selector method conflicts with property: ${name}`);
}
author.push(
  "import { selectorRule, type CssSelector } from '../selectors.js';",
  "import type { CssInput } from '../registry.js';",
  '',
  '// 仅在首次构造作者实例时注册，避免未使用的属性链阻止按需打包。',
  'let systemPropertiesReady = false;',
  '/** 系统属性链；项目可通过类继承扩展关键字。 */',
  'export class Css {',
  '  constructor() { initializeSystemProperties(); }',
  '/** 原生选择器 / @ 规则 / 动画帧；展开声明数组并省略条件空项。 */',
  '_selector(selector: CssSelector, ...parts: CssInput[]): string { return selectorRule(selector, parts); }',
  ...Object.entries(selectorShortcuts).flatMap(([name, selector]) => [
    `/** 生成 ${selector} 嵌套规则；返回声明片段，不登记样式。 */`,
    `${name}(...parts: CssInput[]): string { return this._selector(${JSON.stringify(selector)}, ...parts); }`,
  ]),
);
author.push(...systemFields, '}');
author.push(
  'function defineSystemProperty<T>(name: string, create: () => T): void {',
  '  Object.defineProperty(Css.prototype, name, {',
  '    configurable: true,',
  '    get() {',
  '      const value = Object.freeze(create());',
  '      Object.defineProperty(Css.prototype, name, { value, enumerable: true });',
  '      return value;',
  '    },',
  '  });',
  '}',
  'function initializeSystemProperties(): void {',
  '  if (systemPropertiesReady) return;',
  ...systemCreators,
  '  systemPropertiesReady = true;',
  '}',
);

const files = new Map([['base', base], ...groupLines, ['author', author]]);
// 可选预设单独导出，不能从纯系统作者入口反向导入主题。
const themeProperties = {
  color: 'ColorCss',
  backgroundColor: 'BackgroundColorCss',
  borderColor: 'BorderColorCss',
  outlineColor: 'OutlineColorCss',
  fill: 'FillCss',
  stroke: 'StrokeCss',
};
const themeLines = [
  '// 由 scripts/generate-css-author.mjs 生成；请勿手改。',
  `import { Css, ${Object.values(themeProperties).join(', ')} } from './author.js';`,
];
for (const [property, type] of Object.entries(themeProperties)) {
  const entry = properties.get(property);
  if (!entry) throw new Error(`Unknown themed property: ${property}`);
  themeLines.push(`export class Theme${type} extends ${type} {`);
  for (const [name, [label]] of Object.entries(themePalette))
    themeLines.push(
      `/** ${label}；继承所在 DOM 作用域的主题变量。 */`,
      `readonly _${name}: string = ${JSON.stringify(`${entry.cssName}:var(${themeVariable(name)});`)};`,
    );
  themeLines.push('}');
}
themeLines.push(
  '/** 可选亮暗主题作者类；仍可继续继承属性类添加项目关键字。 */',
  'export class ThemeCss extends Css {',
);
for (const [property, type] of Object.entries(themeProperties))
  themeLines.push(`override readonly ${property} = new Theme${type}();`);
themeLines.push('}');
files.set('theme', themeLines);
for (const [name, lines] of files) {
  const output = resolve(outputDir, `${name}.ts`);
  const result = await prettier.format(lines.join('\n') + '\n', {
    ...(await prettier.resolveConfig(output)),
    filepath: output,
  });
  if (mode === '--check') {
    const existing = await readFile(output, 'utf8').catch((error) => {
      if (error.code === 'ENOENT') return '';
      throw error;
    });
    if (existing !== result) throw new Error(`CSS author output ${name}.ts is stale.`);
  } else {
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, result);
  }
}
console.log(
  `${mode === '--check' ? 'Checked' : 'Generated'} ${names.length} properties and ${keywordCount} keywords.`,
);
