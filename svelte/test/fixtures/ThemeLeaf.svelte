<script lang="ts">
  import { defineTheme, useTheme, useStyleRuntime } from '@zerodep-css/svelte';
  import { AppCss, theme, spacing } from './theme';
  let { name }: { name: string } = $props();
  const { css } = useStyleRuntime();
  const current = useTheme(theme);
  const gap = useTheme(spacing);
  const fallback = useTheme(defineTheme('unprovided', { opacity: 0.5 }));
  const values = $derived(current());
</script>

<div
  data-theme-leaf={name}
  data-theme-values={JSON.stringify(values)}
  data-theme-gap={gap().gap}
  data-theme-fallback={fallback().opacity}
  class={css((s) => {
    s.name('themed-content');
    s.color.brand;
    s.backgroundColor.text;
    s.padding.raw(spacing.tokens.gap);
  }, AppCss)}
>
  theme
</div>
