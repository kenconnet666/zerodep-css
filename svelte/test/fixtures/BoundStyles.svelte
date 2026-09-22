<script lang="ts">
  import { untrack } from 'svelte';
  import { bx as bindValue, useStyleRuntime } from '@zerodep-css/svelte';
  let { initialWidth, record }: { initialWidth: number; record: (kind: string) => void } = $props();
  const { css } = useStyleRuntime();
  // initialWidth 是实例初值，后续变化由组件自己拥有。
  let width = $state(untrack(() => initialWidth));
  let color = $state('red');
  let x = $state(2);
  let y = $state(3);
  let unrelated = $state(0);
  let visible = $state(true);
  let rows = $state<{ id: string; width?: number }[]>([
    { id: 'a', width: 11 },
    { id: 'b', width: 22 },
    { id: 'hidden' },
  ]);
  const shared = $derived(
    css((s) => {
      record('shared');
      s.color.raw(color);
      s.width.px(bindValue(width));
      s.padding.px(1, bindValue(x), 3, bindValue(y));
      s.transform.raw(`translate(${bindValue(x)}px, ${bindValue(y)}px)`);
    }),
  );
</script>

<button
  data-bound
  onclick={() => {
    width++;
    x++;
    y++;
  }}>bound</button
>
<button data-color onclick={() => (color = color === 'red' ? 'blue' : 'red')}>color</button>
<button data-other onclick={() => unrelated++}>{unrelated}</button>
<button data-visible onclick={() => (visible = !visible)}>visible</button>
<button
  data-row
  onclick={() => {
    if (rows[0]?.width !== undefined) rows[0].width++;
  }}>row</button
>
<button data-reorder onclick={() => rows.reverse()}>reorder</button>
<div data-shared class={shared} style="height: 7px; border-top: 2px solid green"></div>
{#if visible}<div data-shared-copy class={shared} style:height="9px"></div>{/if}
<div
  data-inline
  class={css((s) => {
    record('inline');
    s.color.raw(color);
    s.width.px(bindValue(width));
  })}
></div>
{#each rows as row (row.id)}
  {#if row.width !== undefined}
    <div
      data-row-id={row.id}
      class={css((s) => {
        record('row');
        s.height.px(5);
        s.width.px(bindValue(row.width!));
      })}
    ></div>
  {/if}
{/each}
