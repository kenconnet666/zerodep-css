import { ident, parse, generate } from 'css-tree';
import { propertyAliases } from './generated/metadata.js';
import type { StyleNode, StyleProgram } from './style-program.js';
import { normalizeCssText } from './css-value.js';

interface Context {
  boundaries: readonly string[];
  selectors: readonly string[];
  conditions: readonly string[];
  rootSelector: boolean;
}
const conditional = new Set(['@media', '@supports', '@container']);

function propertyKey(property: string): string {
  const decoded = property.includes('\\') ? ident.decode(property) : property;
  const name = decoded.startsWith('--') ? decoded : decoded.toLowerCase();
  return Object.hasOwn(propertyAliases, name) ? propertyAliases[name]! : name;
}

function hasRepeatedProperty(nodes: StyleProgram, names = new Set<string>()): boolean {
  for (const node of nodes) {
    if (node.kind !== 'declaration') {
      if (hasRepeatedProperty(node.children, names)) return true;
    } else {
      const name = propertyKey(node.property);
      if (names.has(name)) return true;
      names.add(name);
    }
  }
  return false;
}

/** 缓存只属于创建者的 runtime/请求；只记固定语法结果，不保存求值或主题状态。 */
export function createStyleNormalizer() {
  const syntax = new Map<string, string>();
  function canonical(text: string, kind: 'selectorList' | 'atrulePrelude', atrule?: string) {
    const key = kind + ':' + (atrule ?? '') + '\0' + text;
    const existing = syntax.get(key);
    if (existing !== undefined) return existing;
    const value = generate(parse(normalizeCssText(text), { context: kind, atrule }));
    if (key.length <= 4096) {
      if (syntax.size >= 256) syntax.delete(syntax.keys().next().value!);
      syntax.set(key, value);
    }
    return value;
  }
  function normalize(program: StyleProgram): StyleProgram {
    if (!program.length || (program.length === 1 && program[0]!.kind === 'declaration'))
      return program;
    // 没有重复属性就不可能需要删除声明，无需创建上下文或解析选择器。
    if (!hasRepeatedProperty(program)) return program;
    const contexts = new Map<string, Set<string>>();
    // 组合可重复引用同一个冻结节点，删除必须按出现位置而非对象身份记录。
    const removed = new Set<number>();
    let occurrence = 0;
    const contextKey = (context: Context) =>
      JSON.stringify([context.boundaries, context.selectors, context.conditions]);
    function visit(nodes: StyleProgram, context: Context) {
      const key = contextKey(context);
      let written = contexts.get(key);
      if (!written) contexts.set(key, (written = new Set()));
      for (let index = nodes.length - 1; index >= 0; index--) {
        const node = nodes[index]!;
        if (node.kind === 'declaration') {
          const position = occurrence++;
          const property = propertyKey(node.property);
          if (written.has(property)) removed.add(position);
          else written.add(property);
          continue;
        }
        if (node.kind === 'style-rule') {
          const selector = canonical(node.selector, 'selectorList');
          visit(
            node.children,
            node.relative && selector === '&' && context.rootSelector
              ? context
              : {
                  ...context,
                  selectors: [...context.selectors, JSON.stringify([node.relative, selector])],
                  rootSelector: false,
                },
          );
          continue;
        }
        const name = node.name;
        const prelude = node.prelude ? canonical(node.prelude, 'atrulePrelude', name.slice(1)) : '';
        const group = JSON.stringify([name, prelude]);
        if (conditional.has(name)) {
          visit(node.children, {
            ...context,
            conditions: [...new Set([...context.conditions, group])].sort(),
          });
        } else {
          // layer/scope/starting-style 保留有序边界，不做跨边界的逻辑等价推断。
          visit(node.children, {
            boundaries: [...context.boundaries, contextKey(context), group],
            selectors: [],
            conditions: [],
            rootSelector: context.rootSelector,
          });
        }
      }
    }
    visit(program, { boundaries: [], selectors: [], conditions: [], rootSelector: true });
    if (!removed.size) return program;
    occurrence = 0;
    function filter(nodes: StyleProgram): StyleProgram {
      let changed = false;
      const result: StyleNode[] = [];
      for (let index = nodes.length - 1; index >= 0; index--) {
        const node = nodes[index]!;
        if (node.kind === 'declaration') {
          if (removed.has(occurrence++)) {
            changed = true;
            continue;
          }
          result.push(node);
        } else {
          const children = filter(node.children);
          if (children !== node.children) {
            changed = true;
            result.push(Object.freeze({ ...node, children }));
          } else result.push(node);
        }
      }
      // 空 layer 可能建立层顺序，保留空结构；没有覆盖的子树复用原身份。
      return changed ? Object.freeze(result.reverse()) : nodes;
    }
    return filter(program);
  }
  return Object.assign(normalize, { clear: () => syntax.clear() });
}

/** 普通构建只在结束时整理一次，先完整执行用户函数，再替换最终声明。 */
export function normalizeStyleProgram(program: StyleProgram): StyleProgram {
  if (!program.length || (program.length === 1 && program[0]!.kind === 'declaration'))
    return program;
  return createStyleNormalizer()(program);
}
