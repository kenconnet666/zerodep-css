import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';
import ts from 'typescript';
import { units, extraUnits, unitMethod, valueMethods, gridMethods } from './css-author-methods.mjs';
import {
  jsdoc,
  propertyDocumentation,
  keywordDocumentation,
  validatePropertyDocs,
  validateKeywordDocs,
  selectorDescriptions,
} from './css-author-docs.mjs';
import { selectorShortcuts } from '../core/src/selector-shortcuts.ts';
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
  'declaration',
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

function commentOf(member, name, cssName) {
  return propertyDocumentation(
    name,
    cssName,
    member.jsDoc?.map((item) => item.getFullText(source)).join('\n') ?? '',
  );
}

const header = [
  `// 由 scripts/generate-css-author.mjs 从 csstype@${version} 生成；请勿手改。`,
  '// 来源许可见 core/THIRD_PARTY_NOTICES.md。',
];
const base = [
  ...header,
  '',
  '/** 保留关键字补全，同时允许任意 CSS 字符串。 */',
  'export type CssString = string & {};',
  '',
  '/** CSS 声明构造基类；供属性子类复用，不验证输入或登记样式。 */',
  'export class CssProperty {',
  '/** 写入声明的 CSS 属性原名。 */',
  '  protected readonly name: string;',
  jsdoc('构造指定 CSS 属性的声明作者。', {
    params: { name: 'CSS 原名，如 background-color；不是 camelCase 字段名。' },
    examples: ["class CustomCss extends CssProperty { constructor() { super('--custom'); } }"],
  }),
  '  constructor(name: string) { this.name = name; }',
  jsdoc('原样拼接当前属性的声明。', {
    params: { value: '属性值；不自动添加单位、不转义或校验。' },
    returns: '形如 name:value; 的完整声明字符串。',
  }),
  '  protected declaration(value: string | number): string { return `${this.name}:${value};`; }',
  '}',
  '/** 共享长度单位方法；值的参照和限制仍由具体 CSS 属性决定。 */',
  'export class LengthCssProperty extends CssProperty {',
  ...Object.entries(units).flatMap(([name, suffix]) => unitMethod(name, suffix)),
  '}',
  '/** 作者单位方法到原生 CSS 后缀的映射，例如 percent 对应 %。 */',
  `export const unitSuffix: Readonly<Record<string, string>> = ${JSON.stringify({ ...units, ...extraUnits })};`,
];
const groups = ['a', 'b', 'c-f', 'g-l', 'm-o', 'p-r', 's-t', 'u-z'];
const groupLines = new Map(
  groups.map((group) => [
    group,
    [
      ...header,
      "import type { Property } from 'csstype';",
      "import { CssProperty, LengthCssProperty, type CssString } from './base.js';",
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
validatePropertyDocs(names);
for (const name of names) {
  const setting = notes.get(name) ?? { name };
  const found = properties.get(name);
  const { member, cssName } = found;
  const type = propertyType(member);
  const className = `${setting.name[0].toUpperCase()}${setting.name.slice(1)}Css`;
  const keywords = keywordsOf(member);
  validateKeywordDocs(name, keywords);
  const documentation = commentOf(member, name, cssName);
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
  const grid = gridMethods(name);
  const methodNames = [
    ...Object.keys(grid),
    ...(hasLength ? Object.keys(units) : []),
    ...(hasPercent ? ['percent'] : []),
    ...(hasTime ? ['ms', 's'] : []),
    ...(hasAngle ? ['deg', 'grad', 'rad', 'turn'] : []),
    ...(hasColor ? ['rgb', 'hsl', 'oklch', 'oklab'] : []),
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
    `export class ${className} extends ${hasLength ? 'LengthCssProperty' : 'CssProperty'} {`,
  );
  for (const [keyword, value] of keywords)
    lines.push(
      keywordDocumentation(name, cssName, value),
      `  readonly ${keyword} = ${JSON.stringify(`${cssName}:${value};`)};`,
    );
  lines.push(
    jsdoc(`创建 ${cssName} 属性作者；普通使用通过 s.${name} 取得共享实例。`, {
      examples: [`class Custom${className} extends ${className} {}`],
    }),
    `  constructor() { super(${JSON.stringify(cssName)}); }`,
  );
  lines.push(
    jsdoc(`原样生成 ${cssName} 声明，保留关键字补全并接受自定义 CSS 值。`, {
      params: { value: '裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。' },
      remarks: '不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。',
      returns: `完整声明字符串，形如 ${cssName}:value;。`,
      examples: [`s.${name}.raw('inherit') // ${cssName}:inherit;`],
    }),
    `raw(value: Property.${type} | CssString): string { return this.declaration(value); }`,
  );
  if (hasLength && maxArgs > 1)
    for (const [unit, suffix] of Object.entries(units))
      lines.push(...unitMethod(unit, suffix, 1, maxArgs, true, name));
  if (hasPercent) lines.push(...unitMethod('percent', '%', 1, maxArgs, false, name));
  if (hasTime)
    for (const unit of ['ms', 's']) lines.push(...unitMethod(unit, unit, 1, 1, false, name));
  if (hasAngle)
    for (const unit of ['deg', 'grad', 'rad', 'turn'])
      lines.push(...unitMethod(unit, unit, 1, 1, false, name));
  lines.push(
    ...valueMethods(
      type,
      hasColor,
      hasLength || hasPercent || hasTime || hasAngle || hasNumber,
      name,
    ),
    ...Object.values(grid).flat(),
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
  jsdoc('创建作者入口；系统属性链按首次访问惰性创建并共享。', {
    remarks: '系统属性实例只读。扩展语义成员时继承属性类，并在作者子类中覆盖对应字段。',
    examples: ['const s = new Css();', 's.display.flex // display:flex;'],
  }),
  '  constructor() { initializeSystemProperties(); }',
  jsdoc('构造原生选择器、@ 规则或动画帧的嵌套声明片段。', {
    params: {
      selector: '选择器、逗号分隔的选择器列表或 @ 规则字符串；& 代表当前规则。',
      parts: '属性声明、嵌套片段、数组或条件空项；展开数组并省略条件空项。',
    },
    returns: '嵌套声明片段；交给 css(...) 后才登记样式。',
    examples: [
      "s._selector('& > span', s.color.red)",
      "s._selector('@media (min-width: 48rem)', s.display.grid)",
    ],
  }),
  '_selector(selector: CssSelector, ...parts: CssInput[]): string { return selectorRule(selector, parts); }',
  ...Object.entries(selectorShortcuts).flatMap(([name, selector]) => [
    jsdoc(selectorDescriptions[name], {
      params: { parts: '属性声明或嵌套片段；允许数组及条件空项。' },
      returns: `${selector} 嵌套规则片段，不立即登记样式。`,
      examples: [`s.${name}(s.color.red)`],
    }),
    `${name}(...parts: CssInput[]): string { return this._selector(${JSON.stringify(selector)}, ...parts); }`,
  ]),
);
author.push(...systemFields, '}');
author.push(
  'function defineSystemProperty(name: string, create: () => object): void {',
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
  themeLines.push(
    jsdoc(`${entry.cssName} 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。`),
    `export class Theme${type} extends ${type} {`,
  );
  for (const [name, [label]] of Object.entries(themePalette))
    themeLines.push(
      jsdoc(`${label}；引用所在 DOM 作用域的主题变量 ${themeVariable(name)}。`, {
        remarks: `CSS 声明：\`${entry.cssName}:var(${themeVariable(name)});\`。变量需由主题规则提供，本字段不创建主题容器。`,
        examples: [`s.${property}._${name}`],
      }),
      `readonly _${name}: string = ${JSON.stringify(`${entry.cssName}:var(${themeVariable(name)});`)};`,
    );
  themeLines.push('}');
}
themeLines.push(
  '/** 可选亮暗主题作者类；仍可继续继承属性类添加项目关键字。 */',
  'export class ThemeCss extends Css {',
);
for (const [property, type] of Object.entries(themeProperties))
  themeLines.push(
    jsdoc(`${property} 的主题属性作者，保留原生关键字并添加语义主题字段。`),
    `override readonly ${property} = new Theme${type}();`,
  );
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
