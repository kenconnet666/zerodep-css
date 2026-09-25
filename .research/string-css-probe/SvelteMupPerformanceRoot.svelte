<script lang="ts">
  import Probe from './SvelteMupPerformance.svelte';
  import { Css, provideCss } from './svelte-mup-performance-context.ts';

  const props = $props<{
    mode: 'direct' | 'memo' | 'table' | 'variable' | 'native-table' | 'native-var' | 'emotion';
    unique: boolean;
    rowCount: number;
    emit: (...parts: string[]) => string;
    expose: (control: { step(): void; noise(): void; read(): number }) => void;
  }>();
  provideCss(new Css());
</script>

<Probe
  mode={props.mode}
  unique={props.unique}
  rowCount={props.rowCount}
  emit={props.emit}
  expose={props.expose}
/>
