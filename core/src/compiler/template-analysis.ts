import ts from 'typescript';
import { unitSuffix } from '../generated/base.js';
import { selectorShortcuts } from '../selectors.js';
const selectors = new Set(['_selector', ...Object.keys(selectorShortcuts)]);

// 以下方法表仅用于模板缓存的纯度检查，不再决定变量绑定。
const methods = new Set([
  'raw',
  'rgb',
  'hsl',
  'oklch',
  'oklab',
  'calc',
  'min',
  'max',
  'clamp',
  ...Object.keys(unitSuffix),
]);
export const reactive = new Set([
  'ref',
  'shallowRef',
  'reactive',
  'shallowReactive',
  'computed',
  'toRef',
  'toRefs',
  'defineProps',
  'withDefaults',
  '$state',
  '$derived',
  '$props',
]);

interface TemplateAnalysis {
  expression: ts.SourceFile;
  locals: readonly string[];
  mutable: ReadonlySet<string>;
  stableReactive: ReadonlySet<string>;
  dynamic: ReadonlySet<string>;
  api(node: ts.Expression, local: Set<string>): string | undefined;
}
function safe(node: ts.Node): boolean {
  if (ts.isAwaitExpression(node) || ts.isYieldExpression(node) || ts.isPostfixUnaryExpression(node))
    return false;
  if (
    ts.isPrefixUnaryExpression(node) &&
    [ts.SyntaxKind.PlusPlusToken, ts.SyntaxKind.MinusMinusToken].includes(node.operator)
  )
    return false;
  if (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind >= ts.SyntaxKind.FirstAssignment &&
    node.operatorToken.kind <= ts.SyntaxKind.LastAssignment
  )
    return false;
  return !ts.forEachChild(node, (child) => !safe(child) || undefined);
}

/** 只分析模板缓存的安全性；不决定是否执行 bx 绑定。 */
export function analyzeTemplate(options: TemplateAnalysis): string | undefined {
  const { expression: sf, locals, mutable, stableReactive, dynamic, api } = options;
  const statement = sf.statements[0];
  if (!statement || !ts.isExpressionStatement(statement)) return;
  const local = new Set(locals),
    guards = new Set<string>();
  const guardValue = (name: string) =>
    guards.add(
      stableReactive.has(name) && !local.has(name) ? `[() => ${name}, true]` : `[${name}]`,
    );
  let found = false;
  function visit(node: ts.Node, part = false): boolean {
    if (
      ts.isAsExpression(node) ||
      ts.isTypeAssertionExpression(node) ||
      ts.isSatisfiesExpression(node) ||
      ts.isNonNullExpression(node) ||
      ts.isParenthesizedExpression(node)
    )
      return visit(node.expression, part);
    if (ts.isPropertyAssignment(node))
      return (
        (!ts.isComputedPropertyName(node.name) || visit(node.name.expression, part)) &&
        visit(node.initializer, part)
      );
    if (
      !safe(node) ||
      ts.isSpreadElement(node) ||
      ts.isSpreadAssignment(node) ||
      ts.isTypeOfExpression(node) ||
      ts.isFunctionLike(node) ||
      ts.isNewExpression(node)
    )
      return false;
    if (ts.isCallExpression(node)) {
      if (api(node.expression, local) === 'bx') return true;
      if (api(node.expression, local) === 'css') {
        found = true;
        return node.arguments.every((arg) => visit(arg, true));
      }
      if (!part || !ts.isPropertyAccessExpression(node.expression)) return false;
      const access = node.expression;
      if (ts.isIdentifier(access.expression) && selectors.has(access.name.text)) {
        guards.add(`[${access.expression.text}, "", ${JSON.stringify(access.name.text)}]`);
        return node.arguments.every((arg) => visit(arg, true));
      }
      if (
        ts.isPropertyAccessExpression(access.expression) &&
        ts.isIdentifier(access.expression.expression) &&
        methods.has(access.name.text)
      ) {
        guards.add(
          `[${access.expression.expression.text}, ${JSON.stringify(access.expression.name.text)}, ${JSON.stringify(access.name.text)}]`,
        );
        return node.arguments.every((arg) => visit(arg));
      }
      return false;
    }
    if (
      part &&
      ts.isPropertyAccessExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression)
    ) {
      guards.add(
        `[${node.expression.expression.text}, ${JSON.stringify(node.expression.name.text)}, ${JSON.stringify(node.name.text)}]`,
      );
      return true;
    }
    if (ts.isConditionalExpression(node))
      return visit(node.condition) && visit(node.whenTrue, part) && visit(node.whenFalse, part);
    if (ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)) {
      let root: ts.Expression = node.expression;
      while (ts.isPropertyAccessExpression(root) || ts.isElementAccessExpression(root))
        root = root.expression;
      if (ts.isIdentifier(root)) guardValue(root.text);
      return (
        visit(node.expression) &&
        (!ts.isElementAccessExpression(node) || visit(node.argumentExpression))
      );
    }
    if (ts.isIdentifier(node)) {
      guardValue(node.text);
      return !mutable.has(node.text) || dynamic.has(node.text) || local.has(node.text);
    }
    return !ts.forEachChild(node, (child) => !visit(child, part) || undefined);
  }
  if (!visit(statement.expression) || !found) return;
  return `[${[...guards].join(', ')}]`;
}
