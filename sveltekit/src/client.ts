import { getContext, onMount, setContext } from 'svelte';
import { createStyles, type StyleHost, type StyleManifest } from '@zerodep-css/svelte';
import { manifestAttribute } from './html.js';

const project = createStyles();
const rootMarker = Symbol('zerodep-css SvelteKit root');
type Hot = { data: Record<string, unknown>; dispose(callback: () => void): void };
const hot = (import.meta as ImportMeta & { hot?: Hot }).hot;
let host = hot?.data['zerodepHost'] as StyleHost | undefined;
let hydrated = (hot?.data['zerodepHydrated'] as boolean | undefined) ?? false;

hot?.dispose(() => {
  hot.data['zerodepHost'] = host;
  hot.data['zerodepHydrated'] = hydrated;
});

function restoredHost(): StyleHost {
  const scripts = document.querySelectorAll<HTMLScriptElement>(`script[${manifestAttribute}]`);
  if (scripts.length !== 1)
    throw new Error('Expected one zerodep-css manifest from createStyleHandle().');
  const manifest = JSON.parse(scripts[0]!.textContent ?? '') as StyleManifest;
  const { namespace, layers, layer } = manifest.runtime.config;
  return project.createHost({
    namespace,
    layers,
    ...(layer === null ? {} : { layer }),
    hydrate: manifest,
    nonce: scripts[0]!.nonce || undefined,
  });
}

/** 应用 host 跨导航及 HMR 复用；根卸载只释放 provide 认领。 */
export function provideStyles(): StyleHost {
  if (getContext(rootMarker))
    throw new Error('provideStyles() must be called only once at the root +layout.svelte.');
  host ??= restoredHost();
  host.provide();
  setContext(rootMarker, true);
  if (!hydrated)
    onMount(() => {
      host!.completeHydration();
      hydrated = true;
    });
  return host;
}
