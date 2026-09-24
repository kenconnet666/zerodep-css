<script lang="ts">
  import { styles } from '$lib/styles';

  const css = styles.useCss();
  const theme = styles.useTheme();
</script>

<div data-other-card data-brand={theme().color.brand} class={css((s) => s.color.brand)}>other</div>
<a data-home-link href="/?tone=red">home</a>
