// 由适配器内部消费；共享作者值始终保留 core 的同一模块身份。
export * from '@zerodep-css/core';
export { keyframes, globalCss } from './builder.js';
export { css, injectGlobal, createRuntime } from './runtime.js';
export { createStyleContext } from './context.js';
export * from './style-scope.js';
export type { StyleContext, StyleContextManifest, StyleContextOptions } from './context.js';
export type {
  StyleRuntime,
  RuntimeOptions,
  RuntimeStats,
  GlobalStyleHandle,
  StyleManifest,
} from './runtime.js';
export type { OutputConfig, StyleRecord } from './serialize.js';
export { withStyleSource, prepareStyle } from '@zerodep-css/core/internal';
export { createDeclarationBinding, bindUnit, bindValue } from './binding.js';
