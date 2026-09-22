import ts from 'typescript';
import { capturedInside } from './scope.js';
import {
  helperGroups,
  keywordGroups,
  propertyMetadata,
  unitFamilies,
} from '../../core/src/generated/metadata.js';
import type { NumericAlternatives } from '../../core/src/metadata-types.js';

export interface AutomaticDeclaration {
  call: ts.CallExpression;
  property: ts.PropertyAccessExpression;
  unit: string;
  alternatives: NumericAlternatives;
  separator: string;
}

function unwrap(value: ts.Expression): ts.Expression {
  while (
    ts.isParenthesizedExpression(value) ||
    ts.isAsExpression(value) ||
    ts.isNonNullExpression(value) ||
    ts.isSatisfiesExpression(value)
  )
    value = value.expression;
  return value;
}
function literal(value: ts.Expression): boolean {
  value = unwrap(value);
  return (
    ts.isNumericLiteral(value) ||
    ts.isStringLiteralLike(value) ||
    [ts.SyntaxKind.TrueKeyword, ts.SyntaxKind.FalseKeyword, ts.SyntaxKind.NullKeyword].includes(
      value.kind,
    ) ||
    (ts.isPrefixUnaryExpression(value) &&
      [ts.SyntaxKind.PlusToken, ts.SyntaxKind.MinusToken].includes(value.operator) &&
      literal(value.operand))
  );
}
function read(value: ts.Expression, callback: ts.ArrowFunction | ts.FunctionExpression): boolean {
  value = unwrap(value);
  if (literal(value)) return true;
  if (ts.isIdentifier(value)) return !capturedInside(value, callback);
  if (ts.isPropertyAccessExpression(value)) return read(value.expression, callback);
  if (ts.isElementAccessExpression(value))
    return read(value.expression, callback) && read(value.argumentExpression, callback);
  if (ts.isPrefixUnaryExpression(value))
    return (
      ![ts.SyntaxKind.PlusPlusToken, ts.SyntaxKind.MinusMinusToken].includes(value.operator) &&
      read(value.operand, callback)
    );
  if (ts.isBinaryExpression(value))
    return (
      value.operatorToken.kind < ts.SyntaxKind.FirstAssignment &&
      read(value.left, callback) &&
      read(value.right, callback)
    );
  if (ts.isConditionalExpression(value))
    return (
      read(value.condition, callback) &&
      read(value.whenTrue, callback) &&
      read(value.whenFalse, callback)
    );
  return false;
}

/**
 * 只拆分可以证明没有结构变化的根声明。未知方法、局部写入和控制流整体回退，
 * 避免把原来处于守卫之后的读取提升到独立的响应式 getter。
 */
export function automaticDeclarations(
  callback: ts.ArrowFunction | ts.FunctionExpression,
): AutomaticDeclaration[] {
  const builder = callback.parameters[0]?.name;
  if (!builder || !ts.isIdentifier(builder) || !ts.isBlock(callback.body)) return [];
  const declarations: AutomaticDeclaration[] = [];
  for (const statement of callback.body.statements) {
    if (ts.isEmptyStatement(statement)) continue;
    if (!ts.isExpressionStatement(statement)) return [];
    const expression = unwrap(statement.expression);
    const member = ts.isCallExpression(expression) ? expression.expression : expression;
    if (!ts.isPropertyAccessExpression(member) || !ts.isPropertyAccessExpression(member.expression))
      return [];
    const property = member.expression;
    if (!ts.isIdentifier(property.expression) || property.expression.text !== builder.text)
      return [];
    const meta = propertyMetadata[property.name.text];
    if (!meta || meta.resource) return [];
    if (!ts.isCallExpression(expression)) {
      if (!Object.hasOwn(keywordGroups[meta.keywords]!, member.name.text)) return [];
      continue;
    }
    const args = expression.arguments;
    if (member.name.text === 'raw' || member.name.text === 'token') {
      if (args.length !== 1 || !literal(args[0]!)) return [];
      continue;
    }
    let matched = false;
    for (const plan of helperGroups[meta.helpers]!) {
      for (const unit of unitFamilies[plan.family]!) {
        if ((unit === '%' ? 'pct' : unit) + plan.suffix !== member.name.text) continue;
        const alternatives = plan.arities[args.length];
        if (!alternatives || !args.every((arg) => read(arg, callback))) return [];
        matched = true;
        if (args.some((arg) => !literal(arg)))
          declarations.push({
            call: expression,
            property,
            unit,
            alternatives,
            separator: plan.separator === ',' ? ', ' : ' ',
          });
      }
    }
    if (!matched) return [];
  }
  return declarations;
}
