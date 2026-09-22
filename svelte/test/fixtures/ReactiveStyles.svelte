<script lang="ts">
  import { useGlobalCss, useStyleRuntime } from '@zerodep-css/svelte';
  let { initialColor, record }: { initialColor: string; record: (kind: string) => void } = $props();
  const { css } = useStyleRuntime();
  let width = $state(20);
  // 初始属性只作为本地可编辑状态的初值。
  // svelte-ignore state_referenced_locally
  let color = $state(initialColor);
  let enabled = $state(true);
  let unrelated = $state(0);
  const external = $derived(
    css((s) => {
      record('derived');
      s.width.px(width);
      s.color.raw(enabled ? color : 'green');
    }),
  );
  const global = useGlobalCss('fixture/global', (g) => {
    record('global');
    g.rule('[data-global]', (s) => s.color.raw(color));
  });
</script>

<div
  data-inline
  class={css((s) => {
    record('inline');
    s.width.px(width);
    s.color.raw(enabled ? color : 'green');
  })}
>
  inline
</div>
<div data-derived class={external}>derived</div>
<div
  data-shared
  class={css((s) => {
    s.padding.px(7);
  })}
>
  shared
</div>
<button data-width onclick={() => width++}>width</button>
<button data-color onclick={() => (color = color === 'red' ? 'blue' : 'red')}>color</button>
<button data-branch onclick={() => (enabled = !enabled)}>branch</button>
<button data-unrelated onclick={() => unrelated++}>{unrelated}</button>
<button data-stop-global onclick={() => global.dispose()}>stop global</button>
