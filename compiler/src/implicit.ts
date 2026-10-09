import ts from 'typescript';

/** 只把直接值/关键字交给核心安全检查；嵌套选择器与复杂计算仍执行原声明。 */
export function implicitExpression(
  node: ts.Expression,
  source: ts.SourceFile,
  scope: string,
  prefix: string,
  api: (node: ts.Expression) => string | undefined,
  dynamic: (node: ts.Expression) => boolean,
  force = false,
  text: (node: ts.Expression) => string = (node) => node.getText(source),
): string | undefined {
  while (ts.isParenthesizedExpression(node)) node = node.expression;
  if (!ts.isCallExpression(node) || api(node.expression) !== 'css') return;
  const explicit = (child: ts.Node): boolean =>
    (ts.isCallExpression(child) && api(child.expression) === 'bx') ||
    !!ts.forEachChild(child, (nested) => explicit(nested) || undefined);
  if (explicit(node) || node.arguments.some(ts.isSpreadElement)) return;
  let count = 0;
  const args = node.arguments.map((arg) => {
    const variable = JSON.stringify(`--zj-${prefix}-${count}`);
    if (
      ts.isCallExpression(arg) &&
      ts.isPropertyAccessExpression(arg.expression) &&
      ts.isPropertyAccessExpression(arg.expression.expression) &&
      arg.arguments.length === 1 &&
      arg.arguments[0] &&
      dynamic(arg.arguments[0])
    ) {
      const property = arg.expression.expression;
      count++;
      return `${scope}.auto.method(${text(property.expression)}, ${JSON.stringify(property.name.text)}, ${JSON.stringify(arg.expression.name.text)}, () => (${text(arg.arguments[0])}), ${variable})`;
    }
    if (
      ts.isPropertyAccessExpression(arg) &&
      ts.isPropertyAccessExpression(arg.expression) &&
      arg.name.text.startsWith('_')
    ) {
      count++;
      return `${scope}.auto.keyword(${text(arg.expression)}, ${JSON.stringify(arg.name.text)}, ${variable})`;
    }
    return text(arg);
  });
  return count || force
    ? `${scope}.auto.css(${node.expression.getText(source)}, [${args.join(', ')}])`
    : undefined;
}

/** 命名 css 只有全部用途都为原生 class 时才能携带元素变量，其他用途保留字符串。 */
export function inlineCssNames(code: string, names: string[]): Set<string> {
  return new Set(
    names.filter(
      (name) =>
        /^[\w$]+$/.test(name) &&
        [...code.matchAll(new RegExp(`(?<![\\w$])${name.replaceAll('$', '\\$')}(?![\\w$])`, 'g'))]
          .length ===
          names.filter((n) => n === name).length + 1,
    ),
  );
}
