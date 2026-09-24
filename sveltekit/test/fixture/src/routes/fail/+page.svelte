<script lang="ts">
  import { styles } from '$lib/styles';

  styles.useGlobalCss('failed-tree', (g) => g.rule('body', (s) => s.outlineColor.raw('#010203')));
  throw new Error('fixture render failure');
</script>
