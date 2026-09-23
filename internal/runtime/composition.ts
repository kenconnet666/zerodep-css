import { generate } from './css-parser.js';
import type { CssNode } from 'css-tree';
import { parseStructure } from './css-syntax.js';
import { compileProgram, type OutputConfig, type StyleRecord } from './serialize.js';
import type { CssValue, StyleNode, StyleProgram } from '@zerodep-css/core/internal';

const groups = new Set([
  '@media',
  '@supports',
  '@container',
  '@layer',
  '@scope',
  '@starting-style',
]);

function children(nodes: readonly CssNode[]): StyleProgram {
  const result: StyleNode[] = [];
  for (const node of nodes) {
    if (node.type === 'Declaration') {
      const value: CssValue = Object.freeze({
        kind: 'raw',
        value: node.value.type === 'Raw' ? node.value.value : generate(node.value),
      });
      result.push(
        Object.freeze({
          kind: 'declaration',
          property: node.property,
          value,
          important: Boolean(node.important),
        }),
      );
    } else if (node.type === 'Rule' && node.prelude) {
      result.push(
        Object.freeze({
          kind: 'style-rule',
          selector: generate(node.prelude),
          relative: true,
          children: children(node.block.children.toArray()),
        }),
      );
    } else if (node.type === 'Atrule' && groups.has('@' + node.name) && node.block) {
      result.push(
        Object.freeze({
          kind: 'style-group',
          name: ('@' + node.name) as Extract<StyleNode, { kind: 'style-group' }>['name'],
          prelude: node.prelude ? generate(node.prelude) : '',
          children: children(node.block.children.toArray()),
        }),
      );
    } else throw new TypeError('Cannot reconstruct a known class style structure.');
  }
  return Object.freeze(result);
}

/** 仅反解本宿主已验证的 canonical class body；严格回写校验避免猜测 CSS 语义。 */
export function reconstructClass(record: StyleRecord, config: OutputConfig): StyleProgram {
  if (record.kind !== 'class') throw new TypeError('Expected a known CSS class.');
  const ast = parseStructure(`.z{${record.body}}`, {
    context: 'stylesheet',
    onParseError(error) {
      throw error;
    },
  });
  if (ast.type !== 'StyleSheet' || ast.children.size !== 1)
    throw new TypeError('Cannot reconstruct a known CSS class.');
  const root = ast.children.first;
  if (root?.type !== 'Rule' || !root.block || generate(root.prelude) !== '.z')
    throw new TypeError('Cannot reconstruct a known CSS class.');
  const program = children(root.block.children.toArray());
  if (compileProgram(program, config, { name: record.name }).record.body !== record.body)
    throw new TypeError('Known CSS class changed while reconstructing its style structure.');
  return program;
}
