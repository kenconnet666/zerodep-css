# 支持矩阵与生产使用合同

版本基线：0.2.0，三个包保持 private。可以通过本仓库构建与 pnpm pack 独立消费；未自动公开发布到 npm。

## 平台与构建

| 领域     | 支持与验证                                                                               |
| -------- | ---------------------------------------------------------------------------------------- |
| 工程环境 | Node 24、pnpm 10.34.5；Windows/Linux 安装、类型、构建与快速测试                          |
| 浏览器   | CI 分别运行 Playwright Chromium、Firefox、WebKit；本地默认已安装 Chrome                  |
| Vue      | 当前锁定 Vue 3.5.43，官方 Vite 插件客户端/SSR 构建、hydration、HMR、Teleport             |
| Svelte   | 当前锁定 Svelte 5.57.0，官方 Vite/compiler/package 链，原生 rune、hydration、HMR         |
| SSR      | 完整字符串收集；每请求独立 context，输出 styles/manifest，客户端恢复并 completeHydration |
| 样式目标 | Document、ShadowRoot、显式 insertionPoint、CSP style nonce                               |
| 包消费   | 独立临时目录安装 tarball，无源码 alias；验证所有导出、地图和声明                         |

引擎测试不等于承诺每个旧浏览器版本。原生 nesting、layer、scope、容器查询等能力由目标浏览器提供，不做兼容性转译；不支持的根规则注册失败时不会记录为成功。流式 SSR、框架异步边界的完整专用流程和 Nuxt/SvelteKit 插件不列为已实现能力。

## 自动路径和运行时

自动路径面向原生模板的直接 css 调用：单位参数、raw/token、完整模板值、同宿主结构、可判定分支，以及保留模板守卫的简单 keyed 列表。变量属于元素，不写到全局 :root。CSS-wide 和空值保留直接声明/省略语义。

变量化使用保守基础值策略；语法表接受而浏览器可能不支持的关键字、较新单位、复杂数学与未知值保留直接声明，不能破坏前置 fallback。严格 CSP 使用 cssPlugin({ bindings: 'runtime' }) 和请求 nonce，不生成元素 style 变量；应用自写 style 属性仍受其 CSP 约束。

脚本 const/computed/$derived、跨文件帮助函数、复杂条件、派生 Css 类、自定义行为、选择器跨宿主、复杂模板作用域和组件透传可继续使用运行时。回退保留原生求值和响应式合同，可能随结构或内容变化产生新类名。普通 const 类名是快照，不能当作会自动更新的响应式对象。

同一 css 回调内部保持声明顺序、fallback、简写/长属性与嵌套交错。多个独立 class 字符串的排列遵循原生 CSS 层叠，不能用 HTML class 顺序表达覆盖；需要确定书写顺序时在同一回调中调用共享帮助方法，再写局部覆盖。

## 主题与所有权

Css 是实际可继承的作者类，提供系统属性；extendProperty 增加用户关键字且拒绝覆盖已有操作。defineTheme 预设继承保持变量身份，provideTheme 使用组件逻辑作用域向下覆盖；当前 provider 组件可显式传入返回的 scope。

可选 themes 入口提供 lightTheme、darkTheme 和 ThemeCss，覆盖语义颜色、尺度、字体、时长与阴影，支持预设继承和局部覆盖。详细配对和用法见 [系统亮暗主题](themes.md)。

readTheme(definition, scope?) 返回有效主题的深只读快照；适配器 useTheme 返回捕获作用域的 getter，可供模板/computed/$derived 追踪。无同名 provider 时回退到传入定义的默认值，同名 schema 冲突报错；读取不注册样式、不创建订阅。新增 API 和维护证据见 [维护审查](maintenance-audit.md)。

主题视图的 css 返回类名列表。放在模板/computed/$derived 中会随有效主题更新，DOM 移动不改变逻辑主题。定义不持有请求状态；组件不 dispose 共享 context。全局样式有稳定、唯一的 owner key，更新保持原槽位顺序，宿主最终释放 runtime/context。

计算缓存与规则生命周期分开：256 项计算缓存和 128 项绑定校验缓存可以驱逐，绑定缓存同时限制为 65,536 UTF-16 字符，超大合法值不驻留；已注册规则可能被仍存活的 DOM 或已保存字符串使用，不自动 LRU 删除。应用可使用 maxRecords 限制记录数，超限明确失败且不破坏旧记录。

## 诊断与交付

根 name 加内容哈希；config 首版只有 debug。开发来源使用项目相对文件位置且有数量上限，不改变 CSS 内容哈希。运行时 manifest v2 兼容原 v1，服务端与客户端必须使用同一构建产物。

本地 LSP 使用 zerodep-source 条件；pnpm 打包 hook 去掉该开发条件。JS 地图内嵌源码，声明直接定位发布的 d.ts。完整证据见 [生产验收](production-audit.md)，换机流程见 [交接](handoff.md)。
