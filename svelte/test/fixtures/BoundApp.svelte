<script lang="ts">
  import { untrack } from 'svelte';
  import { provideStyleContext, type StyleContext } from '@zerodep-css/svelte';
  import BoundStyles from './BoundStyles.svelte';
  let {
    context,
    initialWidth,
    record,
  }: { context: StyleContext; initialWidth: number; record: (kind: string) => void } = $props();
  provideStyleContext(untrack(() => context));
</script>

<section data-instance="a"><BoundStyles {initialWidth} {record} /></section>
<section data-instance="b"><BoundStyles initialWidth={40} {record} /></section>
