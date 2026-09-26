<script lang="ts">
  import Demo from '@example';
  let { data } = $props();
</script>

{#key data.width + data.theme}<Demo initialWidth={data.width} initialTheme={data.theme} />{/key}
