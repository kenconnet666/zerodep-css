<script lang="ts">
  import { redirect } from '@sveltejs/kit';
  import { styles } from '$lib/styles';

  styles.useGlobalCss('failed-redirect-tree', (g) =>
    g.rule('body', (s) => s.outlineColor.raw('#070809')),
  );
  redirect(302, '/other?tone=blue');
</script>
