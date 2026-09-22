/** 编译器专用入口；默认浏览器入口不导入本模块。 */
export interface CompilerOptions {
  root?: string;
}
export interface TransformResult {
  code: string;
  map: {
    version: 3;
    sources: string[];
    sourcesContent?: (string | null)[];
    names: string[];
    mappings: string;
    toString(): string;
    toUrl(): string;
  };
}
export declare function transformBx(
  source: string,
  filename: string,
  options?: CompilerOptions,
): TransformResult | null;
export declare function bxPlugin(options?: CompilerOptions): {
  name: string;
  enforce: 'pre';
  configResolved(config: { root: string }): void;
  transform(source: string, id: string): TransformResult | null;
};
