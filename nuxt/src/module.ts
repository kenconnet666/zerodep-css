import {
  addPlugin,
  addServerPlugin,
  addTemplate,
  addVitePlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit';
import type { StyleHostOptions } from '@zerodep-css/vue';
import type { CompilerOptions } from '@zerodep-css/vue/compiler';

export interface ModuleOptions extends Pick<
  StyleHostOptions,
  'namespace' | 'layers' | 'layer' | 'maxRecords' | 'warnAt' | 'debug'
> {
  /** 编译优化完全可选；复杂作者代码仍由运行时执行。 */
  readonly compiler?: boolean | CompilerOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: { name: '@zerodep-css/nuxt', configKey: 'zerodepCss' },
  defaults: { compiler: false },
  async setup(options) {
    const resolver = createResolver(import.meta.url);
    const hostOptions = {
      namespace: options.namespace,
      layers: options.layers,
      layer: options.layer,
      maxRecords: options.maxRecords === Infinity ? undefined : options.maxRecords,
      warnAt: options.warnAt,
      debug: options.debug,
    };
    // 两端使用相同的、可序列化的宿主配置；nonce 单独按请求传递。
    addTemplate({
      filename: 'zerodep-css-options.mjs',
      getContents: () => `export default ${JSON.stringify(hostOptions)}\n`,
    });
    addPlugin({ src: resolver.resolve('./runtime/app.server.js'), mode: 'server' });
    addPlugin({ src: resolver.resolve('./runtime/app.client.js'), mode: 'client' });
    addServerPlugin(resolver.resolve('./runtime/nitro.js'));

    if (options.compiler) {
      const { cssPlugin } = await import('@zerodep-css/vue/compiler');
      addVitePlugin(cssPlugin(options.compiler === true ? {} : options.compiler));
    }
  },
});
