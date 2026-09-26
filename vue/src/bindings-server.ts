import { resolveCssHost } from './server-host.js';
import { createVueBindings } from './binding-runtime.js';
export const useBindings = (file: string, locations?: Readonly<Record<string, string>>) =>
  createVueBindings(file, resolveCssHost(), locations);
