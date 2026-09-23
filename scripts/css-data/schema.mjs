import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import ts from 'typescript';
import * as tree from 'css-tree';
import webref from '@webref/css';
import { createGrammar } from './grammar.mjs';
import {
  cssGlobals,
  keywordAlias,
  maximumHelperArguments,
  propertyAlias,
  queryContexts,
  sourceVersions,
  referenceExceptions,
  animationProperties,
} from './policy.mjs';

const require = createRequire(import.meta.url);
export async function createSchema() {
  for (const [name, version] of Object.entries(sourceVersions))
    assert.equal(require(name + '/package.json').version, version, `Unexpected ${name} version`);
  const spec = await webref.index();
  const legacy = tree.lexer.dump();
  const data = {
    ...spec,
    properties: {
      ...Object.fromEntries(
        Object.entries(legacy.properties).map(([name, syntax]) => [name, { name, syntax }]),
      ),
      ...spec.properties,
    },
    types: {
      ...Object.fromEntries(
        Object.entries(legacy.types).map(([name, syntax]) => [name, { name, syntax }]),
      ),
      ...spec.types,
    },
  };
  const grammar = createGrammar(data);
  const entry = join(dirname(require.resolve('csstype/package.json')), 'index.d.ts');
  const program = ts.createProgram([entry], { skipLibCheck: true, strict: true });
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(entry);
  const declaration = (name) => source.statements.find((n) => n.name?.text === name);
  const members = (name) =>
    checker.getPropertiesOfType(checker.getTypeAtLocation(declaration(name)));
  const literals = (type) =>
    type.isUnion() ? type.types.flatMap(literals) : type.isStringLiteral() ? [type.value] : [];
  const upstream = new Map(
    members('Properties').map((p) => [
      p.name,
      literals(checker.getTypeOfSymbolAtLocation(p, declaration('Properties'))),
    ]),
  );
  const categories = Object.fromEntries(
    ['StandardProperties', 'VendorProperties', 'ObsoleteProperties', 'SvgProperties'].map(
      (name) => [name, new Set(members(name).map((p) => p.name))],
    ),
  );
  const names = new Map();
  for (const feature of Object.values(spec.properties)) {
    for (const name of [feature.name, ...(feature.styleDeclaration ?? [])])
      names.set(name, feature.name);
  }
  const records = new Map();
  for (const name of upstream.keys()) {
    const cssName =
      names.get(name) ??
      name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()).replace(/^ms-/, '-ms-');
    records.set(name, { name, cssName, upstream: true });
  }
  for (const feature of Object.values(spec.properties)) {
    if (feature.name.startsWith('--')) continue;
    const name = propertyAlias(feature.name);
    if (!records.has(name)) records.set(name, { name, cssName: feature.name, upstream: false });
  }

  const units = { ...tree.lexer.units, percentage: ['%'] };
  const helperCache = new Map();
  function checks(syntax, tokens, context) {
    const matches = grammar.match(syntax, tokens, context);
    const valueIndexes = tokens.flatMap((t, i) => (t.kind === 'comma' ? [] : [i]));
    return [
      ...new Map(
        matches.map((m) => {
          const items = valueIndexes.map((index) => {
            const result = {};
            for (const check of m.checks.filter((c) => c.index === index)) {
              if (check.min !== undefined)
                result.min = Math.max(result.min ?? -Infinity, check.min);
              if (check.max !== undefined) result.max = Math.min(result.max ?? Infinity, check.max);
              if (check.integer) result.integer = true;
            }
            return result;
          });
          return [JSON.stringify(items), items];
        }),
      ).values(),
    ];
  }
  function helpers(syntax, context) {
    if (!syntax) return [];
    const key = syntax + ':' + context.join('|');
    if (helperCache.has(key)) return helperCache.get(key);
    const result = [];
    for (const family of Object.keys(units)) {
      const variants = [];
      for (const separator of [' ', ',']) {
        const arities = {};
        for (let count = 1; count <= maximumHelperArguments; count++) {
          const tokens = Array.from({ length: count }, () => ({ kind: family })).flatMap((t, i) =>
            separator === ',' && i ? [{ kind: 'comma' }, t] : [t],
          );
          const alternatives = checks(syntax, tokens, context);
          if (alternatives.length) arities[count] = alternatives;
        }
        if (Object.keys(arities).length) variants.push({ family, separator, arities });
      }
      const space = variants.find((v) => v.separator === ' ');
      const comma = variants.find((v) => v.separator === ',');
      if (comma && Object.keys(comma.arities).some((n) => Number(n) > 1)) {
        if (space && Object.keys(space.arities).some((n) => Number(n) > 1))
          result.push({ ...space, suffix: '' }, { ...comma, suffix: 'List' });
        else result.push({ ...comma, suffix: '' });
      } else if (space) result.push({ ...space, suffix: '' });
    }
    helperCache.set(key, result);
    return result;
  }
  function metadata(cssName, syntax, candidates, context, globals = true) {
    const accepted = new Set(globals ? cssGlobals : []);
    const all = new Set([...candidates, ...(syntax ? grammar.keywords(syntax, context) : [])]);
    for (const value of all) {
      if (globals && cssGlobals.includes(value)) continue;
      if (
        (!syntax && candidates.includes(value)) ||
        (syntax && grammar.match(syntax, [{ kind: 'keyword', value }], context).length)
      )
        accepted.add(value);
    }
    const keywords = {};
    for (const value of [...accepted].sort()) {
      if (!/^-?[a-z][a-z0-9-]*$/i.test(value)) continue;
      const alias = keywordAlias(value);
      assert(
        !Object.hasOwn(keywords, alias) || keywords[alias] === value,
        `Keyword alias collision: ${cssName}.${alias}`,
      );
      assert(!['raw', 'token', 'then'].includes(alias), `Reserved keyword: ${alias}`);
      keywords[alias] = value;
    }
    const unitHelpers = helpers(syntax, context);
    for (const helper of unitHelpers)
      for (const unit of units[helper.family]) {
        const method = (unit === '%' ? 'pct' : unit) + helper.suffix;
        assert(!Object.hasOwn(keywords, method), `Unit/keyword collision: ${cssName}.${method}`);
      }
    const numbers = syntax ? checks(syntax, [{ kind: 'number' }], context) : [];
    // <declaration-value> 是任意合法值 token 序列，单个有限数字也是有效标量。
    if (!numbers.length && /^<declaration-value>\??$/.test(syntax?.trim() ?? ''))
      numbers.push([{}]);
    return {
      keywords,
      helpers: unitHelpers,
      numbers,
      zero: unitHelpers.some(
        (h) =>
          h.family === 'length' &&
          h.arities[1]?.some(
            (plan) => (plan[0].min ?? -Infinity) <= 0 && (plan[0].max ?? Infinity) >= 0,
          ),
      ),
    };
  }
  const properties = [];
  for (const record of [...records.values()].sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const feature = spec.properties[record.cssName];
    const syntax = feature?.syntax ?? legacy.properties[record.cssName] ?? null;
    const grammarSource = feature?.syntax
      ? 'webref'
      : syntax
        ? 'csstree-compat'
        : 'upstream-keywords-only';
    properties.push({
      ...record,
      syntax,
      grammarSource,
      availability: record.upstream ? 'upstream-catalogued' : 'spec-only-not-browser-verified',
      categories: Object.entries(categories)
        .filter(([, set]) => set.has(record.name))
        .map(([name]) => name),
      href: feature?.href ?? `https://developer.mozilla.org/docs/Web/CSS/${record.cssName}`,
      initial: feature?.initial ?? null,
      ...metadata(record.cssName, syntax, upstream.get(record.name) ?? [], [record.cssName]),
    });
  }
  const descriptors = {};
  const queries = {};
  for (const [rule, feature] of Object.entries(spec.atrules)) {
    const entries = Object.values(feature.descriptors ?? {});
    if (!entries.length) continue;
    const target = queryContexts.has(rule) ? queries : descriptors;
    target[rule] = entries.map((d) => ({
      name: propertyAlias(d.name),
      cssName: d.name,
      syntax: d.syntax ?? null,
      href: d.href,
      ...metadata(d.name, d.syntax, [], [rule, d.name], false),
    }));
  }
  const simplePseudos = new Set(literals(checker.getTypeAtLocation(declaration('SimplePseudos'))));
  const functionalPseudos = new Set(
    literals(checker.getTypeAtLocation(declaration('AdvancedPseudos'))),
  );
  for (const f of Object.values(spec.selectors)) {
    if (/^::?[\w-]+$/.test(f.name)) simplePseudos.add(f.name);
    if (/^::?[\w-]+\(\)$/.test(f.name)) functionalPseudos.add(f.name.slice(0, -2));
  }
  // 对每条来源语法建账：没有形式语法和未解析引用都有显式状态。
  const inventory = [];
  const unresolved = [];
  for (const [kind, table] of Object.entries(spec))
    for (const [id, feature] of Object.entries(table)) {
      const item = {
        kind,
        id,
        href: feature.href,
        status: feature.syntax ? 'syntax-parsed' : 'prose-or-container',
        unresolved: [],
      };
      if (feature.syntax) {
        const ast = grammar.parse(feature.syntax);
        tree.definitionSyntax.walk(ast, (node) => {
          if (!['Type', 'Property'].includes(node.type)) return;
          if (grammar.reference(node.type, node.name, [feature.name, ...(feature.for ?? [])]))
            return;
          const candidates = Object.values(
            node.name.endsWith('()') ? spec.functions : spec.types,
          ).filter((f) => f.name === node.name);
          const resolution = candidates.length
            ? 'scoped-reference'
            : referenceExceptions[node.name]
              ? 'documented-upstream-gap'
              : 'unclassified';
          const missing = { from: `${kind}:${id}`, reference: node.name, resolution };
          item.unresolved.push(missing);
          unresolved.push(missing);
          assert(
            resolution !== 'unclassified',
            `Unclassified reference: ${JSON.stringify(missing)}`,
          );
        });
      }
      inventory.push(item);
    }
  return {
    version: 1,
    // 只统一规范明确列出的同义属性，不猜测厂商前缀或 raw 简写值。
    propertyAliases: Object.fromEntries(
      Object.values(spec.properties)
        .filter((property) => property.legacyAliasOf)
        .sort((a, b) => a.name.localeCompare(b.name, 'en'))
        .map((property) => [property.name, property.legacyAliasOf]),
    ),
    sources: sourceVersions,
    policy: {
      maximumHelperArguments,
      propertyApi: 'noncallable-token-raw-v1',
      animationProperties,
      unknownValue: 'explicit-raw',
      browserSupport: 'not-inferred-from-spec',
    },
    units,
    properties,
    descriptors,
    queries,
    simplePseudos: [...simplePseudos].sort(),
    functionalPseudos: [...functionalPseudos].sort(),
    inventory,
    unresolved,
    referenceExceptions,
    exclusions: Object.values(spec.properties)
      .filter((p) => p.name.startsWith('--'))
      .map((p) => ({
        name: p.name,
        reason:
          'Custom-property pattern: represented by custom(name, value), not a fixed property member.',
      })),
  };
}
