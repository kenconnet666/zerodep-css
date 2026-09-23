// CSSTree 官方提供轻量子路径；当前 @types 只描述根入口，复用其同一函数类型。
declare module 'css-tree/tokenizer' {
  export { tokenize, tokenTypes } from 'css-tree';
}
declare module 'css-tree/utils' {
  export { ident } from 'css-tree';
}
