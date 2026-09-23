import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { format } from 'prettier';
import { createSchema } from './css-data/schema.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const schema = await createSchema();
const keywordGroups = [];
const helperGroups = [];
function group(groups, value) {
  const text = JSON.stringify(value);
  let index = groups.findIndex((v) => JSON.stringify(v) === text);
  if (index === -1) {
    index = groups.length;
    groups.push(value);
  }
  return index;
}
function meta(record, property = false) {
  return {
    cssName: record.cssName,
    keywords: group(keywordGroups, record.keywords),
    helpers: group(helperGroups, record.helpers),
    numbers: record.numbers,
    zero: record.zero,
    ...(property && schema.policy.animationProperties.includes(record.cssName)
      ? { resource: 'keyframes' }
      : {}),
  };
}
const propertyMetadata = Object.fromEntries(schema.properties.map((p) => [p.name, meta(p, true)]));
const descriptorMetadata = Object.fromEntries(
  Object.entries(schema.descriptors).map(([rule, descriptors]) => [
    rule,
    Object.fromEntries(descriptors.map((d) => [d.name, meta(d)])),
  ]),
);
const header = `// 自动生成，勿手工修改。来源：csstype ${schema.sources.csstype}, Webref ${schema.sources['@webref/css']}, CSSTree ${schema.sources['css-tree']} (MIT)。\n`;
const union = (values) =>
  values.length ? values.map((v) => JSON.stringify(v)).join(' | ') : 'never';
const tuple = (n) =>
  '[' + Array.from({ length: n }, (_, i) => `value${i + 1}: number`).join(', ') + ']';
function propertyType(record, metadata) {
  const parts = [`KeywordValues[${metadata.keywords}]`];
  if (record.numbers.length) parts.push('number');
  else if (record.zero) parts.push('0');
  const units = [
    ...new Set(record.helpers.filter((h) => h.arities[1]).flatMap((h) => schema.units[h.family])),
  ];
  if (units.length) parts.push('`${number}${' + union(units) + '}`');
  const resource =
    metadata.resource === 'keyframes'
      ? ', KeyframesDefinition | readonly KeyframesDefinition[]'
      : '';
  return `CssProperty<KeywordValues[${metadata.keywords}], ${parts.join(' | ')}, KeywordMembers[${metadata.keywords}], HelperMembers[${metadata.helpers}]${resource}>`;
}
function documentation(record) {
  return (
    '/**\n' +
    [
      record.cssName,
      record.syntax
        ? `语法：${record.syntax}`
        : '无可解析语法；只生成有来源的关键字，其余使用 raw。',
      record.grammarSource ? `快捷值依据：${record.grammarSource}；复杂值请使用 raw。` : '',
      record.href ? '@see ' + record.href : '',
    ]
      .filter(Boolean)
      .map((line) => ' * ' + line.replaceAll('*/', '* /'))
      .join('\n') +
    '\n */'
  );
}
const types = `${header}
import type { CssProperty } from '../values.js';
import type { KeyframesDefinition } from '../style-program.js';
interface KeywordValues {
${keywordGroups.map((keywords, i) => `${i}: ${union(Object.values(keywords))};`).join('\n')}
}
interface KeywordMembers {
${keywordGroups
  .map(
    (keywords, i) =>
      `${i}: { ${Object.entries(keywords)
        .map(([name, value]) => `/** 写入 ${value}。 */ readonly ${JSON.stringify(name)}: void;`)
        .join('\n')} };`,
  )
  .join('\n')}
}
interface HelperMembers {
${helperGroups
  .map(
    (helpers, i) =>
      `${i}: { ${helpers
        .flatMap((helper) =>
          schema.units[helper.family].map(
            (unit) =>
              `/** ${unit}；${helper.separator === ',' ? '逗号' : '空格'}分隔，保留声明顺序。 */\n${JSON.stringify((unit === '%' ? 'pct' : unit) + helper.suffix)}(...values: ${Object.keys(
                helper.arities,
              )
                .map((n) => tuple(Number(n)))
                .join(' | ')}): void;`,
          ),
        )
        .join('\n')} };`,
  )
  .join('\n')}
}
export interface StyleProperties {
${schema.properties.map((p) => `${documentation(p)}\nreadonly ${JSON.stringify(p.name)}: ${propertyType(p, propertyMetadata[p.name])};`).join('\n')}
}
export interface DescriptorBuilders {
${Object.entries(schema.descriptors)
  .map(
    ([rule, descriptors]) =>
      `${JSON.stringify(rule)}: {\n${descriptors.map((d) => `${documentation(d)}\nreadonly ${JSON.stringify(d.name)}: ${propertyType(d, descriptorMetadata[rule][d.name])};`).join('\n')}\n};`,
  )
  .join('\n')}
}
export type SimplePseudo = ${union(schema.simplePseudos)};
export type FunctionalPseudo = ${union(schema.functionalPseudos)};
export type DescriptorRule = keyof DescriptorBuilders;
`;
const runtime = `${header}
import type { PropertyMetadata, HelperPlan, KeywordGroup } from '../metadata-types.js';
export const keywordGroups: readonly KeywordGroup[] = ${JSON.stringify(keywordGroups)};
export const helperGroups: readonly (readonly HelperPlan[])[] = ${JSON.stringify(helperGroups)};
export const unitFamilies: Readonly<Record<string, readonly string[]>> = ${JSON.stringify(schema.units)};
export const propertyMetadata: Readonly<Record<string, PropertyMetadata>> = ${JSON.stringify(propertyMetadata)};
export const descriptorMetadata: Readonly<Record<string, Readonly<Record<string, PropertyMetadata>>>> = ${JSON.stringify(descriptorMetadata)};
export const simplePseudos: readonly string[] = ${JSON.stringify(schema.simplePseudos)};
export const functionalPseudos: readonly string[] = ${JSON.stringify(schema.functionalPseudos)};
export const propertyAliases: Readonly<Record<string, string>> = ${JSON.stringify(schema.propertyAliases)};
`;
const coverage = {
  sources: schema.sources,
  schemaDigest: createHash('sha256').update(JSON.stringify(schema)).digest('hex'),
  policy: schema.policy,
  totals: {
    properties: schema.properties.length,
    keywordGroups: keywordGroups.length,
    helperGroups: helperGroups.length,
    descriptors: Object.values(schema.descriptors).reduce((n, ds) => n + ds.length, 0),
    queryFeatures: Object.values(schema.queries).reduce((n, ds) => n + ds.length, 0),
  },
  properties: schema.properties.map((p) => ({
    name: p.name,
    cssName: p.cssName,
    sources: [
      ...(p.upstream ? ['csstype'] : []),
      ...(p.grammarSource === 'webref' ? ['webref'] : []),
      ...(p.grammarSource === 'csstree-compat' ? ['csstree-compat'] : []),
    ],
    availability: p.availability,
    categories: p.categories,
    href: p.href,
    grammarSource: p.grammarSource,
    syntax: p.syntax,
    keywordCount: Object.keys(p.keywords).length,
    helperFamilies: p.helpers.map((h) => ({
      family: h.family,
      separator: h.separator,
      arities: Object.keys(h.arities).map(Number),
    })),
    valuePolicy: 'strict-shortcuts-and-explicit-raw',
  })),
  descriptors: Object.fromEntries(
    Object.entries(schema.descriptors).map(([k, v]) => [
      k,
      v.map((d) => ({ name: d.name, syntax: d.syntax, href: d.href })),
    ]),
  ),
  queryFeatures: Object.fromEntries(
    Object.entries(schema.queries).map(([k, v]) => [k, v.map((d) => d.cssName)]),
  ),
  features: schema.inventory,
  unresolved: schema.unresolved,
  referenceExceptions: schema.referenceExceptions,
  exclusions: schema.exclusions,
};
if (process.argv.includes('--diff')) {
  const previous = JSON.parse(await readFile(resolve(root, 'docs/css-coverage.json'), 'utf8'));
  const oldMap = new Map(previous.properties.map((p) => [p.name, p]));
  const newMap = new Map(coverage.properties.map((p) => [p.name, p]));
  console.log(
    JSON.stringify(
      {
        previousDigest: previous.schemaDigest,
        nextDigest: coverage.schemaDigest,
        added: [...newMap.keys()].filter((k) => !oldMap.has(k)),
        removed: [...oldMap.keys()].filter((k) => !newMap.has(k)),
        changed: [...newMap.keys()].filter(
          (k) => oldMap.has(k) && JSON.stringify(oldMap.get(k)) !== JSON.stringify(newMap.get(k)),
        ),
      },
      null,
      2,
    ),
  );
  process.exit(0);
}
const outputs = {
  'core/src/generated/properties.ts': await format(types, {
    parser: 'typescript',
    singleQuote: true,
    printWidth: 100,
  }),
  'core/src/generated/metadata.ts': await format(runtime, {
    parser: 'typescript',
    singleQuote: true,
    printWidth: 100,
  }),
  'docs/css-coverage.json': JSON.stringify(coverage, null, 2) + '\n',
};
for (const [file, contents] of Object.entries(outputs)) {
  const path = resolve(root, file);
  if (process.argv.includes('--check'))
    assert.equal(await readFile(path, 'utf8'), contents, `Generated output is stale: ${file}`);
  else {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, contents, 'utf8');
  }
}
console.log(
  JSON.stringify({
    mode: process.argv.includes('--check') ? 'check' : 'generate',
    ...coverage.totals,
    digest: coverage.schemaDigest,
  }),
);
