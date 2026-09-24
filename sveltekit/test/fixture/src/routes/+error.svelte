<script lang="ts">
  import { styles } from '$lib/styles';

  const css = styles.useCss();
  styles.useGlobalCss('error-only', (g) => g.rule('body', (s) => s.outlineColor.raw('#fef3c7')));
</script>

<div data-error-page class={css((s) => s.color.red)}>error page</div>
