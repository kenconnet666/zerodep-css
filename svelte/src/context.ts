import { getContext, setContext } from 'svelte';
import type { StyleContext } from '#runtime';

const key = Symbol('zerodep-css');
export function provideStyleContext(context: StyleContext): void {
  setContext(key, context);
}
export function resolveContext(explicit?: StyleContext): StyleContext {
  const context = explicit ?? getContext<StyleContext | undefined>(key);
  if (!context) throw new Error('Provide a style context or pass one explicitly.');
  context.assertActive();
  return context;
}
