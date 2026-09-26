import { resolveCssHost } from './server-host.js';
import { createVueBindings } from './binding-runtime.js';
export const useBindings = (file: string) => createVueBindings(file, resolveCssHost());
