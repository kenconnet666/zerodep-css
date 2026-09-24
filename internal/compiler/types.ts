/** 编译器入口只公开源码转换结果，不暴露内部 AST 和框架私有节点。 */
export interface CompilerOptions {
  root?: string;
  /** 显式启用时另返回未优化原因；开发 serve 默认只记录源码位置。 */
  debug?: boolean;
  /** 严格 CSP 禁止 style 属性时使用 runtime；静态准备和源码诊断仍可保留。 */
  bindings?: 'variables' | 'runtime';
}
export type CompilerDiagnosticCode =
  | 'custom-author'
  | 'unknown-project-options'
  | 'script-snapshot'
  | 'template-context'
  | 'style-attribute'
  | 'dynamic-structure'
  | 'csp-bindings';
/** 仅描述已确认的本库 css 调用；code 稳定，message 供人阅读。 */
export interface CompilerDiagnostic {
  readonly code: CompilerDiagnosticCode;
  readonly file: string;
  readonly line: number;
  readonly column: number;
  readonly message: string;
}
export interface TransformResult {
  code: string;
  readonly diagnostics?: readonly CompilerDiagnostic[];
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
  configResolved(config: {
    root: string;
    command?: string;
    isProduction?: boolean;
    logger?: { info(message: string): void };
  }): void;
  transform(source: string, id: string): TransformResult | null;
}
export type SourceTransform = (
  source: string,
  filename: string,
  options?: CompilerOptions,
) => TransformResult | null;

export interface TransformedExpression {
  code: string;
  /** 原模板表达式内的局部绑定表；动态回调在原操作位置写入它。 */
  bindingsLocal?: string;
}
