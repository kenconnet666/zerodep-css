import { requireHost } from '@zerodep-css/core/server';
import { createSvelteBindings } from './binding-runtime.js';
export const useBindings = (file: string, id: string, schedule: (run: () => void) => () => void) =>
  createSvelteBindings(file, id, schedule, requireHost());
