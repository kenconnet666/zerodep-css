import { fork, ident, tokenTypes, type CssNode, type ParseOptions } from 'css-tree';
import { valuePriorityOffset } from './css-value.js';

type RawValue = Extract<CssNode, { type: 'Raw' }>;
interface DeclarationParser {
  skipSC(): void;
  consume(type: number): string;
  eat(type: number): void;
  Raw(until: (code: number) => number, excludeWhitespace: boolean): RawValue;
}

/** 扩展声明的值读取，其他 CSS 结构继续复用 CSSTree。
 * 默认解析器还识别 !ie 等旧 hack，并会因未知值语法提前拒绝 raw；这里仅拆出标准 important。
 */
const syntax = /* @__PURE__ */ fork({
  node: {
    Declaration: {
      parse(this: DeclarationParser): CssNode {
        this.skipSC();
        const property = this.consume(tokenTypes.Ident);
        this.skipSC();
        this.eat(tokenTypes.Colon);
        // 仅在本层分号停止；Raw 的 balanced 扫描保留函数/块内部的分号。
        const raw = this.Raw((code) => (code === 0x3b ? 1 : 0), false);
        const priority = valuePriorityOffset(raw.value, ident.decode(property).startsWith('--'));
        return {
          type: 'Declaration',
          property,
          important: priority !== undefined,
          value: priority === undefined ? raw : { ...raw, value: raw.value.slice(0, priority) },
        };
      },
    },
  },
});

export function parseStructure(text: string, options: ParseOptions): CssNode {
  return syntax.parse(text, options);
}
