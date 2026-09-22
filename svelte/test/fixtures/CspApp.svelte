<script lang="ts">
  import { untrack } from 'svelte';
  import { provideStyleContext, useStyleRuntime, type StyleContext } from '@zerodep-css/svelte';
  let { context, initialWidth }: { context: StyleContext; initialWidth: number } = $props();
  provideStyleContext(untrack(() => context));
  let width = $state(untrack(() => initialWidth));
  const { css } = useStyleRuntime();
  const rows = [{ css: (value: number) => 'local' + value }];
</script>

{#each rows as { css }}<div data-csp-shadow class={css(3)}>local</div>{/each}

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
