<script lang="ts">
  import { styles } from './ProjectStyles.js';

  const global = styles.useGlobalCss('shared-color', (g) =>
    g.rule('[data-shared-global-target]', (s) => s.color.red),
  );
</script>

<span data-shared-lease={global.id}></span>
