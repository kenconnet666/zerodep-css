<script lang="ts">
  import { untrack } from 'svelte';
  import type { StyleHost } from '@zerodep-css/svelte';
  import { styles } from './ProjectStyles.js';
  import SharedGlobal from './SharedGlobal.svelte';

  let {
    host,
    initial = 'red',
    mode = 'getter',
  }: {
    host: StyleHost;
    initial?: string;
    mode?: 'getter' | 'static' | 'inherit';
  } = $props();
  const setup = untrack(() => ({ host, initial, mode }));
  let brand = $state(setup.initial);
  let globalTick = $state(0);
  let globalRuns = 0;
  export function bumpGlobal() {
    globalTick++;
  }
  export function readGlobalRuns() {
    return globalRuns;
  }
  let sharedFirst = $state(true),
    sharedSecond = $state(true);
  setup.host.provide();
  setup.host.provide();
  styles.provideTheme(
    setup.mode === 'getter'
      ? () => ({ color: { brand } })
      : setup.mode === 'static'
        ? { color: { brand: setup.initial } }
        : null,
  );
  const css = styles.useCss();
  const current = styles.useTheme();
  const global = styles.useGlobalCss('project-body', (g) => {
    globalRuns++;
    void globalTick;
    g.rule('body', (s) => s.control());
  });
</script>

<button data-project-change onclick={() => (brand = brand === 'red' ? 'blue' : 'red')}
  >change</button
>
<div data-project-color data-theme={current().color.brand} class={css((s) => s.color.brand)}>
  project
</div>
<span data-project-global={global.id}></span>
<button data-shared-first onclick={() => (sharedFirst = !sharedFirst)}>toggle first</button>
<button data-shared-second onclick={() => (sharedSecond = !sharedSecond)}>toggle second</button>
<div data-shared-global-target>shared</div>
{#if sharedFirst}<SharedGlobal />{/if}
{#if sharedSecond}<SharedGlobal />{/if}
