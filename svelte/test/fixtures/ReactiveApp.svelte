<script lang="ts">
  import { untrack } from 'svelte';
  import type { StyleHost } from '@zerodep-css/svelte';
  import { styles } from './styles.js';
  import ReactiveStyles from './ReactiveStyles.svelte';
  let {
    host,
    initialColor,
    record,
  }: { host?: StyleHost; initialColor: string; record: (kind: string) => void } = $props();
  untrack(() => host)?.provide();
  const css = styles.useCss();
  let show = $state(true);
</script>

<div data-global>global</div>
<div
  data-survivor
  class={css((s) => {
    s.padding.px(7);
  })}
>
  survivor
</div>
<button data-toggle onclick={() => (show = !show)}>toggle</button>
{#if show}
  <ReactiveStyles {initialColor} {record} />
{/if}
