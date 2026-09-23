import type { App } from 'vue';
import {
  Css,
  createStyleContext,
  type CssConstructor,
  type CssFunction,
  type StylesOptions,
  type ProjectThemeHooks,
  type ThemeDefinition,
  type ThemeInput,
  type ThemeTree,
  type StylesheetFactory,
  type StyleContextOptions,
} from '@zerodep-css/core';
import {
  createRuntimeView,
  createThemeScope,
  prepareThemeStyle,
  normalizeStylesOptions,
  projectThemeArguments,
} from '@zerodep-css/core/style-scope';
import { installStyleContext, resolveContext } from './context.js';
import {
  themeKey,
  resolveThemeScope,
  useTheme as readTheme,
  provideTheme as setTheme,
} from './theme.js';
import { useGlobalCss as mountGlobal } from './global.js';

/** 可在项目 styles.ts 共享的配置；这里不创建应用或请求运行时。 */
export function createStyles<C extends Css = Css, T extends ThemeTree = never>(
  options?: StylesOptions<C, T>,
) {
  const config = normalizeStylesOptions(options);
  const cssType = (config.cssType ?? Css) as CssConstructor<C>;
  const theme = config.theme as ThemeDefinition<ThemeTree> | undefined;
  const themeHooks = {
    useTheme(definition?: ThemeDefinition<ThemeTree>) {
      const [selected] = projectThemeArguments(definition ?? theme);
      return readTheme(selected);
    },
    provideTheme(
      first?: ThemeDefinition<ThemeTree> | ThemeInput<ThemeTree>,
      second?: ThemeInput<ThemeTree>,
    ) {
      const [selected, overrides] = projectThemeArguments(theme, first, second);
      setTheme(selected, overrides);
    },
  } as ProjectThemeHooks<T>;

  return Object.freeze({
    ...themeHooks,
    useCss(): CssFunction<C> {
      const context = resolveContext();
      return createRuntimeView(context.runtime, resolveThemeScope(), cssType).css;
    },
    useGlobalCss(identity: string, factory: StylesheetFactory<C>) {
      return mountGlobal(identity, factory, resolveContext(), cssType);
    },
    createHost(options?: StyleContextOptions) {
      const prepared = theme && prepareThemeStyle(theme, theme.defaults);
      const scope =
        theme &&
        createThemeScope(
          theme,
          () => theme.defaults,
          undefined,
          () => prepared!,
        );
      const context = createStyleContext(options);
      let installed: App | undefined;
      let disposed = false;
      const host = Object.freeze({
        server: context.server,
        snapshot: context.snapshot,
        renderStyles: context.renderStyles,
        renderManifest: context.renderManifest,
        completeHydration: context.completeHydration,
        dispose() {
          if (disposed) return;
          disposed = true;
          context.dispose();
        },
        install(app: App) {
          if (disposed) throw new Error('Style host has been disposed.');
          if (installed && installed !== app)
            throw new Error('A style host belongs to one Vue application.');
          if (installed) return;
          installStyleContext(app, context);
          if (scope) app.provide(themeKey, scope);
          // Vue 3.5 的应用卸载钩子覆盖客户端；SSR 由请求入口在输出后 finally 释放。
          app.onUnmount(host.dispose);
          installed = app;
        },
      });
      return host;
    },
  });
}
