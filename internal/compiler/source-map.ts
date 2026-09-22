import { encode } from '@jridgewell/sourcemap-codec';
import type MagicString from 'magic-string';

/** 生成表达式携带临时位置标记，完成后移除；相同 getter 文本也能映射到各自来源。 */
export function sourceMapper(source: string, filename: string) {
  let prefix = '__zerodep_map_';
  while (source.includes(prefix)) prefix += '_';
  const expressions: number[] = [];
  const references = new Map<string, number>();
  const position = (text: string, offset: number) => {
    const before = text.slice(0, offset);
    return { line: before.split('\n').length - 1, column: offset - before.lastIndexOf('\n') - 1 };
  };
  return {
    reference(name: string, offset: number): void {
      const existing = references.get(name);
      if (existing !== undefined && existing !== offset)
        throw new Error('Compiled variable identity collision.');
      references.set(name, offset);
    },
    expression(text: string, offset: number): string {
      const id = expressions.push(offset) - 1;
      return `/*${prefix}${id}*/${text}`;
    },
    finish(output: MagicString) {
      const marked = output.toString();
      const options = { source: filename, includeContent: true, hires: true };
      const decoded = output.generateDecodedMap(options);
      const removals = new Map<number, { column: number; length: number; offset: number }[]>();
      const matcher = new RegExp(`/\\*${prefix}(\\d+)\\*/`, 'g');
      const code = marked.replace(matcher, (marker: string, id: string, index: number) => {
        const point = position(marked, index);
        const row = removals.get(point.line) ?? [];
        row.push({ column: point.column, length: marker.length, offset: expressions[Number(id)]! });
        removals.set(point.line, row);
        return '';
      });
      for (const [line, removed] of removals) {
        const row = decoded.mappings[line] ?? [];
        const shifted: typeof row = [];
        for (const segment of row) {
          if (removed.some((r) => segment[0] >= r.column && segment[0] < r.column + r.length))
            continue;
          const copy = [...segment] as (typeof row)[number];
          copy[0] -= removed
            .filter((r) => r.column + r.length <= segment[0])
            .reduce((sum, r) => sum + r.length, 0);
          shifted.push(copy);
        }
        let shift = 0;
        for (const item of removed) {
          const original = position(source, item.offset);
          shifted.push([item.column - shift, 0, original.line, original.column]);
          shift += item.length;
        }
        decoded.mappings[line] = shifted;
      }
      // 变量标识由源位置生成且已检查唯一性，可以为 CSS 中的引用保留额外锚点。
      for (const [name, offset] of references)
        for (
          let index = code.indexOf(name);
          index !== -1;
          index = code.indexOf(name, index + name.length)
        ) {
          const generated = position(code, index),
            original = position(source, offset);
          (decoded.mappings[generated.line] ??= []).push([
            generated.column,
            0,
            original.line,
            original.column,
          ]);
        }
      for (let line = 0; line < decoded.mappings.length; line++) {
        const byColumn = new Map(decoded.mappings[line]!.map((segment) => [segment[0], segment]));
        decoded.mappings[line] = [...byColumn.values()].sort((a, b) => a[0] - b[0]);
      }
      const map = output.generateMap(options);
      map.mappings = encode(decoded.mappings);
      return { code, map };
    },
  };
}
