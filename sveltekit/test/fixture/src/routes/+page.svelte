<script lang="ts">
  import { styles } from '$lib/styles';

  let width = $state(80);
  const css = styles.useCss();
  const theme = styles.useTheme();
</script>

<h1>Kit fixture</h1>
<div
  data-card
  data-brand={theme().color.brand}
  class={css((s) => {
    s.color.brand;
    s.width.px(width);
  })}
>
  index
</div>
<button data-grow onclick={() => (width += 20)}>grow</button>
<a data-other-link href="/other?tone=blue">other</a>
