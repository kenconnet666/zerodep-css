# 下一阶段：延迟系统属性注册与字段文档

本阶段处理[性能复核](runtime-performance-review.md)确定的模块顶层副作用，并补齐系统属性的悬停文档；不改变 `s.color.red`、`raw()`、`px()`、`ic()`、`css(...parts)` 或主题继承写法。运行时 CSS 保持完整回退能力。

## 要交付的行为

- 生成的 `author.ts` 在模块导入时不执行 502 次 `defineSystemProperty()`；第一次构造 `Css` 时统一建立这些 getter，之后多个作者实例复用同一原型。各属性的关键字对象仍在首次访问该属性时创建。
- 直接使用 `ColorCss` 等单条属性链不要求先构造 `Css`。子类覆盖系统属性、两层主题继承、请求隔离与 hydration 的行为保持一致。
- 不用不真实的 `sideEffects: false` 标记来强行删代码。消费端只用 `ic()` 或单条属性链时，应能在正常的两阶段 ESM 打包中移除无关作者代码；完整 `Css` 路径的体积与首用成本单独报告。
- 生成器还要把已有的 CSS 名称、中文说明、初始值与 `@see` 放到 `Css` 的对应系统字段上。WebStorm 悬停 `s.display` 等属性时应直接看到说明；构建出的 `.d.ts` 也要保留字段文档。不得靠手改 `core/src/generated/author.ts` 维持效果。

用户在 WebStorm 中验证了文档位置：手工给 `Css.display` 字段加 JSDoc 后，Quick Documentation 能显示说明与链接；原先只给 `DisplayCss` 类加注释时，`s.display` 没有说明。本轮 WebStorm MCP 对 `core/test/types/theme.ts` 的 `s.display` 和 `s.color` 读取得到相同结果。`s.color` 指向用户自己覆盖的 `ThemeCss.color`，其注释由用户负责；框架只保证生成的系统字段文档，不承诺覆盖字段自动继承文档。

## 实施与验收顺序

1. 调整 `scripts/generate-css-author.mjs` 的汇总入口输出，把原型注册包在只执行一次的初始化函数里，由 `Css` 构造函数调用。生成器的确定性检查与 502／12,586 数量保持不变。初始化失败不得标记为已完成。
2. 复用生成器已有的 `commentOf()` 元数据，为每个 `Css` 系统字段生成 JSDoc；同时保留直接使用属性链类时必要的说明，比较生成源码和声明文件体积。以 `display`、`width`、SVG 属性各取样，通过 WebStorm Quick Documentation 和包类型消费检查核对悬停文档。用户这次手工修改的生成文件和测试行仅作探针，不在本次规划提交中改写或暂存。
3. 增加针对直接导入 `ic`、直接构造 `ColorCss`、构造完整 `Css`、两层主题继承和两个作者实例共享属性链的测试。以当前构建流程先打包库、再打包消费端，记录三种入口的压缩字节数；大小探针作为证据，不设置跨机器毫秒硬门槛。
4. 本地只跑生成检查、core 类型与运行时测试、包类型消费测试、WebStorm 悬停探针，以及受影响的 Vue/Svelte 浏览器和 SSR 焦点测试。每个完成阶段用中文提交并推送；远程 CI 执行 Windows／Linux 类型、格式、LSP、Chromium 浏览器、SSR、hydration、导出和 `ic()` 测试。CI 结果未返回时标记为待验收，有失败则修复并再次推送。

若完整 `Css` 路径仍占主要冷启动成本，这是预期结果；本阶段不通过改名或删属性掩盖。之后再用 Vue/Svelte 两轮负载比较“静态分支提前生成类＋运行时回退”和“持续新值绑定 CSS 变量”两种可选优化，优先解决真正发生在业务更新中的成本。Nuxt/SvelteKit 封装属于独立阶段。
