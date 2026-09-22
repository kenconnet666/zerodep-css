<script lang="ts">
  import { useStyleRuntime } from '@zerodep-css/svelte';
  const { css } = useStyleRuntime();
  let width = $state(10);
</script>

<button data-auto-change onclick={() => width++}>automatic</button>
<div
  data-auto
  class={css((s) => {
    s.name('automatic');
    s.width.px(width);
    if (true) s.padding.px(2, width);
    s.hover((h) => {
      h.width.px(width + 1);
    });
  })}
></div>
