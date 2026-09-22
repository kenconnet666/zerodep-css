# 当前架构

本文件描述当前实现。未来工作见 roadmap.md；implementation-research.md 和 architecture-audit.md 保存历史研究与阶段决策，不作为当前 API 清单。

## 包边界

- core：生成数据、链式 Builder、有序样式结构、CSS 语法处理、哈希、CSSOM/SSR 注册、宿主上下文。不依赖 Vue 或 Svelte。css-tree 是明确的运行时依赖，仓库名不代表零第三方依赖。
- vue：provide/inject、computed/watch、scope 清理。index.ts 只导出，context.ts 管实例取得，global.ts 管全局样式生命周期。
- svelte：初始化 context、原生模板/$derived、global.svelte.ts 中的 effect 生命周期；由官方 Svelte 编译链处理 rune 模块。
- scripts/css-data：离线 schema/grammar/policy。运行时 metadata 与声明从同源生成，core/src/generated 不手工编辑。
- scripts/testing：测试准备、共享浏览器执行器、隔离消费者和体积验证。组件夹具属于各自包的 test/fixtures，类型夹具放 test/types，快速单元测试放 test/unit。
- scripts/language-services：项目级 MCP 桥、安装与五项语义验收。换机重建 .codex/config.toml，不复制本机路径。
- 适配器 src/compiler：bx 的 SFC 源码转换和 Vite 插件。scripts/compiler 共用 TS 词法/单位分析，构建时内联到两端独立 compiler 子路径；core/binding 仅格式化和校验元素变量，不创建响应式订阅或注册规则。具体支持边界见 bx-compiler.md。

三个产品包位于根目录并保持 private。构建先安全清理三个 dist，再按 workspace 依赖顺序构建，防止更名后的旧文件进入产物。

## 数据与调用路径

```text
csstype / Webref / CSSTree 固定数据
  -> schema + policy -> generated properties / metadata

css(factory)
  -> buildStyleProgram -> 有序 StyleProgram
  -> 序列化与校验 -> 内容哈希 -> runtime 注册/去重 -> 字符串 class

框架原生依赖通知
  -> 模板表达式或 computed/$derived 重新调用 css
  -> class 更新

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
- 适配器不导出默认 css。从 core 导入的 css 只面向浏览器默认 runtime；上下文、SSR、nonce 和 ShadowRoot 使用 useStyleRuntime() 取得的 css。
- globalCss 创建定义，useGlobalCss(key, factory) 创建有生命周期的全局挂载。key 在上下文活跃 owner 中唯一。
- CSSOM 注册是幂等副作用，不宣称 css 为纯函数。普通 class 和共享动画保留到 runtime/context.dispose；组件只释放自己的全局槽位及订阅。
- 每个 SSR 请求独立上下文。先渲染/收集，再输出样式和 manifest，最后 finally dispose。客户端先恢复 context，再框架 hydration，完成后检查 completeHydration。
- bx 已有 Vue/Svelte 首版源码转换；未编译时运行时明确报错。没有普通变量隐式提升、流式 SSR 或专用元框架插件。

## 基础设施合同

pnpm 的主 workspace 依赖由 catalog 精确固定；框架 peer 表示消费范围，实际验收使用锁定版本。Node 主版本由 .node-version 和 engines 约束，pnpm 固定 10.34.5。不自动升级全局工具。

本地测试命令默认构建；CI 每个 job 构建一次，然后传 --no-build。根 pnpm test 覆盖所有快速单元测试。Linux 完整 CI 包含生成一致性、语言服务、浏览器、独立消费和体积预算；Windows job 验证安装、类型、构建和单元测试。

独立消费者位于操作系统临时目录：pnpm pack 后按包名安装，使用官方 Vite 插件分别构建客户端/SSR 并执行 hydration；没有源码 alias/zerodep-source 条件，也不允许依赖仓库祖先 node_modules。消费者顶层工具版本精确固定，其安装锁文件进入测试报告；临时消费安装会解析传递依赖，与主 workspace frozen lockfile 的职责不同。

浏览器逐场景输出 JSON，失败时输出截图、trace 和控制台/请求诊断。core 浏览器测试主动注入一次失败，验证留证链路；evidence-self-test 内的失败是预期场景，其 verification.json 必须 passed。体积测试记录最小入口 minify/gzip 和模块贡献，对预算与浏览器编译依赖泄漏设置检查。

源码/声明地图的发布策略、项目许可证及发布元数据尚未定稿；当前 tarball 只作私有研发验收，不是可发布声明。
