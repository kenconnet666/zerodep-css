import { getAllContexts, getContext, onDestroy, setContext } from 'svelte';
import {
  Css,
  type CssConstructor,
  type CssFunction,
  type ProjectThemeHooks,
  type StylesOptions,
  type StylesheetFactory,
  type ThemeDefinition,
  type ThemeInput,
  type ThemeTree,
} from '@zerodep-css/core';
import {
  createStyleContext,
  type StyleContext,
  type StyleContextOptions,
  type RuntimeStats,
  createRuntimeView,
  normalizeStylesOptions,
  projectThemeArguments,
  projectThemeScope,
  type ThemeScope,
} from '#runtime';

import { resolveContext, provideStyleContext } from './context.js';
import { useGlobalCss as baseUseGlobalCss } from './global.svelte.js';
import {
  provideTheme as baseProvideTheme,
  useTheme as baseUseTheme,
  themeKey,
} from './theme.svelte.js';

export interface StyleHost extends Pick<
  StyleContext,
  'server' | 'snapshot' | 'renderStyles' | 'renderManifest' | 'completeHydration' | 'dispose'
> {
  /** 根组件初始化时安装一次；服务端由请求宿主在序列化后释放。 */
  provide(): void;
  stats(): RuntimeStats;
}

export interface StylesProject<C extends Css, T extends ThemeTree> extends ProjectThemeHooks<T> {
  createHost(options?: StyleContextOptions): StyleHost;
  useCss(): CssFunction<C>;
  useGlobalCss(
    identity: string,
    factory: StylesheetFactory<C>,
  ): {
    readonly id: string;
    dispose(): void;
  };
}

/** 项目入口只捕获作者类型与主题定义；运行实例由 createHost 按应用/请求创建。 */
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
  const { cssType = Css, theme } = normalizeStylesOptions(
    options as StylesOptions<Css, ThemeTree> | undefined,
  );
  const authorType = cssType as CssConstructor<C>;

  const projectThemes = {
    useTheme(first?: ThemeDefinition<ThemeTree>) {
      const [definition] = projectThemeArguments(theme, first);
      return baseUseTheme(definition);
    },
    provideTheme(
      first?: ThemeDefinition<ThemeTree> | ThemeInput<ThemeTree>,
      second?: ThemeInput<ThemeTree>,
    ) {
      const [definition, overrides] = projectThemeArguments(theme, first, second);
      baseProvideTheme(definition, overrides);
    },
  } as ProjectThemeHooks<T>;

  return Object.freeze({
    ...projectThemes,
    useCss(): CssFunction<C> {
      const scope = projectThemeScope(theme, getCurrentThemeScope());
      return createRuntimeView(resolveContext().runtime, scope, authorType).css as CssFunction<C>;
    },
    useGlobalCss(identity: string, factory: StylesheetFactory<C>) {
      return baseUseGlobalCss(identity, factory, undefined, authorType);
    },
    createHost(options: StyleContextOptions = {}): StyleHost {
      const context = createStyleContext(options);
      let owner: Map<unknown, unknown> | undefined;
      let disposed = false;
      const dispose = () => {
        if (disposed) return;
        disposed = true;
        owner = undefined;
        context.dispose();
      };
      return Object.freeze({
        server: context.server,
        stats: context.runtime.stats,
        snapshot: context.snapshot,
        renderStyles: context.renderStyles,
        renderManifest: context.renderManifest,
        completeHydration: context.completeHydration,
        dispose,
        provide() {
          if (disposed) throw new Error('Style host has been disposed.');
          const current = getAllContexts();
          if (owner === current) return;
          if (owner) throw new Error('Style host is already provided to another root.');
          provideStyleContext(context);
          // 新宿主先隔离外层主题，再安装自己的默认主题。
          setContext<ThemeScope | undefined>(themeKey, undefined);
          if (theme) baseProvideTheme(theme);
          owner = getAllContexts();
          const installed = owner;
          // 仅释放根组件对 host 的认领；HMR 可用原 host 安装新根，runtime 由入口销毁。
          onDestroy(() => {
            if (owner === installed) owner = undefined;
          });
        },
      });
    },
  });
}

function getCurrentThemeScope(): ThemeScope | undefined {
  return getContext<ThemeScope | undefined>(themeKey);
}
