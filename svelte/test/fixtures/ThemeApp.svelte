<script lang="ts">
  import { untrack, onDestroy } from 'svelte';
  import { provideTheme, useTheme, useStyleRuntime } from '@zerodep-css/svelte';
  import { theme, spacing, AppCss } from './theme';
  import ThemeLeaf from './ThemeLeaf.svelte';
  import ThemeBranch from './ThemeBranch.svelte';
  let { initial }: { initial: string } = $props();
  let brand = $state(untrack(() => initial));
  let portalHost: HTMLDivElement | undefined;
  let gap = $state('4px');
  provideTheme(theme, () => ({ color: { brand } }));
  const scope = provideTheme(spacing, () => ({ gap }));
  const { css } = useStyleRuntime(undefined, scope);
  const current = useTheme(theme, scope);
  const currentSpacing = useTheme(spacing, scope);
  // 移动后的节点仍由本夹具拥有，销毁时清理实际 DOM 位置。
  onDestroy(() => portalHost?.remove());
</script>

<button data-theme-spacing onclick={() => (gap = '8px')}>spacing</button>

<button data-theme-parent-change onclick={() => (brand = brand === 'red' ? 'blue' : 'red')}
  >parent theme</button
>
<button
  data-theme-move
  onclick={() => {
    if (portalHost) document.querySelector('#theme-portal')?.append(portalHost);
  }}>move</button
>
<div
  data-theme-leaf="parent"
  data-theme-values={JSON.stringify(current())}
  data-theme-gap={currentSpacing().gap}
  class={css((s) => {
    s.name('themed-content');
    s.color.brand;
    s.backgroundColor.text;
    s.padding.raw(spacing.tokens.gap);
  }, AppCss)}
>
  parent
</div>
<ThemeLeaf name="sibling" />
<ThemeBranch name="child" />
<ThemeBranch name="reset" reset />
<div bind:this={portalHost}><ThemeLeaf name="portal" /></div>
