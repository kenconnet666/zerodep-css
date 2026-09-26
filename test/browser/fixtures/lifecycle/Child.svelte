<script lang="ts">
  import { Css, css } from '@zerodep-css/svelte';
  import { width } from './state.svelte.js';
  const s = new Css();
  let generation = 0;
  let rows = $state(Array.from({ length: 20 }, (_, id) => ({ id, width: id + 10 })));
  const box = css(s.width.px(width.value), s._hover(s.color.blue));
  function replaceRows() {
    generation++;
    rows = Array.from({ length: 20 }, (_, i) => ({ id: generation * 20 + i, width: i + 10 }));
  }
</script>

<button data-replace onclick={replaceRows}>replace</button>
<div data-probe class={box}>initial</div>
{#each rows as row (row.id)}<div data-row class={css(s.width.px(row.width))}></div>{/each}
