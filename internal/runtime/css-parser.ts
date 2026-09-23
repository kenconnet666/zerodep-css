/// <reference path="./css-tree-dist.d.ts" />
import * as portable from 'css-tree/dist/csstree.esm';
import type * as CssTree from 'css-tree';

// 根 ESM 的数据加载依赖 import.meta 相对路径，SSR 二次打包会破坏它。
// 使用官方便携产物同时服务浏览器与 Node；声明仍指向原类型，不暴露无类型子路径。
export const parse: typeof CssTree.parse = portable.parse;
export const walk: typeof CssTree.walk = portable.walk;
export const ident: typeof CssTree.ident = portable.ident;
export const lexer: typeof CssTree.lexer = portable.lexer;
export const fork: typeof CssTree.fork = portable.fork;
export const generate: typeof CssTree.generate = portable.generate;
export const tokenTypes: typeof CssTree.tokenTypes = portable.tokenTypes;
