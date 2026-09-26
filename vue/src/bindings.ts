import { bindingId, setBindings } from '@zerodep-css/core/browser';
import { createVueBindings } from './binding-runtime.js';
export const useBindings = (file: string) => createVueBindings(file, { bindingId, setBindings });
