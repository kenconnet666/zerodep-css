import ts from 'typescript';

/** 只解析声明身份，不通过同名字符串猜测宏或把嵌套函数的局部变量算到外层。 */
export function bindingNames(node: ts.BindingName, target = new Set<string>()): Set<string> {
  if (ts.isIdentifier(node)) target.add(node.text);
  else
    for (const element of node.elements)
      if (ts.isBindingElement(element)) bindingNames(element.name, target);
  return target;
}

function varNames(scope: ts.Node): Set<string> {
  const result = new Set<string>();
  const visit = (node: ts.Node): void => {
    if (node !== scope && (ts.isFunctionLike(node) || ts.isClassLike(node))) return;
    if (ts.isVariableDeclarationList(node) && !(node.flags & ts.NodeFlags.BlockScoped))
      for (const declaration of node.declarations) bindingNames(declaration.name, result);
    ts.forEachChild(node, visit);
  };
  visit(scope);
  return result;
}

function declares(scope: ts.Node, name: string): boolean {
  if (ts.isFunctionLike(scope)) {
    if (scope.parameters.some((parameter) => bindingNames(parameter.name).has(name))) return true;
    if (scope.name && ts.isIdentifier(scope.name) && scope.name.text === name) return true;
    if (varNames(scope).has(name)) return true;
  }
  if (ts.isClassLike(scope) && scope.name?.text === name) return true;
  if (
    ts.isCatchClause(scope) &&
    scope.variableDeclaration &&
    bindingNames(scope.variableDeclaration.name).has(name)
  )
    return true;
  if (ts.isForStatement(scope) || ts.isForInStatement(scope) || ts.isForOfStatement(scope)) {
    const initializer = scope.initializer;
    if (
      initializer &&
      ts.isVariableDeclarationList(initializer) &&
      initializer.declarations.some((d) => bindingNames(d.name).has(name))
    )
      return true;
  }
  if (ts.isBlock(scope) || ts.isSourceFile(scope)) {
    for (const statement of scope.statements) {
      if (
        ts.isVariableStatement(statement) &&
        statement.declarationList.declarations.some((d) => bindingNames(d.name).has(name))
      )
        return true;
      if (
        (ts.isFunctionDeclaration(statement) || ts.isClassDeclaration(statement)) &&
        statement.name?.text === name
      )
        return true;
    }
  }
  return false;
}

export function unshadowed(node: ts.Node, name: string, boundary: ts.Node): boolean {
  for (let scope = node.parent; scope && scope !== boundary; scope = scope.parent)
    if (declares(scope, name)) return false;
  return true;
}

export function capturedInside(node: ts.Identifier, callback: ts.Node): boolean {
  for (let scope = node.parent; scope; scope = scope.parent) {
    if (declares(scope, node.text)) return true;
    if (scope === callback) break;
  }
  return false;
}
