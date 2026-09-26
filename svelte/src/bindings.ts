import { bindingId, setBindings } from '@zerodep-css/core/browser';
import { createSvelteBindings } from './binding-runtime.js';
export const useBindings = (file: string, id: string, schedule: (run: () => void) => () => void) =>
  createSvelteBindings(file, id, schedule, { bindingId, setBindings });
