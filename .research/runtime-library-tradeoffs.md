# 运行时 CSS 库对照：优先补边界，控制实现规模

日期：2026-09-26。本轮只研究、复现和规划，没有改动产品运行时。

后续决策更新：命名全局块、keyframes、独立类标记、属性方法补强及隐式响应式绑定已实现；类组合最终并入 `css`，独立 `cx` 已移除。当前用法见[作者 API](../docs/author-api.md)；下文保留原始审查依据。

主要依据是用户提供的本地 Emotion 仓库：提交 `b882bcba85132554992e4bd49e94c95939bbf810`，`@emotion/css` 11.13.5、cache 11.14.0、serialize 1.3.3、hash 0.9.2。浏览器探针也使用这四个版本，运行在 Chrome 153.0.8010.54。不是对未知未来版本或所有运行时 CSS 库的结论。本地 Emotion 仓库保持只读。

交叉参考 Goober 与 Styletron 的上游源码；没有安装它们做性能排名。本项目已有性能研究足够支持阶段取舍，本轮不再扩展大规模微基准。

## 核心判断

继续保持声明字符串、普通 `if` / `switch`、框架上下文和浏览器原生 CSS 的路线。值得借鉴的是宿主边界、去重、恢复与诊断；不需要为了与 Emotion 功能表相同而引入对象 DSL、完整 CSS 解析器、React styled 层或编译器。

先修可复现的注册器问题，再补宿主配置。全局样式和 keyframes 可以作为后续小功能，SSR 清单压缩、自动规则回收、原子化和编译提取暂缓。

## Emotion 实际做了什么

`@emotion/css` 的普通调用链是：

```text
css(...输入)
  → serializeStyles：处理输入、插值，计算名字
  → registerStyles：保存类名到原始样式的映射
  → inserted 命中则跳过后续工作
  → 未命中时 Stylis 编译、嵌套展开、前缀处理
  → stylesheet.insertRule
```

`serializeStyles` 对已序列化对象有直接返回路径，不能笼统说所有调用都必定重新做全部工作。但普通字符串调用通常仍先序列化和哈希，再检查已插入缓存。源码：[css/create-instance](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/css/src/create-instance.ts#L103)、[serialize](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/serialize/src/index.ts#L378)、[utils](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/utils/src/index.ts#L45)、[cache](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/cache/src/index.ts#L137)。

我们的路径为：

```text
css(...声明字符串)
  → join
  → 完整正文 Map 命中，直接返回类名
  → 未命中才计算哈希、检查冲突、insertRule、记入缓存
```

已有缓存命中不用再次哈希，也不用运行 Stylis。生成的属性名、关键字与明确的 `px()` 入口，使我们不必承担通用对象遍历、属性名转换和隐式单位补全。它是路径上的工作量差别，不是“页面一定比 Emotion 快”的承诺。

## 能力取舍

| 能力                                               | Emotion 的实现目的                 | 我们的取舍                                                             |
| -------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| 已注册样式与已插入规则缓存                         | 复用、类名组合、避免重写           | 保留现有正文缓存与 CSSOM 去重，暂不增加缓存层                          |
| 对象、数组、函数、模板插值                         | 兼容多种作者写法                   | 不加入；现有字符串和普通函数足够，避免扩大输入状态空间                 |
| Stylis 与前缀插件                                  | 展开嵌套、前缀兼容和插件处理       | 不默认加入；明确依赖现代原生 CSS，不承诺 Sass 式选择器拼接             |
| CSSOM 写入                                         | 生产模式逐条插入                   | 已采用，继续保留                                                       |
| nonce                                              | 适配 CSP 样式策略                  | 值得补；必须连 SSR、客户端新增规则和变量绑定一起验收                   |
| insertionPoint / prepend                           | 控制与其他样式表的相对位置         | 选一个清晰的位置配置即可，不复制多个同义选项                           |
| cache key / container                              | 区分缓存、支持不同容器             | 先明确宿主身份与所有权；ShadowRoot / iframe 容器等到实际需要再扩展     |
| flush                                              | 清除缓存和样式标签                 | 只适合明确的宿主生命周期；不能在任意组件卸载时全局清空                 |
| labels / source map / Babel                        | 定位来源、编译优化                 | 先补真实插入失败的上下文与规则数诊断；源码位置和插件后置               |
| `cx()` / `merge()`                                 | 把已注册类名找回样式，再合成新规则 | 不加入；在注册前组合声明字符串即可，不重新建立类名合并 DSL             |
| injectGlobal / keyframes                           | 顶层规则、动画定义                 | 可在后续按真实需求小范围补充，暂时可由普通 CSS 文件承担                |
| SSR critical extraction                            | 从 HTML 中筛出使用到的规则         | 暂缓；当前每请求收集简单可靠，少量预注册分支的重复成本先测量           |
| SSR 按 ID 恢复                                     | 减少恢复元数据                     | 暂缓；我们的正文快速命中、清单核验和冲突检查需要原始正文，不能只删字段 |
| 全局样式独立 sheet                                 | 独立更新或卸载全局规则             | 只有实际实现动态 global 生命周期时才需要                               |
| 多 stylesheet 分段                                 | 容量与开发源映射管理               | 不照搬 65,000 规则常量；先确认支持浏览器、实际规模与诊断需求           |
| React insertion effect / ThemeProvider / prop 过滤 | React 渲染时序与组件封装           | 不搬入；Vue/Svelte 使用自己的上下文和生命周期，主题值走 DOM 变量继承   |

宿主参数仅在应用接入时配置，不让每次 `css()` 都重复携带参数，不做一个包含几十个开关的总配置对象。

Emotion 的 [sheet](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/sheet/src/index.ts) 同时承担 nonce、位置、分段和清理；其 65,000 是代码中的策略常量，不能当成所有现代浏览器的统一限制。[SSR 提取](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/server/src/create-instance/extract-critical-to-chunks.js)会扫描 HTML 中的类名；[React Global](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/react/src/global.tsx)有自己的 sheet 和清理时序。这些实现都服务于具体需求，不是越齐全越好。

## 已复现的问题与边界

执行 `pnpm --dir .research/string-css-probe probe:library-review`，结果见[原始记录](string-css-probe/results/runtime-library-review.json)。探针只在内存中的注册器副本统计哈希调用，产品文件不变。这是本次缺口快照，不把“继续复现缺陷”设为 CI 通过条件；修复时应迁移成正式回归用例。

### 新规则重复哈希

一条新规则实际计算两次哈希：`css()` 计算类名，插入成功后 `remember()` 又验证同一个名字。相同正文再次调用，包括换一种片段拆分方式，哈希次数为 0。

建议把新规则可信写入与 hydration 的外部清单校验分开，新规则只算一次。插入失败仍不写缓存，hydration 仍核验名字并整体回滚。这里只确定减少一次遍历，没有声称它能带来明显页面提速。

### 当前 32 位哈希的有效输入碰撞

这两条不同声明都得到 `12d34fj`：

```css
--probe: 28fx-1rqasrx;
--probe: 28vj-gi2s3j;
```

在空注册器中依次注册，第二条抛出 `CSS class hash collision.`。有冲突检查比静默复用错误规则好，但有效输入仍可能打断渲染，需要优先解决。

建议优先比较基于完整 UTF-16 输入的更宽内容哈希，保持确定性并保留冲突检查；没有必要引入加密哈希或 native/WASM 包。不要简单按到达顺序加 `_1`、`_2` 后缀，那会把规则顺序引入命名与 SSR 恢复契约。更换算法会改变类名，需要成套验证服务端和客户端产物。

也不应直接复制 Emotion 的哈希。当前版本的 [Murmur2 实现](https://github.com/emotion-js/emotion/blob/b882bcba85132554992e4bd49e94c95939bbf810/packages/hash/src/index.ts)对字符使用低 8 位；探针中的 `content:"Ā"` 与 `content:"Ȁ"` 产生同一个 `css-ronb0k`，最终两个伪元素都显示前者。我们这组输入得到不同类名并正确显示。这是指定版本和输入的实测，不是对 Emotion 所有用法的概括。

### 外部移除样式标签后，缓存仍返回类名

强制删除 `style[data-zerodep-css]` 后，再次调用已有的 `css('color:rgb(4,5,6);')`，返回值没变，但计算颜色已回到黑色。当前 Map 知道曾经注册过，无法据此保证 DOM 样式仍存在。

这是故障注入测试，不代表普通导航已失败，也未测试真实 HMR。下一步应明确宿主所有权、开发诊断和显式重建 / dispose 的边界，不应立即增加常驻 MutationObserver，或每次命中都扫描样式表。

### 原生嵌套不等于 Stylis 嵌套

`&-child{color:rgb(1,2,3)}` 经 Emotion 处理可以匹配拼接后的类名；我们直接交给 Chrome 原生嵌套时，对应元素保持黑色。这个区别应写清楚，不能宣传完全兼容 Emotion/Sass 的 selector 语法。

继续支持原生 `&:hover`、`& .child`、media 等实际支持的写法，不为了这一种拼接语法增加整个解析器，也不新增属性值合法性检查。原生无效声明处理与任意字符串逃生入口保持不变。

## 其他运行时库提供的参考

Goober 的 [hash](https://github.com/cristianbote/goober/blob/master/src/core/hash.js)会缓存字符串到名字及解析结果，但仍有自己的 CSS 解析。[update](https://github.com/cristianbote/goober/blob/master/src/core/update.js)通过查找并修改整个文本维护样式；[get-sheet](https://github.com/cristianbote/goober/blob/master/src/core/get-sheet.js)默认使用一个 SSR 缓冲区，也允许传独立 target。可以学习职责少、函数短，不能据此断言它更快；我们继续采用 Map 和逐条 CSSOM 写入，并坚持请求隔离。

Styletron 的 [client](https://github.com/styletron/styletron/blob/master/packages/styletron-engine-atomic/src/client/client.ts)和 [cache](https://github.com/styletron/styletron/blob/master/packages/styletron-engine-atomic/src/cache.ts)体现另一条路线：原子规则、按 media 分组、顺序 ID、专门的恢复逻辑。它能提高声明复用，但会带来解析 / 拆分、条件排序与新的组合约束。当前声明字符串路线不应为了这一点切换原子引擎；顺序 ID 也不是可以无成本替换内容哈希的办法。

## 建议的下一轮范围

1. **注册器正确性与小优化。** 固化碰撞和 Unicode 回归用例，选定更宽的确定性哈希；去掉新规则重复哈希。保留插入失败可重试、hydration 原子恢复、缓存命中不做额外工作。仅做本次路径的焦点性能核对。
2. **宿主最小配置。** 加 nonce 与一个明确插入位置，贯通 Nuxt/SvelteKit 的服务端输出和客户端接入；明确宿主所有权、移除后的处理与开发诊断。不要把样式标签 nonce 当成整个 CSP 策略已通过，现有 SSR 变量与客户端绑定也需要真实响应头验收。
3. **有用法后再扩展顶层规则。** 如果确实需要在 TS 中定义动画 / 全局样式，再做字符串形式的 `keyframes` 和一个全局规则入口，共用规则登记、SSR 和恢复。此时统一设计规则种类，不各写一套缓存或增加对象 DSL。

暂不做：自动逐组件规则回收、强制 LRU 删除 CSS、无限跨请求注册表、Stylis/前缀器插件系统、React styled 层、原子化、Babel/编译提取、ID-only SSR 清单、每次调用捕获堆栈。动态新值优先使用现有变量绑定；规则增长可以做宽松诊断，不能因缓存淘汰删掉仍被页面使用的规则。
