export * from '@zerodep-css/core';
import { resolveCssHost } from './server-host.js';
import type { ClassNames } from '@zerodep-css/core';
export {
  createServerCssHost,
  withCssHost,
  serializeCssRules,
  type ServerCssHost,
} from '@zerodep-css/core/server';
export { createCssContext } from './context.js';
export { provideCssHost } from './server-host.js';
export const css = (...parts: string[]): string => resolveCssHost().css(...parts);
export const cx = (...values: ClassNames[]): string => resolveCssHost().cx(...values);
export const keyframes = (...parts: string[]): string => resolveCssHost().keyframes(...parts);
export const globalCss = (key: string, ...parts: string[]): void =>
  resolveCssHost().globalCss(key, ...parts);
