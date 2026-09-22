import ts from 'typescript';
import { capturedInside } from './scope.js';
import {
  helperGroups,
  keywordGroups,
  propertyMetadata,
  unitFamilies,
} from '../../core/src/generated/metadata.js';
import type { NumericAlternatives } from '../../core/src/metadata-types.js';
import type { DeclarationFormat } from '../../core/src/binding.js';
import { portableUnits } from '../../core/src/binding-policy.js';

interface Declaration {
  call: ts.CallExpression;
  property: ts.PropertyAccessExpression;
}
export type AutomaticDeclaration = Declaration &
  (
    | { kind: 'unit'; unit: string; alternatives: NumericAlternatives; separator: string }
    | { kind: 'value'; format: DeclarationFormat }
  );

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
const unknownValue = Symbol('unknown');
function constant(value: ts.Expression): string | number | boolean | null | typeof unknownValue {
  value = unwrap(value);
  if (ts.isStringLiteralLike(value)) return value.text;
  if (ts.isNumericLiteral(value)) return Number(value.text);
  if (value.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (value.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (value.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isPrefixUnaryExpression(value)) {
    const operand = constant(value.operand);
    if (operand === unknownValue) return unknownValue;
    if (value.operator === ts.SyntaxKind.ExclamationToken) return !operand;
    if (typeof operand === 'number') {
      if (value.operator === ts.SyntaxKind.MinusToken) return -operand;
      if (value.operator === ts.SyntaxKind.PlusToken) return operand;
    }
  }
  return unknownValue;
}
const structures: Readonly<Record<string, number>> = {
  hover: 0,
  focusVisible: 0,
  focus: 0,
  focusWithin: 0,
  active: 0,
  disabled: 0,
  before: 0,
  after: 0,
  startingStyle: 0,
  important: 0,
  selector: 1,
  pseudo: 1,
  media: 1,
  supports: 1,
  containerQuery: 1,
  layer: 1,
  scope: 1,
  pseudoFunction: 2,
};

function ownedSelector(value: ts.Expression): boolean {
  const selector = unwrap(value);
  if (!ts.isStringLiteralLike(selector)) return false;
  const text = selector.text.trim();
  // 只证明一条同宿主路径；后代也可能被嵌套实例的同名变量遮蔽，不能盲目提升。
  return text.startsWith('&') && !/[&,+~|\\\s>]/.test(text.slice(1)) && !text.includes('::');
}
function metadata(value: ts.Expression, builder: string): boolean {
  if (ts.isIdentifier(value)) return value.text === builder;
  if (
    !ts.isCallExpression(value) ||
    !ts.isPropertyAccessExpression(value.expression) ||
    value.arguments.length !== 1
  )
    return false;
  const member = value.expression;
  const argument = unwrap(value.arguments[0]!);
  if (!metadata(member.expression, builder)) return false;
  if (member.name.text === 'name') return ts.isStringLiteralLike(argument);
  return (
    member.name.text === 'config' &&
    ts.isObjectLiteralExpression(argument) &&
    argument.properties.every(
      (property) =>
        ts.isPropertyAssignment(property) &&
        (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
        property.name.text === 'debug' &&
        [ts.SyntaxKind.TrueKeyword, ts.SyntaxKind.FalseKeyword].includes(
          unwrap(property.initializer).kind,
        ),
    )
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
  if (ts.isTemplateExpression(value))
    return value.templateSpans.every((span) => read(span.expression, callback));
  return false;
}

/**
 * 只拆分可以证明没有结构变化的根声明。未知方法、局部写入和控制流整体回退，
 * 避免把原来处于守卫之后的读取提升到独立的响应式 getter。
 */
export function automaticDeclarations(
  callback: ts.ArrowFunction | ts.FunctionExpression,
): AutomaticDeclaration[] | undefined {
  const declarations: AutomaticDeclaration[] = [];
  function statements(items: readonly ts.Statement[], builder: string): boolean {
    for (const statement of items) if (!visit(statement, builder)) return false;
    return true;
  }
  function body(fn: ts.ArrowFunction | ts.FunctionExpression): boolean {
    const parameter = fn.parameters[0];
    const builder = parameter?.name;
    // 参数默认值也可能有副作用；异步/生成器交回运行时保留原有诊断。
    return (
      fn.parameters.length === 1 &&
      !parameter?.initializer &&
      !parameter?.dotDotDotToken &&
      !fn.asteriskToken &&
      !fn.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.AsyncKeyword) &&
      !!builder &&
      ts.isIdentifier(builder) &&
      ts.isBlock(fn.body) &&
      statements(fn.body.statements, builder.text)
    );
  }
  function visit(statement: ts.Statement, builder: string): boolean {
    if (ts.isEmptyStatement(statement)) return true;
    if (ts.isBlock(statement)) return statements(statement.statements, builder);
    if (ts.isIfStatement(statement)) {
      const condition = constant(statement.expression);
      if (condition === unknownValue) return false;
      const selected = condition ? statement.thenStatement : statement.elseStatement;
      return !selected || visit(selected, builder);
    }
    if (ts.isSwitchStatement(statement)) {
      const value = constant(statement.expression);
      if (value === unknownValue) return false;
      let selected = -1,
        fallback = -1;
      const clauses = statement.caseBlock.clauses;
      for (let index = 0; index < clauses.length; index++) {
        const clause = clauses[index]!;
        if (ts.isDefaultClause(clause)) {
          fallback = index;
          continue;
        }
        const label = constant(clause.expression);
        if (label === unknownValue) return false;
        if (label === value && selected === -1) selected = index;
      }
      if (selected === -1) selected = fallback;
      if (selected === -1) return true;
      for (const clause of clauses.slice(selected))
        for (const child of clause.statements) {
          if (ts.isBreakStatement(child) && !child.label) return true;
          if (!visit(child, builder)) return false;
        }
      return true;
    }
    if (!ts.isExpressionStatement(statement)) return false;
    const expression = unwrap(statement.expression);
    if (ts.isCallExpression(expression) && metadata(expression, builder)) return true;
    const member = ts.isCallExpression(expression) ? expression.expression : expression;
    if (!ts.isPropertyAccessExpression(member)) return false;
    if (
      ts.isIdentifier(member.expression) &&
      member.expression.text === builder &&
      ts.isCallExpression(expression)
    ) {
      const count = structures[member.name.text];
      if (member.name.text === 'pseudoFunction' && expression.arguments[0]) {
        const name = unwrap(expression.arguments[0]);
        if (ts.isStringLiteralLike(name) && name.text.startsWith('::')) return false;
      }
      if (
        member.name.text === 'selector' &&
        (!expression.arguments[0] || !ownedSelector(expression.arguments[0]))
      )
        return false;
      if (member.name.text === 'pseudo' && expression.arguments[0]) {
        const name = unwrap(expression.arguments[0]);
        if (
          ts.isStringLiteralLike(name) &&
          name.text.startsWith('::') &&
          !['::before', '::after', '::marker', '::selection', '::placeholder'].includes(name.text)
        )
          return false;
      }
      if (
        count === undefined ||
        expression.arguments.length !== count + 1 ||
        !expression.arguments.slice(0, count).every((arg) => ts.isStringLiteralLike(unwrap(arg)))
      )
        return false;
      const nested = expression.arguments[count]!;
      return (ts.isArrowFunction(nested) || ts.isFunctionExpression(nested)) && body(nested);
    }
    if (!ts.isPropertyAccessExpression(member.expression)) return false;
    const property = member.expression;
    if (!ts.isIdentifier(property.expression) || property.expression.text !== builder) return false;
    const meta = Object.hasOwn(propertyMetadata, property.name.text)
      ? propertyMetadata[property.name.text]
      : undefined;
    if (!meta || meta.resource) return false;
    if (!ts.isCallExpression(expression)) {
      return Object.hasOwn(keywordGroups[meta.keywords]!, member.name.text);
    }
    const args = expression.arguments;
    if (member.name.text === 'raw' || member.name.text === 'token') {
      if (args.length !== 1 || !read(args[0]!, callback)) return false;
      if (!literal(args[0]!)) {
        const numbers = meta.numbers.map((plan) => plan[0]!);
        if (meta.zero) numbers.push({ min: 0, max: 0 });
        declarations.push({
          kind: 'value',
          call: expression,
          property,
          format: {
            property: meta.cssName,
            ...(member.name.text === 'token'
              ? { tokens: Object.values(keywordGroups[meta.keywords]!) }
              : { numbers }),
          },
        });
      }
      return true;
    }
    let matched = false;
    for (const plan of helperGroups[meta.helpers]!) {
      for (const unit of unitFamilies[plan.family]!) {
        if ((unit === '%' ? 'pct' : unit) + plan.suffix !== member.name.text) continue;
        const alternatives = plan.arities[args.length];
        if (!alternatives || !args.every((arg) => read(arg, callback))) return false;
        if (!portableUnits.has(unit.toLowerCase()) && args.some((arg) => !literal(arg)))
          return false;
        matched = true;
        if (args.some((arg) => !literal(arg)))
          declarations.push({
            kind: 'unit',
            call: expression,
            property,
            unit,
            alternatives,
            separator: plan.separator === ',' ? ', ' : ' ',
          });
      }
    }
    return matched;
  }
  return body(callback) ? declarations : undefined;
}
