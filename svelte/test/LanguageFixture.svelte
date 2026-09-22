<script lang="ts">
  import '@zerodep-css/core';

  // 只验证原生 Svelte 类型检查链路，不是 CSS 框架 API。
  let { count = 1 }: { count?: number } = $props();
  const label = $derived(count.toFixed(0));
</script>

<span>{label}</span>
