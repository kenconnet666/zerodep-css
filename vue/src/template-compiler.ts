import {
  NodeTypes as N,
  NORMALIZE_CLASS,
  createSimpleExpression as expression,
  createCompoundExpression,
  createBlockStatement as block,
  createArrayExpression as array,
  createCallExpression as call,
  processExpression,
  type NodeTransform,
  type RootNode,
  type ElementNode,
  type ForNode,
  type IfNode,
  type JSChildNode,
  type IfBranchNode,
  type ObjectExpression,
  type VNodeCall,
  type CompilerOptions,
  type ExpressionNode,
} from '@vue/compiler-dom';
import { bindingNames } from '@zerodep-css/core/compiler';

type Node = RootNode | ElementNode | ForNode | IfNode | IfBranchNode;
function container(value: unknown): value is Node {
  return (
    !!value &&
    typeof value === 'object' &&
    'type' in value &&
    ([N.ROOT, N.ELEMENT, N.FOR, N.IF, N.IF_BRANCH] as number[]).includes(value.type as number)
  );
}
// Vue 自己的 codegen 允许复合表达式包含 JS 节点，但声明文件把 children 收窄到了模板表达式。
const compound = (parts: Array<string | JSChildNode>) =>
  createCompoundExpression(parts as Parameters<typeof createCompoundExpression>[0]);
interface Scope {
  locals: string[];
  cache?: string;
  inLoop: boolean;
}

/** 源码层只标记候选；等 Vue 完成循环/变量分析后，在 codegen AST 中加入缓存。 */
export const templateCacheTransform: NodeTransform = (root, context) => {
  if (root.type !== N.ROOT || context.inSSR) return;
  return () => {
    let serial = 0;
    function marker(node: Node): { scope: string; value: ExpressionNode } | undefined {
      if (node.type !== N.ELEMENT) return;
      const prop = node.props.find(
        (prop) =>
          prop.type === N.DIRECTIVE &&
          prop.name === 'bind' &&
          prop.arg?.type === N.SIMPLE_EXPRESSION &&
          prop.arg.content === 'class',
      );
      if (prop?.type !== N.DIRECTIVE || !prop.exp) return;
      const match = /^\s*(__zc_*)\.template\(/.exec(prop.exp.loc.source);
      return match ? { scope: match[1]!, value: prop.exp } : undefined;
    }
    function appendCache(value: ExpressionNode, cache: string, index: number) {
      // 复用 Vue 已解析和改写过的表达式节点，只在内部标记调用末尾追加缓存参数。
      // 不重新解析 class，不自行还原模板 ref/HTML 实体，也保留原节点的 source map。
      const parts = value.type === N.COMPOUND_EXPRESSION ? [...value.children] : [value.content];
      const tail = parts.pop();
      if (typeof tail !== 'string' || !tail.trimEnd().endsWith(')')) return;
      parts.push(tail.trimEnd().slice(0, -1), `, ${cache}, ${index})`);
      return createCompoundExpression(parts, value.loc);
    }
    function owner(node: Node): string | undefined {
      const name = marker(node)?.scope;
      if (name) return name;
      if ('children' in node)
        for (const child of node.children) {
          if (!container(child)) continue;
          const found = owner(child);
          if (found) return found;
        }
      if (node.type === N.IF)
        for (const branch of node.branches) {
          const found = owner(branch);
          if (found) return found;
        }
    }
    function replaceClass(props: VNodeCall['props'], value: ExpressionNode): void {
      if (!props || typeof props === 'string') return;
      if (props.type === N.JS_OBJECT_EXPRESSION) {
        const prop = (props as ObjectExpression).properties.find(
          (prop) => prop.key.type === N.SIMPLE_EXPRESSION && prop.key.content === 'class',
        );
        if (prop) prop.value = call(context.helper(NORMALIZE_CLASS), [value]);
      } else if (props.type === N.JS_CALL_EXPRESSION) {
        // mergeProps / normalizeProps 的对象参数仍可局部处理，其他属性保持原样。
        for (const arg of props.arguments)
          if (
            typeof arg === 'object' &&
            !Array.isArray(arg) &&
            (arg.type === N.JS_OBJECT_EXPRESSION || arg.type === N.JS_CALL_EXPRESSION)
          )
            replaceClass(arg, value);
      }
    }
    function visit(node: Node, scope: Scope) {
      let next = scope;
      if (node.type === N.FOR) {
        const aliases = [node.valueAlias, node.keyAlias, node.objectIndexAlias]
          .filter((alias) => alias !== undefined)
          .flatMap((alias) =>
            bindingNames(alias.type === N.SIMPLE_EXPRESSION ? alias.content : alias.loc.source),
          );
        next = { locals: [...scope.locals, ...aliases], inLoop: true };
        const children = node.codegenNode?.children;
        const list =
          children &&
          typeof children === 'object' &&
          !Array.isArray(children) &&
          children.type === N.JS_CALL_EXPRESSION
            ? children
            : undefined;
        const render = list?.arguments[1];
        const vnode =
          typeof render === 'object' && render.type === N.JS_FUNCTION_EXPRESSION
            ? render.returns
            : undefined;
        const name = owner(node);
        if (
          list &&
          typeof render === 'object' &&
          render.type === N.JS_FUNCTION_EXPRESSION &&
          Array.isArray(render.params) &&
          vnode &&
          !Array.isArray(vnode) &&
          vnode.type === N.VNODE_CALL &&
          name
        ) {
          const key =
            vnode.props?.type === N.JS_OBJECT_EXPRESSION
              ? vnode.props.properties.find(
                  (prop) => prop.key.type === N.SIMPLE_EXPRESSION && prop.key.content === 'key',
                )
              : undefined;
          {
            const id = serial++,
              record = `${name}_row${id}`,
              previous = `${name}_previous${id}`,
              rowKey = `${name}_key${id}`;
            const keyValue = key?.value ?? expression('null', false);
            if (key) key.value = expression(rowKey, false);
            const access = processExpression(expression(name, false), context);
            while (render.params.length < 3)
              render.params.push(expression(`${name}_unused${id}_${render.params.length}`, false));
            render.params.push(expression(previous, false));
            render.returns = undefined;
            render.body = block([
              compound([`const ${rowKey} = `, keyValue]),
              compound([
                `const ${record} = `,
                access,
                '.row(',
                expression(previous, false),
                ', ',
                expression(rowKey, false),
                ', ',
                array(next.locals.map((name) => expression(name, false))),
                ')',
              ]),
              compound(['return ', access, '.keep(', vnode, `, ${record})`]),
            ]);
            list.arguments.push(
              expression('_cache', false),
              expression(String(context.cached.length), false),
            );
            context.cached.push(null);
            next = { ...next, cache: `${record}.cache` };
          }
        }
      }
      if (node.type === N.ELEMENT && node.codegenNode?.type === N.VNODE_CALL) {
        const mark = marker(node);
        if (mark && (!scope.inLoop || scope.cache)) {
          const index = scope.cache ? serial++ : context.cached.length;
          const cached = appendCache(mark.value, scope.cache ?? '_cache', index);
          if (cached) {
            if (!scope.cache) context.cached.push(null);
            replaceClass(node.codegenNode.props, cached);
          }
        }
      }
      if ('children' in node)
        for (const child of node.children) if (container(child)) visit(child, next);
      if (node.type === N.IF) for (const branch of node.branches) visit(branch, next);
    }
    visit(root, { locals: [], inLoop: false });
  };
};

/** 保留用户的 compilerOptions；插件也把此选项交给直接使用 compiler-sfc 的测试工具。 */
export function withTemplateCache(options: CompilerOptions = {}): CompilerOptions {
  return {
    ...options,
    nodeTransforms: [
      ...(options.nodeTransforms ?? []).filter((transform) => transform !== templateCacheTransform),
      templateCacheTransform,
    ],
  };
}
