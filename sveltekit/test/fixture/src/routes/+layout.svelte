<script lang="ts">
  import { provideStyles } from '@zerodep-css/sveltekit';
  import { styles } from '$lib/styles';

  provideStyles();
  let { data, children } = $props();
  styles.provideTheme(() => ({
    color: { brand: data.tone === 'blue' ? '#2563eb' : '#dc2626' },
  }));
  styles.useGlobalCss('body-tone', (g) =>
    g.rule('body', (s) => s.backgroundColor.raw(data.tone === 'blue' ? '#dbeafe' : '#fee2e2')),
  );
</script>

{@render children()}
