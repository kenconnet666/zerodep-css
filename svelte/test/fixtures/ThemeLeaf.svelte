<script lang="ts">
  import { defineTheme } from '@zerodep-css/svelte';
  import { appStyles, spacing } from './theme';
  let { name }: { name: string } = $props();
  const css = appStyles.useCss();
  const current = appStyles.useTheme();
  const gap = appStyles.useTheme(spacing);
  const fallback = appStyles.useTheme(defineTheme('unprovided', { opacity: 0.5 }));
  const values = $derived(current());
</script>

<div
  data-custom-unit={name}
  class={css((s) => {
    s.width.px(10 + 1);
  })}
></div>

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
  })}
>
  theme
</div>
