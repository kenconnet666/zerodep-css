/// <reference path="./css-tree-subpaths.d.ts" />
import { tokenize as scan, tokenTypes as types } from 'css-tree/tokenizer';
import { ident as identifier } from 'css-tree/utils';
import type * as CssTree from 'css-tree';

// 根入口的 tokenize 来自完整 syntax 实例；直接使用官方子路径避免保留整套解析器。
// 显式类型使发布声明只引用已有的根类型，不要求消费者声明第三方子路径。
export const tokenize: typeof CssTree.tokenize = scan;
export const tokenTypes: typeof CssTree.tokenTypes = types;
export const ident: typeof CssTree.ident = identifier;
