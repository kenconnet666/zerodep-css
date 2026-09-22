# 当前架构

本文件描述当前实现。维护计划见 roadmap.md；history 保存历史研究与阶段决策，不作为当前 API 清单。最终证据映射见 production-audit.md。

## 包边界

- core：生成数据、真实 Css 类、有序样式结构、CSS 语法处理、哈希、CSSOM/SSR 注册、主题定义与宿主上下文。可选 themes 子路径提供两套预设和 ThemeCss，不加载到默认入口。不依赖 Vue 或 Svelte。css-tree 是明确的运行时依赖，仓库名不代表零第三方依赖。
- vue：provide/inject、computed/watch、scope 清理。index.ts 只导出，context.ts 管实例取得，global.ts 管全局样式生命周期。
- svelte：初始化 context、原生模板/$derived、global.svelte.ts 中的 effect 生命周期；由官方 Svelte 编译链处理 rune 模块。
- scripts/css-data：离线 schema/grammar/policy。运行时 metadata 与声明从同源生成，core/src/generated 不手工编辑。
- scripts/testing：测试准备、共享浏览器执行器、隔离消费者和体积验证。组件夹具属于各自包的 test/fixtures，类型夹具放 test/types，快速单元测试放 test/unit。
- scripts/language-services：项目级 MCP 桥、安装与五项语义验收。换机重建 .codex/config.toml，不复制本机路径。
- 适配器 compiler：自动 CSS 的 SFC 源码转换和 Vite 插件。internal/compiler 共用严格 TS 分析，构建时内联到两端独立 compiler 子路径；core/compiler-runtime 是生成代码的内部入口，core/theme-runtime 是框架作用域桥。具体支持边界见 compiler.md。

三个产品包位于根目录并保持 private。构建先安全清理三个 dist，再按 workspace 依赖顺序构建，防止更名后的旧文件进入产物。

## 数据与调用路径

```text
csstype / Webref / CSSTree 固定数据
  -> schema + policy -> generated properties / metadata

css(factory)
  -> 编译器证明稳定时命中准备缓存
  -> 否则创建真实 Css -> 有序 StyleProgram / 元数据 -> 结果缓存
  -> 序列化与校验 -> 内容哈希 -> runtime 注册/去重 -> 字符串 class

框架原生依赖通知
  -> 普通绑定值更新元素变量
  -> 结构与回退路径重新调用 css -> 必要时更新 class

defineTheme -> 冻结 token/defaults -> provideTheme 的原生派生值
  -> 子作用域局部覆盖 -> 有效主题变量类 + 内容类

createStyleContext（应用/请求拥有）
  -> runtime（规则、缓存、DOM/SSR）
  -> 稳定全局 key / slot 映射 -> manifest -> hydration 认领
```

StyleFactory/StylesheetFactory 描述局部样式和顶层样式表回调，GlobalFactory 描述嵌套全局规则。containerQuery 在局部和全局上下文名称一致。内部 IR 在 style-program.ts，作者类型在 builder-types.ts，元数据结构类型在 metadata-types.ts；根入口只保留必要的作者、资源和 manifest 类型。

## 作者合同

```ts
const { css } = useStyleRuntime();
const className = css((s) => {
  s.display.flex;
  s.display.token('flex');
  s.width.raw('50%');
  s.padding.px(8, 16);
  s.hover((h) => {
    h.color.red;
  });
});
```

- CSS 属性不可直接调用；token 为严格字面量，raw 保留补全并接受字符串。结构规则用根层调用。
- css 同步返回字符串；普通 const 字符串不自动变化。模板跟踪由框架负责，脚本中使用 computed/$derived。
- Css 支持真实继承、super、私有字段、extendProperty 与嵌套派生类型。实例只在一次同步回调内有效，不跨构建共享。
- name/config(debug) 为根样式提供可读名称、声明数量与相对源码诊断；来源不进入内容哈希。主题视图返回类名列表，变量类保持逻辑上下文，不依赖 DOM 祖先的位置。
- 适配器不导出默认 css。从 core 导入的 css 只面向浏览器默认 runtime；上下文、SSR、nonce 和 ShadowRoot 使用 useStyleRuntime() 取得的 css。
- globalCss 创建定义，useGlobalCss(key, factory) 创建有生命周期的全局挂载。key 在上下文活跃 owner 中唯一。
- CSSOM 注册是幂等副作用，不宣称 css 为纯函数。普通 class 和共享动画保留到 runtime/context.dispose；组件只释放自己的全局槽位及订阅。
- 每个 SSR 请求独立上下文。先渲染/收集，再输出样式和 manifest，最后 finally dispose。客户端先恢复 context，再框架 hydration，完成后检查 completeHydration。
- 动态值自动提升、安全静态准备与复杂回退已接入 Vue/Svelte。公开 bx 已移除；流式 SSR 和专用元框架插件仍不在已实现范围。

## 基础设施合同

pnpm 的主 workspace 依赖由 catalog 精确固定；框架 peer 表示消费范围，实际验收使用锁定版本。Node 主版本由 .node-version 和 engines 约束，pnpm 固定 10.34.5。不自动升级全局工具。

本地测试命令默认构建；CI 每个 job 构建一次，然后传 --no-build。根 pnpm test 覆盖所有快速单元测试。Linux 完整 CI 包含生成一致性、语言服务、浏览器、独立消费和体积预算；Windows job 验证安装、类型、构建和单元测试。

独立消费者位于操作系统临时目录：pnpm pack 后按包名安装，使用官方 Vite 插件分别构建客户端/SSR 并执行 hydration；没有源码 alias/zerodep-source 条件，也不允许依赖仓库祖先 node_modules。消费者顶层工具版本精确固定，其安装锁文件进入测试报告；临时消费安装会解析传递依赖，与主 workspace frozen lockfile 的职责不同。

浏览器逐场景输出 JSON，失败时输出截图、trace 和控制台/请求诊断。core 浏览器测试主动注入一次失败，验证留证链路；evidence-self-test 内的失败是预期场景，其 verification.json 必须 passed。体积测试记录最小入口 minify/gzip 和模块贡献，对预算与浏览器编译依赖泄漏设置检查。

浏览器矩阵覆盖 Chromium、Firefox、WebKit，core 使用 dist 入口，框架使用官方编译链和真实组件。原生 CSS 特性由目标浏览器实现，本库不附加兼容性转换器。

计算缓存最多 256 项，普通结果键不超过 64 KiB；绑定字符串校验缓存最多 128 项且合计 65,536 UTF-16 字符。缓存驱逐不删除仍可能被 DOM 或已保存字符串引用的规则，宿主可配置 maxRecords 并最终 dispose。缓存命中仍保持注册重入锁和 DOM 删除/禁用检查。

打包时移除本地 zerodep-source 导出条件，JS source map 内嵌源码，不发布悬空声明地图。消费者检查全部导出与地图，包元数据给出 Node 范围和仓库目录。三个包保持 private，不在本轮自动公开发布或选择许可证。
