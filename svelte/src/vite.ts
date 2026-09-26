import { relative } from 'node:path';
import { parse, type AST } from 'svelte/compiler';
import {
  applyEdits,
  bindingNames,
  createBindingTransform,
  replacePropsId,
  type Edit,
} from '@zerodep-css/core/compiler';

// Svelte 的 ESTree 节点包含偏移，但通用 ESTree 类型未声明这两个字段。
function located<T>(node: T): T & { start: number; end: number } {
  return node as T & { start: number; end: number };
}

export default function cssBindings() {
  let root = process.cwd();
  return {
    name: 'zerodep-css:svelte-bindings',
    enforce: 'pre' as const,
    configResolved(config: { root: string }) {
      root = config.root;
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
      );
      if (!model.enabled) return;
      const edits: Edit[] = [];
      let serial = 0;
      function visit(value: unknown, keys: string[], locals: string[], fallback = false): void {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
          value.forEach((item) => visit(item, keys, locals, fallback));
          return;
        }
        const node = value as AST.BaseNode;
        if (node.type === 'EachBlock') {
          const each = node as AST.EachBlock;
          if (!each.context) return;
          const context = located(each.context);
          const names = bindingNames(code.slice(context.start, context.end));
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
          const names = snippet.parameters.flatMap((param) =>
            bindingNames(code.slice(located(param).start, located(param).end)),
          );
          model.warnings.add(
            'CSS computed from snippet parameters uses the ordinary runtime CSS path.',
          );
          visit(snippet.body, keys, [...locals, ...names], true);
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
              const text = model.expression(code.slice(expression.start, expression.end), locals);
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
      for (const warning of model.warnings) this.warn(`${id}: ${warning}`);
      if (!model.used) return;
      const idName = `${model.scope}_id`;
      const scriptText = replacePropsId(model.script, idName);
      const prefix = `import { useBindings as ${model.scope}_use } from '@zerodep-css/svelte/bindings';\nconst ${idName} = $props.id();\nconst ${model.scope} = ${model.scope}_use(${JSON.stringify(model.fileId)}, ${idName}, run => { run(); return $effect.root(() => { $effect(run); }); });\n`;
      edits.push({ start: script.start, end: script.end, text: prefix + scriptText });
      return applyEdits(code, edits, id);
    },
  };
}
