import { relative } from 'node:path';
import { parse, type AST } from 'svelte/compiler';
import {
  applyEdits,
  createBindingTransform,
  replacePropsId,
  scriptEdits,
  type Edit,
} from '@zerodep-css/core/compiler';

// Svelte 的 ESTree 节点包含偏移，但通用 ESTree 类型未声明这两个字段。
function located<T>(node: T): T & { start: number; end: number } {
  return node as T & { start: number; end: number };
}

type Binding = NonNullable<AST.EachBlock['context']>;
/** 直接读取 Svelte 的绑定模式 AST，不再把解构片段交给 TypeScript 重复解析。 */
function patternNames(pattern: Binding | null | undefined): string[] {
  switch (pattern?.type) {
    case 'Identifier':
      return [pattern.name];
    case 'RestElement':
      return patternNames(pattern.argument);
    case 'AssignmentPattern':
      return patternNames(pattern.left);
    case 'ArrayPattern':
      return pattern.elements.flatMap(patternNames);
    case 'ObjectPattern':
      return pattern.properties.flatMap((property) =>
        patternNames(
          property.type === 'RestElement' ? property.argument : (property.value as Binding),
        ),
      );
    default:
      return [];
  }
}

function containsCall(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  if (Array.isArray(value)) return value.some(containsCall);
  const node = value as { type?: string };
  if (node.type === 'CallExpression' || node.type === 'NewExpression') return true;
  return Object.entries(value).some(
    ([key, child]) =>
      !['loc', 'metadata', 'comments', 'parent'].includes(key) && containsCall(child),
  );
}

export default function cssBindings() {
  let root = process.cwd();
  let dev = false;
  return {
    name: 'zerodep-css:svelte-bindings',
    enforce: 'pre' as const,
    configResolved(config: { root: string; isProduction?: boolean }) {
      root = config.root;
      dev = !config.isProduction;
    },
    transform(this: { warn(message: string): void }, code: string, id: string) {
      if (!id.endsWith('.svelte') || id.includes('?')) return;
      const ast = parse(code, { modern: true });
      if (!ast.instance) return;
      const script = located(ast.instance.content);
      const model = createBindingTransform(
        code.slice(script.start, script.end),
        relative(root, id),
        'svelte',
        code,
        { dev, scriptOffset: script.start },
      );
      if (!model.enabled) return;
      const edits: Edit[] = [];
      let serial = 0;
      const moduleNames = new Set<string>();
      function moduleIdentifiers(value: unknown): void {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
          value.forEach(moduleIdentifiers);
          return;
        }
        const node = value as { type?: string; name?: string };
        if (node.type === 'Identifier' && node.name) moduleNames.add(node.name);
        for (const [key, child] of Object.entries(value))
          if (!['loc', 'metadata', 'comments', 'parent'].includes(key)) moduleIdentifiers(child);
      }
      moduleIdentifiers(ast.module?.content);
      function visit(value: unknown, keys: string[], locals: string[], fallback = false): void {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
          // ConstTag 属于整个模板片段作用域，既要追踪动态值，也要识别对 css 导入的遮蔽。
          const declared = value.flatMap((item) =>
            item?.type === 'ConstTag'
              ? (item as AST.ConstTag).declaration.declarations.flatMap((declaration) =>
                  patternNames(declaration.id),
                )
              : [],
          );
          value.forEach((item) => visit(item, keys, [...locals, ...declared], fallback));
          return;
        }
        const node = value as AST.BaseNode;
        if (node.type === 'ConstTag') {
          for (const declaration of (node as AST.ConstTag).declaration.declarations) {
            if (!declaration.init) continue;
            const init = located(declaration.init);
            const before = code.slice(init.start, init.end);
            const text = model.expression(before, locals, init.start);
            if (text !== before || containsCall(init)) {
              const wrapped = fallback
                ? `${model.scope}.runtime(() => (${text}))`
                : `${model.scope}.frame(${JSON.stringify(`const${serial++}`)}, [${keys.join(',')}], () => (${text}))`;
              // const 内调用脚本样式辅助函数时也提供帧，避免在原生派生期间另建订阅。
              edits.push({ start: init.start, end: init.end, text: wrapped });
            }
          }
          return;
        }
        if (node.type === 'EachBlock') {
          const each = node as AST.EachBlock;
          if (!each.context) return;
          const context = located(each.context);
          const names = patternNames(each.context);
          const index = each.index ?? `${model.scope}_index${serial++}`;
          let key = each.key ? code.slice(located(each.key).start, located(each.key).end) : index;
          if (!each.key && !each.index)
            edits.push({ start: context.end, end: context.end, text: `, ${index}` });
          const savedKey = `${model.scope}_key${serial++}`;
          const first = each.body.nodes[0];
          if (first) {
            edits.push({
              start: first.start,
              end: first.start,
              text: `{@const ${savedKey} = ${key}}`,
            });
            key = savedKey;
          }
          visit(each.body, [...keys, key], [...locals, ...names, index], fallback);
          visit(each.fallback, keys, locals, fallback);
          return;
        }
        if (node.type === 'SnippetBlock') {
          const snippet = node as AST.SnippetBlock;
          // 模块引用（含导出别名）的 snippet 不能捕获当前组件实例的绑定宿主。
          if (moduleNames.has(snippet.expression.name)) return;
          const invocation = `${model.scope}_snippet${serial++}`;
          const first = snippet.body.nodes[0];
          if (first)
            edits.push({
              start: first.start,
              end: first.start,
              text: `{@const ${invocation} = {}}`,
            });
          // Svelte 为 const tag 生成原生派生；无依赖的对象在每次 snippet 实例中保持身份。
          visit(
            snippet.body,
            [...keys, invocation],
            [...locals, ...snippet.parameters.flatMap(patternNames)],
            fallback,
          );
          return;
        }
        if (node.type === 'AwaitBlock') {
          const block = node as AST.AwaitBlock;
          visit(block.pending, keys, locals, fallback);
          visit(block.then, keys, [...locals, ...patternNames(block.value)], fallback);
          visit(block.catch, keys, [...locals, ...patternNames(block.error)], fallback);
          return;
        }
        if (node.type === 'Attribute') {
          const attribute = node as AST.Attribute;
          if (attribute.name === 'class' && attribute.value !== true) {
            const values = Array.isArray(attribute.value) ? attribute.value : [attribute.value];
            const expression =
              values.length === 1 && values[0]?.type === 'ExpressionTag'
                ? located(values[0].expression)
                : undefined;
            if (expression?.start != null && expression.end != null) {
              const text = model.expression(
                code.slice(expression.start, expression.end),
                locals,
                expression.start,
              );
              const wrapped = fallback
                ? `${model.scope}.runtime(() => (${text}))`
                : `${model.scope}.frame(${JSON.stringify(`element${serial++}`)}, [${keys.join(',')}], () => (${text}))`;
              edits.push({ start: expression.start, end: expression.end, text: wrapped });
            }
          }
          return;
        }
        for (const [key, child] of Object.entries(value))
          if (!['loc', 'metadata', 'comments', 'parent'].includes(key))
            visit(child, keys, locals, fallback);
      }
      visit(ast.fragment, [], []);
      for (const warning of model.warnings) this.warn(warning);
      if (!model.used) return;
      const idName = `${model.scope}_id`;
      const scriptText = replacePropsId(model.script, idName);
      const prefix = `import { useBindings as ${model.scope}_use } from '@zerodep-css/svelte/bindings';\nconst ${idName} = $props.id();\nconst ${model.scope} = ${model.scope}_use(${JSON.stringify(model.fileId)}, ${idName}, run => { run(); return $effect.root(() => { $effect(run); }); }${dev ? `, ${JSON.stringify(model.locations)}` : ''});\n`;
      edits.push(...scriptEdits(code.slice(script.start, script.end), scriptText, script.start), {
        start: script.start,
        end: script.start,
        text: prefix,
      });
      return applyEdits(code, edits, id);
    },
  };
}
