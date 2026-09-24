# 当前架构

本文描述当前源码与已迁移的公开 API；阶段状态见[生产实施记录](production.md)，自动优化边界见[编译器](compiler.md)。运行时 CSS 是正式执行路径，编译、缓存与变量绑定只在能证明语义等价时优化它。

## 包与源码边界

- `core`：真实 `Css` 类、作者类型、`cssVar`、`defineTheme`、预设与跨适配器共享的身份和宿主仲裁。根入口只有 `Css`、`cssVar`、`defineTheme` 三个运行值及作者类型；`/themes` 提供预设。`/internal` 是非业务桥，不从根入口加载完整引擎。主题值检查仍依赖 `css-tree` 的 tokenizer。
- `internal/runtime`：有序样式描述、完整生成元数据、解析/序列化、绑定、缓存、CSSOM/SSR 注册与恢复。它不是第六个产品包；根构建按模块编译后，将 JS、声明和地图复制到 Vue/Svelte 各自的 `dist/runtime`。
- `vue`：Vue 3.5 的 provide/inject、computed/watch 与组件生命周期；`createStyles` 绑定 `useCss` 等方法，`createHost().install(app)` 安装应用宿主。
- `svelte`：Svelte 5 的 context、模板和 `$derived`，以及组件全局样式的 effect 生命周期；`createHost().provide()` 在根组件初始化时安装宿主。rune 模块通过官方编译链处理。
- `nuxt` / `sveltekit`：复用对应框架适配器，负责 Node 请求宿主、样式输出/恢复与元框架生命周期；不重复导出作者 API，不复制引擎。
- `internal/compiler`：两框架共享的严格 TS 源码分析，构建时内联到各自独立的 `./compiler` 子路径。生成代码所需的运行时辅助入口与业务根入口分开，不把 Node 编译依赖导入浏览器入口。
- `scripts/css-data` 从同一数据生成 `core/src/generated/properties.ts` 与 `internal/runtime/generated/metadata.ts`；`scripts/testing` 和 `scripts/language-services` 分别承担真实组件/消费者验收与项目级语言服务。引擎单元、类型和浏览器夹具位于 `internal/runtime/test`。

五个产品包均位于根目录且保持 private。元框架的本地独立 Node SSR、HMR 与静态部署验证已通过，远程验收及最终交付以阶段记录为准。

适配器的 `#runtime` 是各自 `package.json#imports` 定义的私有路径，只指向本包内的 `dist/runtime`；发布产物不引用工作区外的源码。两份内部引擎都从 `@zerodep-css/core/internal` 取得同一个 `Css` 构造器、变量品牌、主题/准备标记及浏览器宿主注册表，不能各自复制这些身份。core 根入口不提供 `css`、`createRuntime`、`createStyleContext`、`keyframes` 或全局挂载业务函数；适配包根入口提供 `createStyles`、`Css`、`defineTheme`、`cssVar`、`keyframes` 五个运行值。

## 应用配置、执行与恢复

项目入口只保存可共享的作者类型和默认主题定义，不创建运行实例：

```ts
// styles.ts，Vue 和 Svelte 各自从对应适配包导入
import { createStyles } from '@zerodep-css/vue';
import { AppCss, appTheme } from './theme';

export const { useCss, useTheme, provideTheme, useGlobalCss, createHost } = createStyles({
  cssType: AppCss,
  theme: appTheme,
});
```

组件初始化时调用 `const css = useCss()`，随后在模板、Vue computed 或 Svelte `$derived` 中调用 `css((s) => { ... })`。`css` 同步返回字符串；作者回调仍按普通 JavaScript 执行，支持函数复用、`if`/`switch`、真实继承与 `super`。`Css` 实例只在一次同步回调中有效；不能在异步回调或生命周期外继续写入。

每个应用或 SSR 请求单独调用 `createHost(options)`。Vue 入口调用 `host.install(app)`，应用卸载自动释放；Svelte 根组件调用 `host.provide()`，根卸载只释放认领以支持 HMR，同一应用最终 `unmount` 后由入口显式 `host.dispose()`。服务端使用请求局部 host：渲染完整组件字符串，输出 `renderStyles()` 和 `renderManifest()`，再在 `finally` 释放。客户端先从 manifest 恢复 host，再执行 hydration，完成后调用 `completeHydration()`；全局样式靠稳定 key 认领原槽位。宿主可落在 Document 或 ShadowRoot，nonce 和插入点属于 host 配置，不属于局部 `s.config()`。

```text
作者回调 / AppCss
  → core 真实 Css + 适配包内部引擎的有序样式描述
  → 同上下文规范属性归并、序列化和校验
  → 内容哈希、资源与宿主事务注册
  → class 字符串

可选同 SFC 编译优化 → 安全值使用元素变量；其他代码继续运行时路径
```

同一上下文、同一规范属性后写直接删除前写，包括前写带 `important` 的情况。不同简写/长属性保留原顺序，由浏览器解释。`raw` 仅检查声明结构并保留新 CSS 值的浏览器原生语义；单位多参数只要有 `null`/`undefined` 就省略整条声明。`css(base, override)` 按顺序组合本 host 已知 class 与回调，也接受普通第三方 class、数组及 `false`/`null`/`undefined` 空项。第三方 class 不反解；本 host 的 class 字符串只是样式快照，不携带元素上的内联变量值。

## 主题、全局样式与编译边界

`defineTheme` 持有冻结的 defaults、schema 和稳定 token 身份，不持有请求值。项目可从 `Css` 自行扩展，也可从 `ThemeCss extends Css` 增加内置预设关键字后再扩展。默认主题在没有同名 provider 时也会生成有效主题变量类；同名 provider 优先。`provideTheme` 接受静态覆盖对象、getter、`null`；局部 `null`/`undefined` 继承父值，传入 `definition.defaults` 才恢复预设。Vue computed 与 Svelte `$derived` 持有有效值，主题沿组件逻辑树继承，不依赖 Portal/Teleport 的 DOM 位置。

`useGlobalCss(key, factory)` 管理组件声明的全局槽位、更新和卸载；普通 class 与共享动画留到 host 释放。同 key 同序列化内容共享一个槽位；最后一个 owner 卸载才释放。多个 owner 存活时只接受同内容更新，仅剩一个才允许改值；动态全局推荐由根组件声明一次。host 提前 dispose 会停止所有已登记的全局订阅，避免释放后继续求值工厂。CSSOM 事务先验证冲突与所有待写规则，再更新记录；失败不留下半成品。计算缓存可淘汰，已注册规则不能随缓存淘汰直接删除。

可选 `cssPlugin` 当前只识别同一 SFC 内能直接追踪的 `createStyles`/`useCss` 来源，包括直接链式调用。项目 `styles.ts` 跨文件导出的绑定方法保持完整运行时行为，尚不做跨模块编译证明。变量绑定会在原求值点读取动态输入，复杂回调或派生作者类保守回退；优化失败不改变合法作者代码的执行、错误和 SSR 合同。

core 的小作者入口与适配器完整运行时入口体积不同；属性元数据、解析器、序列化和宿主注册仍是浏览器完整运行时所需代码。原生 CSS 特性由目标浏览器实现，本库不提供通用前缀或 polyfill。完整引擎与元框架接入均有独立消费验证；实际本地/远程状态见[生产实施记录](production.md)。
