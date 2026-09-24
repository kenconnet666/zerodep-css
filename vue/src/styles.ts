import type { App } from 'vue';
import {
  Css,
  type CssConstructor,
  type CssFunction,
  type StylesOptions,
  type ProjectThemeHooks,
  type ThemeDefinition,
  type ThemeInput,
  type ThemeTree,
  type StylesheetFactory,
} from '@zerodep-css/core';
import {
  createStyleContext,
  type StyleContextOptions,
  type StyleContext,
  type RuntimeStats,
  createRuntimeView,
  createThemeScope,
  prepareThemeStyle,
  normalizeStylesOptions,
  projectThemeArguments,
  projectThemeScope,
} from '#runtime';

import { installStyleContext, resolveContext } from './context.js';
import {
  themeKey,
  resolveThemeScope,
  useTheme as readTheme,
  provideTheme as setTheme,
} from './theme.js';
import { useGlobalCss as mountGlobal } from './global.js';

export interface StyleHost extends Pick<
  StyleContext,
  'server' | 'snapshot' | 'renderStyles' | 'renderManifest' | 'completeHydration' | 'dispose'
> {
  install(app: App): void;
  stats(): RuntimeStats;
}

export interface StylesProject<C extends Css, T extends ThemeTree> extends ProjectThemeHooks<T> {
  createHost(options?: StyleContextOptions): StyleHost;
  useCss(): CssFunction<C>;
  useGlobalCss(
    key: string,
    factory: StylesheetFactory<C>,
  ): { readonly id: string; dispose(): void };
}

/** 可在项目 styles.ts 共享的配置；这里不创建应用或请求运行时。 */
export function createStyles<C extends Css, T extends ThemeTree>(options: {
  readonly cssType: CssConstructor<C>;
  readonly theme: ThemeDefinition<T>;
}): StylesProject<C, T>;
export function createStyles<C extends Css>(options: {
  readonly cssType: CssConstructor<C>;
  readonly theme?: never;
}): StylesProject<C, never>;
export function createStyles<T extends ThemeTree>(options: {
  readonly theme: ThemeDefinition<T>;
  readonly cssType?: never;
}): StylesProject<Css, T>;
export function createStyles(options?: {
  readonly cssType?: never;
  readonly theme?: never;
}): StylesProject<Css, never>;
export function createStyles<C extends Css = Css, T extends ThemeTree = never>(
  options?: StylesOptions<C, T>,
): StylesProject<C, T> {
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
      return createRuntimeView(
        context.runtime,
        projectThemeScope(theme, resolveThemeScope()),
        cssType,
      ).css;
    },
    useGlobalCss(key: string, factory: StylesheetFactory<C>) {
      return mountGlobal(key, factory, resolveContext(), cssType);
    },
    createHost(options?: StyleContextOptions): StyleHost {
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
        stats: context.runtime.stats,
        snapshot: context.snapshot,
        renderStyles: context.renderStyles,
        renderManifest: context.renderManifest,
        completeHydration: context.completeHydration,
        dispose() {
          if (disposed) return;
          disposed = true;
          installed = undefined;
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
