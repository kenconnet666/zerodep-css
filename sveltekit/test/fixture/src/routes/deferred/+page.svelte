<script lang="ts">
  import { styles } from '$lib/styles';

  const css = styles.useCss();
</script>

<div data-deferred class={css((s) => s.color.red)}>deferred response</div>
