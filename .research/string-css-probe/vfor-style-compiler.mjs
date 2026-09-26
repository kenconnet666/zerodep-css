import { createRequire } from 'node:module';

// 使用当前 Vue 自己依赖的编译器，避免另装不同版本。
const require = createRequire(import.meta.resolve('vue'));
const {
  compile,
  NodeTypes: N,
  createSimpleExpression: expression,
  createCompoundExpression: compound,
  createBlockStatement: block,
  createArrayExpression: array,
  createCallExpression: call,
  createFunctionExpression: fn,
} = require('@vue/compiler-dom');

/** 探针只处理带 key、单元素根节点、简单循环形参的 class；不做通用纯度证明。 */
export function compileListStyle(template, cached = true) {
  let serial = 0;
  const transform = (root, context) => {
    if (root.type !== N.ROOT) return;
    // 子节点完成 transformFor/transformElement 后，再修改已解析作用域的 codegen AST。
    return () => {
      function visit(node, ancestors = []) {
        let locals = ancestors;
        if (node.type === N.FOR) {
          const aliases = [node.valueAlias, node.keyAlias, node.objectIndexAlias].filter(Boolean);
          if (aliases.some((alias) => !/^[A-Za-z_$][\w$]*$/.test(alias.content))) return;
          locals = [...ancestors, ...aliases];
          const list = node.codegenNode?.children;
          const render = list?.arguments?.[1];
          const vnode = render?.returns;
          const properties = vnode?.props?.properties;
          const key = properties?.find((prop) => prop.key?.content === 'key');
          const style = properties?.find((prop) => prop.key?.content === 'class');
          // 已有 v-memo、v-once 或合并 props 不强行改写。
          if (
            render?.type === N.JS_FUNCTION_EXPRESSION &&
            vnode?.type === N.VNODE_CALL &&
            key &&
            style
          ) {
            const suffix = serial++;
            const recordName = `__rowStyle${suffix}`,
              keyName = `__rowKey${suffix}`,
              previousName = `__rowPrevious${suffix}`;
            const keyValue = key.value,
              styleValue = style.value;
            key.value = expression(keyName, false);
            style.value = expression(`${recordName}.className.value`, false);
            while (render.params.length < 3)
              render.params.push(expression(`__rowUnused${suffix}_${render.params.length}`, false));
            render.params.push(expression(previousName, false));
            render.returns = undefined;
            render.body = block([
              compound([`const ${keyName} = `, keyValue]),
              compound([
                `const ${recordName} = `,
                call('__readRowStyle', [
                  expression(previousName, false),
                  expression(keyName, false),
                  array(locals.map((alias) => expression(alias.content, false))),
                  fn([], styleValue),
                ]),
              ]),
              compound([
                'return ',
                call('__rememberRowStyle', [vnode, expression(recordName, false)]),
              ]),
            ]);
            list.arguments.push(
              expression('_cache', false),
              expression(String(context.cached.length), false),
            );
            context.cached.push(null);
          }
        }
        for (const child of node.children ?? [])
          if (typeof child === 'object') visit(child, locals);
        for (const branch of node.branches ?? []) visit(branch, locals);
      }
      visit(root);
    };
  };
  return compile(template, {
    mode: 'function',
    prefixIdentifiers: true,
    nodeTransforms: cached ? [transform] : [],
  }).code;
}
