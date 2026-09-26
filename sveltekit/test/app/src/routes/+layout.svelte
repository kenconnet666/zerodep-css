<script lang="ts">
  import { onMount } from 'svelte';
  let { children } = $props();
  let ready = $state(false);
  onMount(() => {
    ready = true;
  });
</script>

<div data-ready={ready}>
  <a href="/prerender" data-nav="prerender">预渲染页</a>
  <a href="/" data-nav="home">主页</a>
  {@render children()}
</div>
