import { bindingId, setBindings, releaseBindings } from '@zerodep-css/core/browser';
import { createVueBindings } from './binding-runtime.js';
export const useBindings = (file: string, locations?: Readonly<Record<string, string>>) =>
  createVueBindings(file, { bindingId, setBindings, releaseBindings }, locations);
