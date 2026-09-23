<script lang="ts">
  import { useStyleRuntime } from '@zerodep-css/svelte';
  const { css } = useStyleRuntime();
  let width = $state(10);
  let siblingWidth = $state(10);
  const colors = ['red', 'blue', 'initial', undefined];
  let colorIndex = 0;
  let color = $state<string | undefined>(colors[0]);
  const sizes = [null, 24, 30, undefined];
  let sizeIndex = 0;
  let size = $state<number | null | undefined>(null);
</script>

<button
  data-nullable-change
  onclick={() => {
    sizeIndex = (sizeIndex + 1) % sizes.length;
    size = sizes[sizeIndex];
  }}>nullable</button
>
<div
  data-nullable
  class={css((s) => {
    s.width.px(16);
    s.width.px(size);
    s.padding.px(4);
    s.padding.px(2, size);
  })}
></div>

<button data-sibling-change onclick={() => (siblingWidth = 20)}>sibling</button>
<div
  data-sibling-source
  class={css((s) => {
    s.selector('& + [data-auto-sibling]', (n) => {
      n.width.px(siblingWidth);
    });
  })}
></div>
<div data-auto-sibling></div>

<button
  data-auto-color
  onclick={() => {
    colorIndex = (colorIndex + 1) % colors.length;
    color = colors[colorIndex];
  }}>color</button
>
<div
  data-auto-value
  class={css((s) => {
    s.name('automatic-color');
    s.color.red;
    s.color.raw(color);
  })}
>
  value
</div>

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
