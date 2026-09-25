import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';
import ts from 'typescript';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const input = resolve(root, 'core/node_modules/csstype/index.d.ts');
const output = resolve(root, 'core/src/generated/author.ts');
const config = JSON.parse(await readFile(resolve(root, 'scripts/css-author-pilot.json'), 'utf8'));
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
  return `/** ${description}（CSS ${cssName}）${initial ? `；初始值 ${initial}` : ''}。\n * @see ${url ?? `https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/${cssName}`}\n */`;
}

const lines = [
  `// 由 scripts/generate-css-author.mjs 从 csstype@${version} 生成；请勿手改。`,
  '// 来源许可见 core/THIRD_PARTY_NOTICES.md。',
  "import type { Property } from 'csstype';",
  '',
  'class CssProperty<T> {',
  '  protected readonly name: string;',
  '  constructor(name: string) { this.name = name; }',
  '  raw(value: T | (string & {})): string { return `${this.name}:${value};`; }',
  '}',
  'class LengthCssProperty<T> extends CssProperty<T> {',
  '  px(value: number): string { return `${this.name}:${value}px;`; }',
  '}',
  '// 系统关键字在模块装载时共享，主题用子类增加自己的成员。',
];
const systemFields = [];
let keywordCount = 0;
for (const setting of config.properties) {
  const found = properties.get(setting.name);
  if (!found) throw new Error(`Unknown CSS property ${setting.name}.`);
  const { member, cssName } = found;
  const type = propertyType(member);
  const className = `${setting.name[0].toUpperCase()}${setting.name.slice(1)}Css`;
  const keywordObject = `${setting.name}Keywords`;
  const systemObject = `system${setting.name[0].toUpperCase()}${setting.name.slice(1)}`;
  const keywords = keywordsOf(member);
  keywordCount += keywords.length;
  const hasLength = member.type.getText(source).includes('TLength');
  if (setting.maxPxArguments && (!hasLength || setting.maxPxArguments < 2))
    throw new Error(`Invalid px arity for ${setting.name}.`);
  lines.push('', `const ${keywordObject} = {`);
  for (const [name, value] of keywords)
    lines.push(`  ${name}: ${JSON.stringify(`${cssName}:${value};`)},`);
  lines.push('} as const;', '');
  lines.push(`type ${className}Keywords = Readonly<typeof ${keywordObject}>;`);
  lines.push(`export interface ${className} extends ${className}Keywords {}`);
  lines.push(commentOf(member, setting.description, cssName));
  lines.push(
    `export class ${className} extends ${hasLength ? 'LengthCssProperty' : 'CssProperty'}<Property.${type}> {`,
    `  constructor() { super(${JSON.stringify(cssName)}); }`,
  );
  if (setting.maxPxArguments) {
    for (let count = 1; count <= setting.maxPxArguments; count++)
      lines.push(
        `  px(${Array.from({ length: count }, (_, index) => `value${index + 1}: number`).join(', ')}): string;`,
      );
    lines.push(
      '  override px(...values: number[]): string {',
      "    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;",
      '  }',
    );
  }
  lines.push('}');
  lines.push(`Object.assign(${className}.prototype, ${keywordObject});`);
  lines.push(`Object.freeze(${className}.prototype);`);
  lines.push(`const ${systemObject} = Object.freeze(new ${className}());`);
  systemFields.push(`  readonly ${setting.name} = ${systemObject};`);
}
lines.push('', '/** 系统属性链；项目可通过类继承扩展关键字。 */', 'export class Css {');
lines.push(...systemFields, '}');

const result = await prettier.format(lines.join('\n') + '\n', {
  ...(await prettier.resolveConfig(output)),
  filepath: output,
});
if (mode === '--check') {
  const existing = await readFile(output, 'utf8').catch((error) => {
    if (error.code === 'ENOENT') return '';
    throw error;
  });
  if (existing !== result) throw new Error('CSS author output is stale; run pnpm css:generate.');
} else {
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, result);
}
console.log(
  `${mode === '--check' ? 'Checked' : 'Generated'} ${config.properties.length} properties and ${keywordCount} keywords.`,
);
