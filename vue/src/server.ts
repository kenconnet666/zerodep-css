export * from '@zerodep-css/core';
import { resolveCssHost } from './server-host.js';
import type { CssInput } from '@zerodep-css/core';
export {
  createServerCssHost,
  withCssHost,
  serializeCssRules,
  type ServerCssHost,
} from '@zerodep-css/core/server';
export { createCssContext } from './context.js';
export { provideCssHost } from './server-host.js';
export const css = (...parts: CssInput[]): string => resolveCssHost().css(...parts);
export const keyframes = (...parts: string[]): string => resolveCssHost().keyframes(...parts);
export const globalCss = (key: string, ...parts: string[]): void =>
  resolveCssHost().globalCss(key, ...parts);
