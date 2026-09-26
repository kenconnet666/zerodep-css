import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const directory = new URL('../../core/src/generated/', import.meta.url);
const groups = ['a', 'b', 'c-f', 'g-l', 'm-o', 'p-r', 's-t', 'u-z'];
const originals = new Map();
export const properties = [];
const exceptions = {};
const propertyExceptions = {};
const kebab = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const globals = {
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  revertLayer: 'revert-layer',
  unset: 'unset',
};
for (const group of groups) {
  const source = await readFile(new URL(`${group}.ts`, directory), 'utf8');
  originals.set(group, source);
  const ast = ts.createSourceFile(`${group}.ts`, source, ts.ScriptTarget.Latest, true);
  for (const node of ast.statements) {
    if (!ts.isClassDeclaration(node)) continue;
    const fields = node.members.filter(
      (member) =>
        ts.isPropertyDeclaration(member) &&
        member.initializer &&
        ts.isStringLiteral(member.initializer),
    );
    const keywords = fields.map((field) => {
      const text = field.initializer.text,
        split = text.indexOf(':');
      const keyword = text.slice(split + 1, -1),
        name = field.name.getText(ast);
      return {
        name,
        keyword,
        text,
        start: field.getStart(ast),
        end: field.end,
        property: text.slice(0, split),
      };
    });
    const className = node.name.text;
    properties.push({
      className,
      group,
      property: className[0].toLowerCase() + className.slice(1, -3),
      keywords,
    });
  }
}
assert.equal(properties.length, 502);
const spellings = new Map();
for (const field of properties.flatMap((property) => property.keywords)) {
  if (!spellings.has(field.name)) spellings.set(field.name, new Set());
  spellings.get(field.name).add(field.keyword);
}
for (const field of properties.flatMap((property) => property.keywords)) {
  if (kebab(field.name) === field.keyword) continue;
  if (spellings.get(field.name).size === 1) exceptions[field.name] = field.keyword;
  else (propertyExceptions[field.property] ??= {})[field.name] = field.keyword;
}
export const summary = {
  properties: properties.length,
  keywords: properties.reduce((n, p) => n + p.keywords.length, 0),
  uniqueKeywords: new Set(properties.flatMap((p) => p.keywords.map((k) => k.keyword))).size,
  exceptions,
  propertyExceptions,
};

const proxySupport = `
const keywordExceptions: Record<string,string> = ${JSON.stringify(exceptions)};
const propertyKeywordExceptions: Record<string,Record<string,string>> = ${JSON.stringify(propertyExceptions)};
const cache = new WeakMap<object, Map<string,string>>();
const keywordHandler: ProxyHandler<object> = {
  get(target, key, receiver) {
    if (typeof key !== 'string' || Reflect.has(target,key)) return Reflect.get(target,key,receiver);
    let values=cache.get(target);
    if (!values) { values=new Map(); cache.set(target,values); }
    if (!values.has(key)) {
      const property=Reflect.get(target,'name');
      const keyword=propertyKeywordExceptions[property]?.[key] ?? keywordExceptions[key] ?? key.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
      values.set(key, property + ':' + keyword + ';');
    }
    return values.get(key);
  }
};
`;

/** 只改内存中的研究副本；正式生成器和 generated 文件保持原状。 */
export function keywordVariant(variant) {
  assert.ok(['literal', 'concat', 'shared', 'getter', 'proxy'].includes(variant));
  return {
    name: `keywords-${variant}`,
    setup(build) {
      build.onResolve(
        { filter: /^@zerodep-css\/core(?:\/(browser|bindings|server))?$/ },
        ({ path }) => ({
          path: fileURLToPath(
            new URL(`../../core/src/${path.split('/')[2] ?? 'index'}.ts`, import.meta.url),
          ),
        }),
      );
      build.onLoad(
        { filter: /[\\/]core[\\/]src[\\/]generated[\\/][^\\/]+\.ts$/ },
        async ({ path }) => {
          const group = path.replace(/\\/g, '/').split('/').at(-1).slice(0, -3);
          let contents = originals.get(group) ?? (await readFile(path, 'utf8'));
          if (variant === 'shared' && group === 'base') {
            const declaration = 'export class CssProperty<T> {';
            contents = contents.replace(
              declaration,
              declaration +
                '\n' +
                Object.keys(globals)
                  .map((name) => `readonly ${name}: string;`)
                  .join('\n'),
            );
            const marker = 'this.name = name;';
            assert.equal(contents.split(marker).length, 2);
            contents = contents.replace(
              marker,
              marker +
                Object.entries(globals)
                  .map(
                    ([name, value]) =>
                      `this.${name} = name + ${JSON.stringify(':' + value + ';')};`,
                  )
                  .join(''),
            );
          } else if (variant === 'proxy' && group === 'base') {
            const marker = 'this.name = name;';
            assert.equal(contents.split(marker).length, 2);
            contents =
              proxySupport +
              contents.replace(marker, marker + ' return new Proxy(this,keywordHandler);');
          } else if (variant !== 'literal' && originals.has(group)) {
            const changes = properties
              .filter((p) => p.group === group)
              .flatMap((p) => p.keywords)
              .sort((a, b) => a.start - b.start);
            const pieces = [];
            let cursor = 0;
            for (const field of changes) {
              const expression = `this.name + ${JSON.stringify(':' + field.keyword + ';')}`;
              const text =
                variant === 'shared' && Object.hasOwn(globals, field.name)
                  ? ''
                  : variant === 'concat' || variant === 'shared'
                    ? `readonly ${field.name} = ${expression};`
                    : variant === 'getter'
                      ? `get ${field.name}() { return ${expression}; }`
                      : `declare readonly ${field.name}: ${JSON.stringify(field.text)};`;
              pieces.push(contents.slice(cursor, field.start), text);
              cursor = field.end;
            }
            contents = pieces.join('') + contents.slice(cursor);
          }
          return { contents, loader: 'ts' };
        },
      );
    },
  };
}
