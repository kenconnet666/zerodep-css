<script lang="ts">
  import { untrack } from 'svelte';
  import { provideStyleContext, type StyleContext } from '@zerodep-css/svelte';
  import BoundStyles from './BoundStyles.svelte';
  import ThemeApp from './ThemeApp.svelte';
  let {
    context,
    initialWidth,
    record,
  }: { context: StyleContext; initialWidth: number; record: (kind: string) => void } = $props();
  provideStyleContext(untrack(() => context));
</script>

<div id="theme-portal"></div>
<ThemeApp initial={initialWidth === 20 ? 'red' : 'blue'} />
<section data-instance="a"><BoundStyles {initialWidth} {record} /></section>
<section data-instance="b"><BoundStyles initialWidth={40} {record} /></section>
