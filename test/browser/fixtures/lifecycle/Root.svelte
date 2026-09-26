<script lang="ts">
  import { Css, css } from '@zerodep-css/svelte';
  import Child from './Child.svelte';
  const s = new Css();
  let visible = $state(true);
  const sibling = css(s.height.px(32));
</script>

<button data-toggle onclick={() => (visible = !visible)}>toggle</button>
<div data-sibling class={sibling}>sibling</div>
{#if visible}<Child />{/if}
