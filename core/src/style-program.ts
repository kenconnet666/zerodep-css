import type { CssVariable } from './values.js';

export type CssValue =
  | { readonly kind: 'literal'; readonly value: string | number }
  | { readonly kind: 'variable'; readonly name: CssVariable['name']; readonly fallback?: string }
  | { readonly kind: 'animations'; readonly definitions: readonly KeyframesDefinition[] }
  | { readonly kind: 'raw'; readonly value: string | number };

export interface Declaration {
  readonly kind: 'declaration';
  readonly property: string;
  readonly value: CssValue;
  readonly important: boolean;
}
export interface StyleRule {
  readonly kind: 'style-rule';
  readonly selector: string;
  readonly relative: boolean;
  readonly children: StyleProgram;
}
export interface StyleGroup {
  readonly kind: 'style-group';
  readonly name: '@media' | '@supports' | '@container' | '@layer' | '@scope' | '@starting-style';
  readonly prelude: string;
  readonly children: StyleProgram;
}
export type StyleNode = Declaration | StyleRule | StyleGroup;
export type StyleProgram = readonly StyleNode[];
export interface Frame {
  readonly offsets: readonly string[];
  readonly declarations: readonly Declaration[];
}
export interface KeyframesDefinition {
  readonly kind: 'keyframes';
  readonly frames: readonly Frame[];
}
export interface DescriptorBlock {
  readonly kind: 'descriptor-block';
  readonly name: string;
  readonly prelude: string;
  readonly declarations: readonly Declaration[];
}
export interface PageRule {
  readonly kind: 'page-rule';
  readonly selector: string;
  readonly children: readonly (Declaration | DescriptorBlock)[];
}
export interface GlobalGroup {
  readonly kind: 'global-group';
  readonly name: StyleGroup['name'];
  readonly prelude: string;
  readonly children: readonly GlobalNode[];
}
export interface Statement {
  readonly kind: 'statement';
  readonly name: '@import' | '@namespace' | '@layer';
  readonly prelude: string;
}
export interface RawRule {
  readonly kind: 'raw-rule';
  readonly css: string;
}
export type GlobalNode =
  StyleRule | GlobalGroup | KeyframesDefinition | DescriptorBlock | PageRule | Statement | RawRule;
export interface StylesheetDefinition {
  readonly kind: 'stylesheet';
  readonly rules: readonly GlobalNode[];
}
