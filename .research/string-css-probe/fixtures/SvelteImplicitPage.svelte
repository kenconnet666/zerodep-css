<script lang="ts">
  import Root from './SvelteImplicitRoot.svelte';
  const controls: Array<{ step(): void; reorder(): void }> = [];
</script>

<div data-global="24"></div>
<div data-global="40"></div>
<button data-binding-step onclick={() => controls[0]!.step()}>更新绑定</button>
<button data-binding-reorder onclick={() => controls[0]!.reorder()}>重排</button>
<Root expose={(index, value) => (controls[index] = value)} />
