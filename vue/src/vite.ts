import { relative } from 'node:path';
import { parse } from 'vue/compiler-sfc';
import {
  applyEdits,
  bindingNames,
  createBindingTransform,
  type Edit,
} from '@zerodep-css/core/compiler';

/** 放在 Vue 插件之前，仅处理 script setup；普通运行时写法仍可单独使用。 */
export default function cssBindings() {
  let root = process.cwd();
  return {
    name: 'zerodep-css:vue-bindings',
    enforce: 'pre' as const,
    configResolved(config: { root: string }) {
      root = config.root;
    },
    transform(this: { warn(message: string): void }, code: string, id: string) {
      if (!id.endsWith('.vue') || id.includes('?')) return;
      const { descriptor } = parse(code, { filename: id });
      const script = descriptor.scriptSetup;
      if (!script || !descriptor.template?.ast) return;
      const model = createBindingTransform(script.content, relative(root, id), 'vue', code);
      if (!model.enabled) return;
      const edits: Edit[] = [];
      let serial = 0;
      const html = (value: string) =>
        value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
      type Template = NonNullable<typeof descriptor.template.ast>['children'][number];
      function visit(node: Template, keys: string[], locals: string[], fallback = false) {
        if (node.type !== 1) return;
        let nextKeys = [...keys];
        let nextLocals = [...locals];
        const loop = node.props.find((prop) => prop.type === 7 && prop.name === 'for');
        if (loop?.type === 7 && loop.forParseResult?.value && loop.exp?.type === 4) {
          const parsed = loop.forParseResult;
          const value = parsed.value!.loc.source;
          const names = bindingNames(value);
          if (names.some((name) => locals.includes(name))) fallback = true;
          nextLocals.push(...names);
          const keyProp = node.props.find(
            (prop) =>
              prop.type === 7 &&
              prop.name === 'bind' &&
              prop.arg?.type === 4 &&
              prop.arg.content === 'key',
          );
          let key =
            keyProp?.type === 7 && keyProp.exp?.type === 4
              ? keyProp.exp.content
              : parsed.key?.loc.source;
          if (parsed.key) {
            if (locals.includes(parsed.key.loc.source)) fallback = true;
            nextLocals.push(parsed.key.loc.source);
          }
          if (parsed.index) nextLocals.push(parsed.index.loc.source);
          if (!key) {
            key = `${model.scope}_index${serial++}`;
            edits.push({
              start: loop.loc.start.offset,
              end: loop.loc.end.offset,
              text: `v-for="${html(`(${value}, ${key}) in ${parsed.source.loc.source}`)}"`,
            });
            nextLocals.push(key);
          }
          nextKeys.push(key);
        }
        const slot = node.props.find((prop) => prop.type === 7 && prop.name === 'slot');
        if (slot?.type === 7 && slot.exp?.type === 4) {
          nextLocals.push(...bindingNames(slot.exp.content));
          fallback = true;
        }
        for (const prop of node.props) {
          if (
            prop.type !== 7 ||
            prop.name !== 'bind' ||
            prop.arg?.type !== 4 ||
            prop.arg.content !== 'class' ||
            prop.exp?.type !== 4
          )
            continue;
          const expression = model.expression(prop.exp.content, nextLocals);
          const wrapped = fallback
            ? `${model.scope}.runtime(() => (${expression}))`
            : `${model.scope}.frame(${JSON.stringify(`element${serial++}`)}, [${nextKeys.join(',')}], () => (${expression}))`;
          edits.push({
            start: prop.loc.start.offset,
            end: prop.loc.end.offset,
            text: `:class="${html(wrapped)}"`,
          });
        }
        if (fallback)
          model.warnings.add(
            'Slot props or shadowed loop bindings use the ordinary runtime CSS path.',
          );
        for (const child of node.children) visit(child, nextKeys, nextLocals, fallback);
      }
      for (const node of descriptor.template.ast.children) visit(node, [], []);
      for (const warning of model.warnings) this.warn(`${id}: ${warning}`);
      if (!model.used) return;
      const prefix = `import { useBindings as ${model.scope}_use } from '@zerodep-css/vue/bindings';\nconst ${model.scope} = ${model.scope}_use(${JSON.stringify(model.fileId)});\n`;
      edits.push({
        start: script.loc.start.offset,
        end: script.loc.end.offset,
        text: prefix + model.script,
      });
      return applyEdits(code, edits, id);
    },
  };
}
