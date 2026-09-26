import { requireHost } from '@zerodep-css/core/server';
import { createSvelteBindings } from './binding-runtime.js';
export const useBindings = (
  file: string,
  id: string,
  schedule: (run: () => void) => () => void,
  locations?: Readonly<Record<string, string>>,
) => createSvelteBindings(file, id, schedule, requireHost(), locations, true);
