<script lang="ts">
  import { untrack } from 'svelte';
  import { createStyles, type StyleHost } from '@zerodep-css/svelte';
  let { host, initialWidth }: { host: StyleHost; initialWidth: number } = $props();
  untrack(() => host).provide();
  let width = $state(untrack(() => initialWidth));
  const { useCss } = createStyles();
  const css = useCss();
  const rows = [{ id: 'shadow', css: (value: number) => 'local' + value }];
</script>

{#each rows as { id, css } (id)}<div data-csp-shadow class={css(3)}>local</div>{/each}

<button data-csp-change onclick={() => width++}>update</button>
<div
  data-csp-value
  class={css((s) => {
    s.name('csp');
    s.width.px(width);
    s.color.red;
  })}
>
  value
</div>
