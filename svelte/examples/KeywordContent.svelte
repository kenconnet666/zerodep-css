<script lang="ts">
  import { untrack } from 'svelte';
  import { Css, css, bx } from 'zerodep-css-svelte';
  import { DarkKeywords } from '../../core/examples/injected-keywords.js';
  import { provideCss, useCss } from './keyword-context.js';
  let {
    nested = false,
    label,
    width = 12,
  }: { nested?: boolean; label: string; width?: number } = $props();
  // 此示例的作用域在初始化时确定，主题数据本身仍响应更新。
  const s = untrack(() => nested) ? provideCss(new Css(new DarkKeywords())) : useCss();
</script>

<p
  data-keyword-content={label}
  class={css(s.color._primary, s.fontSize._md, s.width.raw(bx(width + 'px')))}
>
  注入主题
</p>
