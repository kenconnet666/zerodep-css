<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { styles } from '$lib/styles';

  styles.useGlobalCss('failed-http-tree', (g) =>
    g.rule('body', (s) => s.outlineColor.raw('#040506')),
  );
  error(400, 'fixture expected error');
</script>
