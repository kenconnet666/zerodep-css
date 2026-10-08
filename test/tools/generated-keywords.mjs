import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const directory = new URL('../../core/src/generated/', import.meta.url);
const parse = (name, text) => ts.createSourceFile(name, text, ts.ScriptTarget.Latest, true);
const sets = new Map();
const data = parse(
  'keyword-sets.ts',
  await readFile(new URL('keyword-sets.ts', directory), 'utf8'),
);
for (const statement of data.statements) {
  if (!ts.isVariableStatement(statement)) continue;
  for (const declaration of statement.declarationList.declarations) {
    let value = declaration.initializer;
    while (value && (ts.isAsExpression(value) || ts.isParenthesizedExpression(value)))
      value = value.expression;
    assert(value && ts.isObjectLiteralExpression(value));
    sets.set(
      declaration.name.text,
      value.properties.map((member) => {
        assert(ts.isPropertyAssignment(member) && ts.isStringLiteral(member.initializer));
        return { name: member.name.text, keyword: member.initializer.text };
      }),
    );
  }
}

/** 研究探针读取生成数据，不执行用户作者；保留旧表示的比较基线与全部关键字断言。 */
export const generatedSources = new Map();
export const generatedProperties = [];
for (const group of ['a', 'b', 'c-f', 'g-l', 'm-o', 'p-r', 's-t', 'u-z']) {
  const source = await readFile(new URL(group + '.ts', directory), 'utf8');
  generatedSources.set(group, source);
  const ast = parse(group + '.ts', source);
  for (const node of ast.statements) {
    if (!ts.isClassDeclaration(node) || !node.name?.text.endsWith('CssRuntime')) continue;
    const constructor = node.members.find(ts.isConstructorDeclaration);
    const initialize = constructor.body.statements.find(
      (statement) =>
        ts.isExpressionStatement(statement) &&
        ts.isCallExpression(statement.expression) &&
        ts.isIdentifier(statement.expression.expression) &&
        statement.expression.expression.text === 'initializeKeywordDeclarations',
    );
    assert(initialize);
    const [, cssName, table] = initialize.expression.arguments;
    assert(ts.isStringLiteral(cssName) && ts.isIdentifier(table) && sets.has(table.text));
    const className = node.name.text.replace(/Runtime$/, '');
    generatedProperties.push({
      group,
      className,
      runtimeName: node.name.text,
      property: className[0].toLowerCase() + className.slice(1, -3),
      cssName: cssName.text,
      keywords: sets
        .get(table.text)
        .map((field) => ({ ...field, text: `${cssName.text}:${field.keyword};` })),
      bodyStart: node.members.pos,
      initializeStart: initialize.getStart(ast),
      initializeEnd: initialize.end,
    });
  }
}
assert.equal(generatedProperties.length, 502);
assert.equal(
  generatedProperties.reduce((sum, property) => sum + property.keywords.length, 0),
  12586,
);
