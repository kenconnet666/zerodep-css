// 官方便携 ESM 产物没有独立类型子路径，复用相同版本的根声明。
declare module 'css-tree/dist/csstree.esm' {
  export { parse, walk, ident, lexer, fork, generate, tokenTypes } from 'css-tree';
}
