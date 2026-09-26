import ts from 'typescript';
import MagicString from 'magic-string';

export interface Edit {
  start: number;
  end: number;
  text: string;
}

export function collectBindings(node: ts.BindingName, into: Set<string>) {
  if (ts.isIdentifier(node)) into.add(node.text);
  else
    for (const part of node.elements)
      if (ts.isBindingElement(part)) collectBindings(part.name, into);
}

export function bindingNames(pattern: string): string[] {
  // 最常见的循环别名无需再构建一份 TypeScript AST；解构形式仍交给解析器。
  if (/^[A-Za-z_$][\w$]*$/.test(pattern)) return [pattern];
  const sf = ts.createSourceFile(
    'pattern.ts',
    `let ${pattern} = null;`,
    ts.ScriptTarget.Latest,
    true,
  );
  const statement = sf.statements[0];
  const names: string[] = [];
  function visit(node: ts.BindingName) {
    if (ts.isIdentifier(node)) names.push(node.text);
    else for (const item of node.elements) if (ts.isBindingElement(item)) visit(item.name);
  }
  if (statement && ts.isVariableStatement(statement))
    for (const item of statement.declarationList.declarations) visit(item.name);
  return names;
}

export function applyEdits(source: string, edits: Edit[], file = 'component') {
  const output = new MagicString(source);
  let end = source.length;
  for (const edit of [...edits].sort((a, b) => b.start - a.start || b.end - a.end)) {
    if (edit.end > end) throw new Error('Overlapping CSS binding transforms.');
    if (edit.start === edit.end) output.appendLeft(edit.start, edit.text);
    else output.overwrite(edit.start, edit.end, edit.text);
    end = edit.start;
  }
  return {
    code: output.toString(),
    map: output.generateMap({ source: file, includeContent: true, hires: true }),
  };
}

/** 逐语句保留未变片段，避免整段 script 覆盖令后续行的 source map 全部指向开头。 */
export function scriptEdits(before: string, after: string, offset: number): Edit[] {
  const parse = (code: string) =>
    ts.createSourceFile('script.ts', code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const original = parse(before),
    next = parse(after);
  if (original.statements.length !== next.statements.length)
    throw new Error('CSS transform changed script statement boundaries.');
  const edits: Edit[] = [];
  original.statements.forEach((node, index) => {
    const oldText = node.getText(original),
      newText = next.statements[index]!.getText(next);
    if (oldText === newText) return;
    let start = 0,
      tail = 0;
    while (start < oldText.length && start < newText.length && oldText[start] === newText[start])
      start++;
    while (
      tail < oldText.length - start &&
      tail < newText.length - start &&
      oldText[oldText.length - tail - 1] === newText[newText.length - tail - 1]
    )
      tail++;
    edits.push({
      start: offset + node.getStart(original) + start,
      end: offset + node.end - tail,
      text: newText.slice(start, newText.length - tail),
    });
  });
  return edits;
}

/** 复用已有的原生组件 ID；只替换调用节点，绝不改字符串或注释。 */
export function replacePropsId(script: string, name: string): string {
  const sf = ts.createSourceFile(
    'script.ts',
    script,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const edits: Edit[] = [];
  function visit(node: ts.Node) {
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression) &&
      node.expression.expression.text === '$props' &&
      node.expression.name.text === 'id' &&
      node.arguments.length === 0
    )
      edits.push({ start: node.getStart(sf), end: node.end, text: name });
    else ts.forEachChild(node, visit);
  }
  visit(sf);
  return applyEdits(script, edits).code;
}
