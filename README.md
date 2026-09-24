# zerodep-css

强类型链式 CSS 框架，保留完整运行时能力；编译、预计算、缓存和元素变量绑定都是可选优化。当前 `codex/runtime-first` 已完成约定生产范围的实现与验收，具体边界与证据见[实施记录](docs/production.md)。五个产品包保持 private：core、Vue、Svelte，以及 [Nuxt 4](nuxt/README.md)/[SvelteKit 2](sveltekit/README.md) 的薄接入。core 根入口只有 `Css`、`cssVar`、`defineTheme` 三个作者运行值；Vue/Svelte 根入口提供 `createStyles`、`Css`、`defineTheme`、`cssVar`、`keyframes` 五个运行值。

项目统一配置，组件使用绑定的作者类型与主题：

```ts
// styles.ts（Vue 项目；Svelte 从 @zerodep-css/svelte 导入）
import { createStyles } from '@zerodep-css/vue';
export const styles = createStyles();
export const { useCss, useTheme, provideTheme, useGlobalCss } = styles;
```

每个应用或请求创建一个 host。Vue 通过 app.use(host) 安装；Svelte 在根组件调用 host.provide()。完整启动、SSR 和卸载示例见 [Vue](vue/README.md) 与 [Svelte](svelte/README.md)。

在组件初始化中取得 `const css = useCss()`，然后在模板或原生派生值中调用：

```ts
css((s) => {
  s.display.flex;
  s.padding.px(8, 16);
});
```

css 同步返回字符串；可用同一函数组合已有样式和回调。普通 if/else/switch 与函数复用均可用，不要求 recipes/variants。编译器无法证明等价时保留合法运行时行为，详见[编译说明](docs/compiler.md)。

属性对象不可调用：固定值 `s.display.flex`，严格字面量 `s.display.token(value)`，开放值 `s.width.raw('50%')`，单位方法 `s.width.px(50)`。raw 保留已知值补全，并允许任意字符串通过类型检查；不提供 `s.width(...)`。

```text
core/       薄作者模型、主题定义与跨适配器共享身份
vue/        Vue 接入与包内 dist/runtime
svelte/     Svelte 接入与包内 dist/runtime
nuxt/       Nuxt 模块、请求宿主与独立部署验收
sveltekit/  Kit server hook、根宿主与独立部署验收
internal/   共用运行时源码、生成元数据、测试与严格 TypeScript 编译分析
scripts/    数据生成、语言服务和浏览器/类型验收
docs/       现行架构、支持、验证、迁移与换机交接
.research/  当前研究探针、性能原始样本与历史源码索引
```

要求 Node 24、pnpm 10.34.5；Windows 安装脚本使用 PowerShell 7。版本统一在 pnpm-workspace.yaml 管理，五个包均保持 private。

打包使用仓库内 `pnpm pack`：`.pnpmfile.cjs` 在 tarball 清单中移除仅供本地 LSP 使用的 `zerodep-source` 条件。完整引擎从 `internal/runtime` 按模块编译并复制到两个适配包的 `dist/runtime`；适配包的 `#runtime` 是本包私有导入，`@zerodep-css/core/internal` 只供共享身份使用。独立消费者须检查导出目标、声明与内嵌源码地图，不能依赖当前机器的源目录；迁移后的检查结果以实际运行报告为准。

本地已有构建时，可用 `node scripts/testing/browser-runtime.mjs --match 缓存` 执行名称匹配的关键场景；定向报告放在 `test-results/browser-focused`，不会覆盖完整报告。完整回归不传筛选条件。

浏览器测试统一由 `ZERODEP_BROWSER_ENGINE` 选择 chromium/firefox/webkit；默认 chromium 使用本机 Chrome，`ZERODEP_BROWSER_CHANNEL=chromium` 改用 Playwright 安装的 Chromium。CI 对三种引擎分别运行样式、框架、SSR 和 HMR 回归；当前运行状态以实际 CI 结果为准。

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm check:runtime
pnpm generate:check
pnpm test
pnpm test:types
pnpm test:browser:runtime
pnpm test:consumer
pnpm test:nuxt
pnpm test:sveltekit
pnpm size:check
pnpm test:browser:frameworks
```

`pnpm test` 只执行单元测试；已有根构建时，独立消费和浏览器命令可加 `--no-build`，避免重复构建。

- [core 作者模型与内部引擎边界](core/README.md)
- [Vue 适配与 SSR](vue/README.md)
- [Svelte 适配与 SSR](svelte/README.md)
- [项目语言服务](docs/language-services.md)
- [当前架构](docs/architecture.md)
- [支持矩阵与生产使用合同](docs/support.md)
- [验证入口、历史证据与性能测量](docs/validation.md)
- [Vue/Svelte 与原生、Emotion、goober、vanilla-extract 的性能对照](docs/performance.md)
- [系统亮暗主题](docs/themes.md)
- [API 与目录迁移](docs/migration.md)
- [版本变更记录](CHANGELOG.md)
- [换机交接与恢复步骤](docs/handoff.md)
- [后续路线](docs/roadmap.md)
- [正式 CSS 覆盖清单](docs/css-coverage.json)

SSR 每请求创建 host，完成渲染后收集 styles/manifest，并在 finally 中释放。浏览器采用原生 CSS nesting，本地默认使用已安装 Chrome；Chromium、Firefox、WebKit 是项目矩阵，兼容范围和测试证据见[支持边界](docs/support.md)与[验证记录](docs/validation.md)。

项目已配置 zerodep_lsp。可直接运行 `pnpm lsp:inspect <相对文件路径...>`；语言服务改动后运行 `pnpm lsp:verify`。换机使用 `./scripts/language-services/setup.ps1 -Verify` 生成本机配置，不改写用户全局设置。

GitHub Actions 负责 Linux 完整验证、独立 tarball 消费、体积预算，以及 Windows 安装、类型、构建和单元测试；运行成功与否以对应提交的结果为准。测试命令默认准备构建；同一轮已构建后可传 --no-build，CI 每个 job 只构建一次。日常本地至少运行 `pnpm check`、`pnpm build` 与对应单元/组件测试；完整类型补全验收和运行时浏览器回归可由 CI 执行。CI 三引擎使用 Playwright 配套浏览器；不发布包或部署站点。
