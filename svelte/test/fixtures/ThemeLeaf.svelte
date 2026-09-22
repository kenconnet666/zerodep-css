<script lang="ts">
  import { useStyleRuntime } from '@zerodep-css/svelte';
  import { AppCss, spacing } from './theme';
  let { name }: { name: string } = $props();
  const { css } = useStyleRuntime();
</script>

<div
  data-theme-leaf={name}
  class={css((s) => {
    s.name('themed-content');
    s.color.brand;
    s.backgroundColor.text;
    s.padding.raw(spacing.tokens.gap);
  }, AppCss)}
>
  theme
</div>
