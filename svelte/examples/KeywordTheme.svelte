<script lang="ts">
  import { Css } from 'zerodep-css-svelte';
  import {
    LightKeywords,
    DarkKeywords,
    type AppKeywords,
  } from '../../core/examples/injected-keywords.js';
  import { provideCss } from './keyword-context.js';
  import Content from './KeywordContent.svelte';
  let current = $state<AppKeywords>(new LightKeywords());
  provideCss(new Css(() => current));
  let width = $state(12);
</script>

<button data-keyword-dark onclick={() => (current = new DarkKeywords())}>暗色</button>
<button data-keyword-light onclick={() => (current = new LightKeywords())}>亮色</button>
<button data-keyword-width onclick={() => (width += 6)}>绑定宽度</button>
<Content label="root" {width} /><Content label="nested" nested /><Content label="sibling" {width} />
