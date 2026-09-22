export { keyframes, globalCss } from './builder.js';
export { Css } from './css.js';
export type { CssConstructor, CssConstruction } from './css.js';
export type { StyleConfig, StyleSource } from './style-metadata.js';
export { css, injectGlobal, createRuntime } from './runtime.js';
export { createStyleContext } from './context.js';
export { defineTheme } from './theme.js';
export { readTheme } from './style-scope.js';
export type { ThemeScope, UseStyleRuntimeOptions } from './style-scope.js';
export type {
  ThemeTree,
  ThemeDefinition,
  ThemeValues,
  ThemeTokens,
  ThemeOverrides,
} from './theme.js';
export type { StyleContext, StyleContextManifest, StyleContextOptions } from './context.js';
export type {
  StyleRuntime,
  RuntimeOptions,
  RuntimeStats,
  GlobalStyleHandle,
  StyleManifest,
} from './runtime.js';
export type { OutputConfig, StyleRecord } from './serialize.js';
export { cssVar } from './values.js';
export type { CssVariable } from './values.js';
export type {
  DeclarationBuilder,
  DeclarationFactory,
  StyleFactory,
  FrameBuilder,
  FrameOffset,
  GlobalBuilder,
  GlobalFactory,
  StylesheetBuilder,
  StylesheetFactory,
  PageBuilder,
  PageMarginBox,
} from './builder-types.js';
export type {
  StyleProperties,
  DescriptorBuilders,
  DescriptorRule,
  SimplePseudo,
  FunctionalPseudo,
} from './generated/properties.js';
// 资源定义是作者 API 的返回类型；内部 IR 节点不作为根入口的兼容承诺。
export type { KeyframesDefinition, StylesheetDefinition } from './style-program.js';
