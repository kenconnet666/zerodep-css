import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { createRuleRegistry } from '../../core/test/runtime/runtime.mjs';
import { selectorShortcuts } from '../../core/src/selectors.ts';

// 只验证固定表达式的可提取性；产品编译器还需确认符号来源和主题覆盖。
const generated = resolve(dirname(fileURLToPath(import.meta.url)), '../../core/src/generated');
const parse = (file, source) => ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
const author = parse('author.ts', await readFile(join(generated, 'author.ts'), 'utf8'));
const fields = new Map();
for (const declaration of author.statements) {
  if (!ts.isClassDeclaration(declaration) || declaration.name?.text !== 'Css') continue;
  for (const member of declaration.members) {
    if (ts.isPropertyDeclaration(member) && ts.isIdentifier(member.name) && member.type)
      fields.set(member.name.text, member.type.getText(author).split('.').at(-1));
  }
}

const keywords = new Map();
for (const file of await readdir(generated)) {
  if (!file.endsWith('.ts') || file === 'author.ts' || file === 'base.ts') continue;
  const source = parse(file, await readFile(join(generated, file), 'utf8'));
  for (const declaration of source.statements) {
    if (!ts.isClassDeclaration(declaration) || !declaration.name) continue;
    const values = new Map();
    for (const member of declaration.members) {
      if (
        ts.isPropertyDeclaration(member) &&
        ts.isIdentifier(member.name) &&
        member.initializer &&
        ts.isStringLiteral(member.initializer)
      )
        values.set(member.name.text, member.initializer.text);
    }
    keywords.set(declaration.name.text, values);
  }
}

const maxVariants = 8;
function combinations(parts) {
  let result = [''];
  for (const options of parts) {
    if (!options || result.length * options.length > maxVariants) return null;
    result = result.flatMap((prefix) => options.map((value) => prefix + value));
  }
  return result;
}

function staticValues(expression) {
  if (ts.isStringLiteral(expression)) return [expression.text];
  if (ts.isParenthesizedExpression(expression)) return staticValues(expression.expression);
  if (ts.isConditionalExpression(expression)) {
    const yes = staticValues(expression.whenTrue);
    const no = staticValues(expression.whenFalse);
    return yes && no && yes.length + no.length <= maxVariants ? [...yes, ...no] : null;
  }
  if (
    ts.isPropertyAccessExpression(expression) &&
    ts.isPropertyAccessExpression(expression.expression) &&
    ts.isIdentifier(expression.expression.expression) &&
    expression.expression.expression.text === 's'
  ) {
    const property = expression.expression.name.text;
    const value = keywords.get(fields.get(property))?.get(expression.name.text);
    return value === undefined ? null : [value];
  }
  if (
    ts.isCallExpression(expression) &&
    ts.isPropertyAccessExpression(expression.expression) &&
    ts.isIdentifier(expression.expression.expression) &&
    expression.expression.expression.text === 's'
  ) {
    const method = expression.expression.name.text;
    if (method !== '_selector' && !Object.hasOwn(selectorShortcuts, method)) return null;
    const args = expression.arguments.map(staticValues);
    const selectors = method === '_selector' ? args.shift() : [selectorShortcuts[method]];
    const parts = args;
    const bodies = combinations(parts);
    return selectors && bodies
      ? combinations([selectors, bodies.map((body) => `{${body}}`)])
      : null;
  }
  return null;
}

function staticBodies(expression) {
  if (
    !ts.isCallExpression(expression) ||
    !ts.isIdentifier(expression.expression) ||
    expression.expression.text !== 'css'
  )
    return null;
  return combinations(expression.arguments.map(staticValues));
}

const cases = [
  {
    code: 'css(s.display.flex, enabled ? s.color.red : s.color.blue);',
    expected: [['display:flex;color:red;', 'display:flex;color:blue;']],
  },
  {
    code: 'css(s.display.flex, s._hover(s.color.blue));',
    expected: [['display:flex;&:hover{color:blue;}']],
  },
  {
    code: "switch (size) { case 'small': css(s.display.flex, s.color.red); break; default: css(s.width.px(width)); }",
    expected: [['display:flex;color:red;'], null],
  },
  { code: 'css(s.width.px(width));', expected: [null] },
];
const registry = createRuleRegistry(() => {});
for (const { code, expected } of cases) {
  const source = parse('example.ts', code);
  const calls = [];
  function visit(item) {
    if (
      ts.isCallExpression(item) &&
      ts.isIdentifier(item.expression) &&
      item.expression.text === 'css'
    ) {
      const bodies = staticBodies(item);
      calls.push({
        expression: item.getText(source),
        rules: bodies?.map((body) => ({ className: registry.css(body), body })) ?? null,
      });
    }
    ts.forEachChild(item, visit);
  }
  visit(source);
  assert.deepEqual(
    calls.map(({ rules }) => rules?.map(({ body }) => body) ?? null),
    expected,
  );
  console.log(JSON.stringify({ code, calls }));
}
