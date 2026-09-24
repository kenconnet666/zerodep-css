# 运行时性能架构决策

日期：2026-09-24。状态：已决定。本记录面向下一阶段实施，证据限定于当前 `codex/runtime-first` 的锁定版本及已提交样本。完整运行时 CSS、普通同步 JavaScript 回调、框架原生响应式、SSR 请求宿主和逐记录事务是产品合同，优化器不能缩小它。

## 结论

**当前不引入通用的“固定 CSS 结构＋动态参数”执行计划，也不改用共享 style 节点或按回调身份缓存。** 保留已验证的静态准备、原位置动态绑定和完整运行时回退。动态 raw/token 的双重值判定已在 `8226e53` 消除；在缺乏真实 Vue/Svelte 整链收益和严格语义证明前，不继续扩展编译器或宿主架构。此结论是本阶段的终点，不以多轮试验换取一个未经证明的产品 fast path。

## 现有成本能说明什么

| 证据                                                                                           | 观察                                                                                          | 边界                                                                |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [Vue/Svelte 同机交叉重测](../.research/performance/results/2026-09-24-p4c-retest/README.md)    | 200 元素、30 批有限值更新，当前自动变量约为原生变量的 1.8—2.1 倍；全新值自动绑定保持 1 条记录 | 原生/Emotion 对照行也有明显跨次漂移，不能把 Node 改动换算为页面提速 |
| [Node CPU 采样](../.research/performance/results/2026-09-24-binding-optimization/README.md)    | 自动单位样本中 runtime/cache 约 42.4%、Builder 约 30.1%、作者 Proxy 约 9.7%                   | 不含框架更新、DOM、布局；采样份额不是可节省的百分比                 |
| [动态绑定合并](../.research/performance/results/2026-09-24-binding-optimization/README.md)     | raw/token 绑定辅助的同机配对计算下降约 19.5%—33.2%                                            | 纯 DOM 两轮幅度不一致，尚无整页同比收益证明                         |
| [规则节点隔离探针](../.research/performance/results/2026-09-24-binding-optimization/README.md) | 1400 条规则合并到一个节点，纯 DOM 插入约省 4.7—7.6 ms                                         | 真实全新值运行时整组约 104—119 ms；未覆盖回滚、全局更新与恢复       |

因此可以确认 JS 构建/缓存路径有成本，不能确认任何大改写会改善最终页面。当前推荐的跨模块 `styles.ts` 用法还常走完整运行时，同 SFC 的 benchmark 优化命中率不能代表实际项目。

## 对参照实现的取舍

- [Emotion `css()`](https://github.com/emotion-js/emotion/blob/%40emotion/css%4011.13.5/packages/css/src/create-instance.ts)每次调用仍序列化，已插入内容才避免重复写规则。本项目已有内容缓存、CSSOM `insertRule`、按宿主校验和失败回滚；不能据此按任意函数引用跳过回调或 CSS 校验。
- [Emotion StyleSheet](https://github.com/emotion-js/emotion/blob/%40emotion/sheet%401.4.0/packages/sheet/src/index.ts)在生产模式把多条规则写进较少节点。本项目的节点 ID 同时承担逐记录替换、诊断、失败回滚、外部删除检测与严格 hydration 对照；隔离探针的数毫秒上限不足以支持修改整个所有权模型。Emotion 对插入失败的处理也不能用于本项目的事务合同。
- [Kysely 编译器](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts)与[构建/执行分离示例](https://github.com/kysely-org/kysely/blob/master/site/docs/recipes/0004-splitting-query-building-and-execution.md)提供了“结构与当次参数分层”的设计参照；它每次 `.compile()` 仍遍历查询树，不能证明任意 DSL 回调可按身份缓存。CSS 值比 SQL 参数多出省略声明、级联和计算值阶段失效等语义。

## 为什么当前自动绑定不等于固定结构

`automaticDeclarations()` 能证明部分声明调用位置，却允许属性 getter、索引和条件表达式；这些读取可抛错或有副作用。现行转换将读取留在原声明位置，保证前面的非法声明先抛错、后面的 getter 不被提前触发。`prepareStyle` 的键只适用于可变读取已经全部移出的静态回调；误用于动态回调会在缓存命中时跳过原作者代码。

例如 `s.width.px(50); s.width.px(gap)` 在 `gap == null` 时省略第二条并保留前面的 50px。强行固定为 `width:var(--gap)` 且变量缺失，会在计算值阶段失效，不会恢复被级联淘汰的 50px。另一个场景是元素已有外部 `.base { color:red }`，本库动态 raw 生成另一条颜色规则：未知或非法直接声明可在解析时被浏览器忽略，外部 red 因而仍有效；若盲目改成 `var()` 后才失效，先前外部值不会重新胜出。[CSS Variables](https://drafts.csswg.org/css-variables/#invalid-variables)与[CSS Cascade](https://drafts.csswg.org/css-cascade-5/#filtering)规定了这些阶段差异。CSS-wide 值、简写和 `!important` 还会改变哪些声明实际生效。

即使缩到单个动态单位，也不能靠 TypeScript 类型证明运行时 getter 不返回 null；若提前取值，还可能把读取移到 `runtime.css()` 的 dispose 检查之前。为了保持行为，需要在原时机求值、逐次检查形状，并为省略/直接声明走完整运行时。此时准备计划、保护性分支及两套执行路径的成本与维护范围尚无整链收益证据。派生 `Css`、主题、全局资源和跨模块作者配置更不属于可直接套用的子集。

## 执行边界

1. 继续以现有 runtime 为唯一语义基线：每次正常执行作者回调；计算缓存只属于应用/请求宿主，命中仍验证 DOM 及资源所有权。编译器只能转换可证明等价的站点，失败不拒绝合法作者代码。
2. 不实现函数身份缓存、跨请求业务样式缓存、泛化 CSS 参数化、默认静态 CSS 路径或样式节点池。不为单一微基准增加新的常驻元数据索引；单位索引候选已经在成对探针中出现回归并撤回。
3. 本阶段停止性能架构扩张。下一次只有真实项目工作负载确认用户可感知的瓶颈时，才以**一个**可证明子集重新评估；先取得包含推荐跨模块用法的完整 Vue/Svelte、SSR/hydration 与浏览器基线，不从 Node 微基准外推。

若重新评估，硬门槛是：属性 getter/回调的次数、顺序和抛错位置相同；null/undefined、CSS-wide、无效值、重复属性、主题/派生类、宿主损坏与 dispose 的 class、inline style 和计算样式相同；SSR HTML/manifest、hydration、HMR 与回滚相同。性能判据定为至少三组独立 ABBA 同机运行：Node 执行中位耗时改善至少 15% 且超出旧版对照噪声；真实 Vue 与 Svelte 更新各改善至少 10%，也超出同轮原生/旧版对照波动；其他常用路径不得出现超过 5% 的稳定退化，同时记录挂载、内存与规则增长。这是重新投入工程成本的门槛，不是当前测量已达到的结果。达不到任一条件即保留现有实现，不再以新的小缓存弥补架构不等价。
