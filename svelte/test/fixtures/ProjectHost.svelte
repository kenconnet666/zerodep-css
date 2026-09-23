<script lang="ts">
  import { untrack } from 'svelte';
  import type { StyleHost } from '../../src/styles.js';
  import { styles } from './ProjectStyles.js';

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
  const global = styles.useGlobalCss('project-body', (g) => g.rule('body', (s) => s.control()));
</script>

<button data-project-change onclick={() => (brand = brand === 'red' ? 'blue' : 'red')}
  >change</button
>
<div data-project-color data-theme={current().color.brand} class={css((s) => s.color.brand)}>
  project
</div>
<span data-project-global={global.id}></span>
