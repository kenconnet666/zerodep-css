<script lang="ts">
  import { untrack } from 'svelte';
  import { AppCss, themes, type ExampleProps } from '../../core/examples/theme.js';
  import { provideCss } from './context.js';
  import Styles from './Styles.svelte';

  let { initialWidth = 24, initialTheme = 'light' }: ExampleProps = $props();
  // initial 参数只用于本次挂载 / SSR 的初始化，后续切换由本地状态负责。
  provideCss(new AppCss(untrack(() => initialWidth)));
  let theme = $state(untrack(() => initialTheme));
</script>

<main
  style:--demo-text={themes[theme]['--demo-text']}
  style:--demo-hover={themes[theme]['--demo-hover']}
>
  <button data-action="theme" onclick={() => (theme = theme === 'light' ? 'dark' : 'light')}
    >切换主题</button
  >
  <Styles />
</main>
