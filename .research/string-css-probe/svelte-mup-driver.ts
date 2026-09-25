import { hydrate, mount, tick, unmount } from 'svelte';
import { hydrateCss, type CssRule } from '@zerodep-css/svelte';
import Component from './SvelteMup.svelte';
import type { AppCss } from './svelte-mup-context.ts';

export async function start(target: HTMLElement, restore = false) {
  let rootAuthor: AppCss | undefined;
  let childAuthor: AppCss | undefined;
  let controls: { step(): void; preset(): void } | undefined;
  const component = (restore ? hydrate : mount)(Component, {
    target,
    props: {
      expose(author: AppCss) {
        rootAuthor = author;
      },
      childExpose(author: AppCss, value: typeof controls) {
        childAuthor = author;
        controls = value;
      },
    },
  });
  await tick();
  if (!rootAuthor || rootAuthor !== childAuthor || !controls)
    throw new Error('Svelte CSS context changed identity.');
  return {
    step: async () => {
      controls.step();
      await tick();
    },
    preset: async () => {
      controls.preset();
      await tick();
    },
    author: rootAuthor,
    dispose: async () => unmount(component),
  };
}

export function restore(rules: CssRule[]): void {
  hydrateCss(rules);
}
