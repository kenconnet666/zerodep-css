declare module '#build/zerodep-css-options.mjs' {
  import type { StyleHostOptions } from '@zerodep-css/vue';

  const options: Pick<
    StyleHostOptions,
    'namespace' | 'layers' | 'layer' | 'maxRecords' | 'warnAt' | 'debug'
  >;
  export default options;
}
