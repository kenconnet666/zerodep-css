import ts from 'typescript';

export interface ElementBindings {
  expression: string;
  values: Array<{ name: string; expression: string }>;
}

/** 将模板中的值读取交还框架；同一调用位置的所有元素共用变量名和样式规则。 */
export function elementBindings(
  source: ts.SourceFile,
  prefix: string,
  api: (node: ts.Expression) => string | undefined,
): ElementBindings | undefined {
  const statement = source.statements[0];
  if (!statement || !ts.isExpressionStatement(statement)) return;
  const values: ElementBindings['values'] = [];
  const edits: Array<{ start: number; end: number; text: string }> = [];
  let supported = true;
  const hasBinding = (node: ts.Node): boolean =>
    (ts.isCallExpression(node) && api(node.expression) === 'bx') ||
    !!ts.forEachChild(node, (child) => hasBinding(child) || undefined);
  const literalValue = (node: ts.Node): boolean => {
    if (ts.isCallExpression(node) && api(node.expression) === 'bx') return true;
    if (ts.isConditionalExpression(node))
      return literalValue(node.whenTrue) && literalValue(node.whenFalse);
    if (ts.isIdentifier(node) || ts.isPropertyAccessExpression(node) || ts.isCallExpression(node))
      return false;
    if (ts.isStringLiteralLike(node) && /[{}]/.test(node.text)) return false;
    return !ts.forEachChild(node, (child) => !literalValue(child) || undefined);
  };
  function visit(node: ts.Node, conditions: string[]) {
    if (
      (ts.isStringLiteralLike(node) ||
        ts.isTemplateHead(node) ||
        ts.isTemplateMiddle(node) ||
        ts.isTemplateTail(node)) &&
      /[{}]/.test(node.text)
    )
      supported = false;
    if (ts.isConditionalExpression(node)) {
      // 不把 bx 本身当作布尔条件，也不提前读取没有执行的分支。
      if (hasBinding(node.condition)) {
        supported = false;
        return;
      }
      const condition = node.condition.getText(source);
      visit(node.whenTrue, [...conditions, `(${condition})`]);
      visit(node.whenFalse, [...conditions, `!(${condition})`]);
      return;
    }
    if (
      ts.isBinaryExpression(node) &&
      [
        ts.SyntaxKind.AmpersandAmpersandToken,
        ts.SyntaxKind.BarBarToken,
        ts.SyntaxKind.QuestionQuestionToken,
      ].includes(node.operatorToken.kind)
    ) {
      if (hasBinding(node.left)) {
        supported = false;
        return;
      }
      const left = node.left.getText(source);
      const condition =
        node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken
          ? `(${left})`
          : node.operatorToken.kind === ts.SyntaxKind.BarBarToken
            ? `!(${left})`
            : `(${left}) == null`;
      visit(node.right, [...conditions, condition]);
      return;
    }
    if (ts.isCallExpression(node)) {
      if (api(node.expression) === 'bx') {
        const value = node.arguments[0];
        if (node.arguments.length !== 1 || !value) {
          supported = false;
          return;
        }
        const name = `--zi-${prefix}-${values.length}`;
        const expression = value.getText(source);
        values.push({
          name,
          expression: conditions.length
            ? `(${conditions.join(' && ')}) ? (${expression}) : null`
            : expression,
        });
        edits.push({
          start: node.getStart(source),
          end: node.end,
          text: JSON.stringify(`var(${name})`),
        });
        return;
      }
      if (ts.isPropertyAccessExpression(node.expression)) {
        const method = node.expression.name.text;
        // 任意选择器可能选中兄弟/祖先，raw 的动态原文也可能改变规则结构。
        if (method === '_selector' || (method === 'raw' && !node.arguments.every(literalValue)))
          supported = false;
      }
    }
    ts.forEachChild(node, (child) => visit(child, conditions));
  }
  visit(statement.expression, []);
  if (!supported || !values.length) return;
  let expression = source.text;
  for (const edit of edits.reverse())
    expression = expression.slice(0, edit.start) + edit.text + expression.slice(edit.end);
  return { expression: expression.slice(1, -1), values };
}
