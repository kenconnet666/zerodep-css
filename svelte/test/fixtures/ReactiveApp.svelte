<script lang="ts">
  import { provideStyleContext, useStyleRuntime, type StyleContext } from '@zerodep-css/svelte';
  import ReactiveStyles from './ReactiveStyles.svelte';
  let {
    context,
    initialColor,
    record,
  }: { context: StyleContext; initialColor: string; record: (kind: string) => void } = $props();
  // context 是组件树生命周期内固定的请求/应用实例。
  // svelte-ignore state_referenced_locally
  provideStyleContext(context);
  const { css } = useStyleRuntime();
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
