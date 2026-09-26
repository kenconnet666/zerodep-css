<script lang="ts">
  import { Css, css } from '@zerodep-css/svelte';
  let { index, expose } = $props<{
    index: number;
    expose: (step: () => void, noise: () => void) => void;
  }>();
  const s = new Css();
  let width = $state(20 + index);
  let noise = $state(0);
  // 探针只替换这一标记，生产插件不增加模板语法。
  /* DERIVED_DECLARATION */
  expose(
    () => {
      width++;
    },
    () => {
      noise++;
    },
  );
</script>

<div data-row data-noise={noise} class={[s.color.red, s.width.px(width)]}></div>
