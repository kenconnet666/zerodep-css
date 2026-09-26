<script lang="ts">
  import { untrack } from 'svelte';
  import { css } from '@zerodep-css/svelte';
  import { themes } from '@zerodep-css/core/theme';
  import { ProjectCss } from '../../core/examples/preset-theme.js';
  import { provideCss } from './preset-context.js';
  import Content from './ThemeContent.svelte';
  let { initialDark = false }: { initialDark?: boolean } = $props();
  const s = provideCss(new ProjectCss());
  const light = css(themes.light),
    dark = css(themes.dark);
  const nested = css('--z-theme-text:#c026d3;');
  const brand = css(s.color._brand);
  let isDark = $state(untrack(() => initialDark)),
    override = $state(true);
</script>

<section class={isDark ? dark : light} data-preset-theme={initialDark ? 'dark' : 'light'}>
  <button data-theme-toggle onclick={() => (isDark = !isDark)}>亮暗切换</button>
  <button data-theme-override onclick={() => (override = !override)}>子树覆盖</button>
  <Content label="root" />
  <div class={override ? nested : undefined}><Content label="nested" /></div>
  <Content label="sibling" />
  <div data-theme-brand class={brand}>项目扩展</div>
</section>
