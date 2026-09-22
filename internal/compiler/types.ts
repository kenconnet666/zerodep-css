/** 编译器入口只公开源码转换结果，不暴露内部 AST 和框架私有节点。 */
export interface CompilerOptions {
  root?: string;
  /** 开发期记录项目相对的样式调用位置；不改变 CSS 哈希。 */
  debug?: boolean;
}
export interface TransformResult {
  code: string;
  map: {
    version: number;
    sources: string[];
    sourcesContent?: (string | null)[];
    names: string[];
    mappings: string;
    toString(): string;
    toUrl(): string;
  };
}
export interface CompilerPlugin {
  name: string;
  enforce: 'pre';
  configResolved(config: { root: string; command?: string; isProduction?: boolean }): void;
  transform(source: string, id: string): TransformResult | null;
}
export type SourceTransform = (
  source: string,
  filename: string,
  options?: CompilerOptions,
) => TransformResult | null;

export interface ValueBinding {
  name: string;
  expression: string;
  offset: number;
}
export interface TransformedExpression {
  code: string;
  bindings: ValueBinding[];
  direct: boolean;
}
