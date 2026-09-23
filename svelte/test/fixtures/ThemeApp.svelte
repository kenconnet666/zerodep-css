<script lang="ts">
  import { untrack, onDestroy } from 'svelte';
  import { spacing, appStyles } from './theme';
  import ThemeLeaf from './ThemeLeaf.svelte';
  import ThemeBranch from './ThemeBranch.svelte';
  let { initial }: { initial: string } = $props();
  let brand = $state(untrack(() => initial));
  let portalHost: HTMLDivElement | undefined;
  let gap = $state('4px');
  appStyles.provideTheme(() => ({ color: { brand } }));
  appStyles.provideTheme(spacing, () => ({ gap }));
  const css = appStyles.useCss();
  const current = appStyles.useTheme();
  const currentSpacing = appStyles.useTheme(spacing);
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
  })}
>
  parent
</div>
<ThemeLeaf name="sibling" />
<ThemeBranch name="child" />
<ThemeBranch name="inherited" mode="inherit" />
<ThemeBranch name="reset" mode="defaults" />
<div bind:this={portalHost}><ThemeLeaf name="portal" /></div>
