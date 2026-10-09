# zerodep-css：运行时 CSS

SystemKeywords 提供原始 CSS 关键字值，Css(theme) 按作用域读取并生成声明字符串；无参 Css 保留系统默认行为。属性方法返回声明字符串，`css(...parts)` 组合并缓存样式类；Vue/Svelte 插件自动追踪命名 css，并把安全的直接动态值转为 CSS 变量。保留运行时 CSS 和原生 if/switch，不要求静态提取全部样式。系统包含 502 条属性链和 12,586 个关键字，Vue/Svelte 负责响应式与生命周期，Nuxt/SvelteKit 提供 Node SSR 和预渲染接入。采用 MIT 许可；流式 SSR、边缘部署尚未验收。

```sh
pnpm add zerodep-css-vue@0.3.1     # Vue 项目
pnpm add zerodep-css-svelte@0.3.1  # Svelte 项目
```

底层包为 `zerodep-css`；元框架集成使用 `zerodep-css-vue/nuxt` 或 `zerodep-css-svelte/sveltekit`。构建与 Node SSR 要求 Node 24+，包产物为 ESM。

已发布 next 为六包 0.3.3；固定产物见 [0.3.3 预发布](https://github.com/kenconnet666/zerodep-css/releases/tag/v0.3.3)。2026-10-09 当前源码将 Nuxt/Kit 合并为 Vue/Svelte 子入口，并增加 css 隐式转换，尚未发布新版本；使用这些新能力需先构建工作区，旧 npm 0.3.3 不包含它们。恢复方法见 [维护文档](docs/maintenance.md#npm-发布)。

| 子项目     | 职责                                  |
| ---------- | ------------------------------------- |
| `core`     | 与框架无关的作者模型                  |
| `compiler` | Vue/Svelte 共享模板转换，独立持有 TS6 |
| `vue`      | Vue 3.5 适配                          |
| `svelte`   | Svelte 5 适配                         |

使用 Node 24 和 pnpm 10.34.5。版本集中在 `pnpm-workspace.yaml`，包间通过 `workspace:*` 关联。

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
```

组件从对应框架包导入 API；项目通过 `createCssContext<AppCss>()` 导出自己的 provideCss/useCss。安装、包入口与可执行示例统一见入门文档。

## 使用文档

- [开始使用](docs/getting-started.md)：包入口、组件上下文、可执行示例与手工 SSR。
- [作者 API](docs/author-api.md)：声明组合、选择器、动画、全局规则和单位/颜色方法。
- [作者 API 注释维护](docs/author-documentation.md)：中文说明、关键字语义、方法示例和发布类型提示的生成与验收。
- [CSS 自动追踪](docs/bindings.md)：隐式变量、模板缓存、列表、派生值与支持边界。
- [注入关键字](docs/keyword-injection.md)：主题类型契约、类继承、Vue/Svelte 响应式取值与编辑器文档。
- [主题](docs/themes.md)：系统/预设/用户继承，亮暗切换和子树覆盖。
- [元框架](docs/metaframeworks.md)：Nuxt 4 / SvelteKit 2 的 Node SSR、静态部署和 CSP。
- [维护与支持范围](docs/maintenance.md)：换机、LSP、生成器、目录归属、生命周期和交付流程。
- [性能与验收](docs/performance.md)：精确提交的测量数据、CI 状态与尚存差距。

## 工程目录

当前 core/compiler/vue/svelte/zerodep-js 五包源码位于各自 src；Nuxt 模块位于 vue/src/nuxt，Kit 宿主位于 svelte/src/sveltekit；core/src/generated 只通过生成器更新。正式浏览器验收在 test/browser，共享夹具与性能工具在 [test/tools](test/tools/README.md)。已失效的研究稿和阶段记录从 Git 历史查询；历史原始样本保留在 test/tools/results，不作为当前性能结论。

## zerodep-js 适配器

`zerodep-css-zerodep-js` 提供 CSS 作者、上下文、运行时和 TSX 编译扩展。框架的 Vite 插件使用 `zerodep({ extensions: [cssCompiler()] })`；cssCompiler 从适配器 `/compiler` 导入。详见 [适配器](zerodep-js/README.md)。浏览器运行时不加载 Babel/TypeScript，SSR 标签仍由应用组合。
