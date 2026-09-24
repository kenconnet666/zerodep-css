# 绑定热路径与架构候选探测

基线为 `c9621c6`，当前改动仅让编译生成的 `bindValue()` 对同一个动态 raw/token 输入做一次字符串规范化和变量化判定，并同时产生声明值与内联变量。原有独立 `value()`、`inline()` 入口不变；对象仍按旧合同交给 Builder。未跳过作者回调，不新增跨请求缓存，不改变 CSSOM/SSR 所有权。

## 成对计算与浏览器探针

`binding-current.json` 和 `binding-control.json` 由 [binding-paired.mjs](../../binding-paired.mjs) 生成。两边分别从 Git 基线与当前源码打包，使用同一依赖，在一个 Node 进程内交替测量；每个场景预热 30000 次、正式 300000 次、9 轮中位数。每轮均比较返回值、内联值、直接返回次数和最终绑定快照。control 两边均为旧版。

| 场景          |      旧版 → 当前 |   变化 | 旧版对照变化 |
| ------------- | ---------------: | -----: | -----------: |
| raw color     |  127.5 → 85.8 ms | −32.8% |        +2.1% |
| raw width     | 152.3 → 101.7 ms | −33.2% |        +6.7% |
| token display | 191.3 → 128.8 ms | −32.7% |        +4.3% |
| 数值 opacity  | 143.9 → 115.8 ms | −19.5% |        −4.1% |

这是绑定辅助的计算成本，不是整页提速。`binding-browser-a.json` / `binding-browser-b.json` 由 [binding-browser.mjs](../../binding-browser.mjs) 在 Chrome 153 下生成：200 个节点、30 批变量写入、每批布局读取、9 轮中位数，旧版/当前分别为 42.7/39.5 ms 与 49.4/48.1 ms。浏览器绝对耗时和差异幅度均有波动，只说明方向可能有利；Vue/Svelte 的组件更新成本仍需独立测量。

## 未采用的方向

- `rejected-unit-index.json` 与 `unit-index-control.json`：尝试对静态单位元数据按需建索引。单单位场景反而约慢 6.6%，不同场景方向不一，旧版对照也有明显波动；候选代码已撤回，不为不确定收益常驻新索引。
- `style-node.json` 由 [style-node-cost.mjs](../../style-node-cost.mjs) 生成。1400 条 CSSOM 规则分别用独立节点与一个共享节点，第二轮中位 6.8 / 2.1 ms；首轮为 10.3 / 2.7 ms。这只隔离 DOM 插入，不含框架或引擎处理。共享节点会改变本库逐记录替换、失败回滚、nonce、外部篡改检查和严格 hydration 的表示，不能凭数毫秒差距直接照搬 Emotion。
- `browser-native.json` 是当前产品的纯 DOM 下界：200 节点、50 批更新，预准备变量路径约 153.8 ms，原生变量约 133.6 ms。手工准备不代表可自动跳过有副作用的作者回调。

`runtime-profile.json` 是变更前当前版本的 Node CPU 采样：自动单位路径的 runtime/cache 约 42.4%，Builder 约 30.1%，作者 Proxy 约 9.7%，值边界约 7.1%。这是采样归类，不能换算浏览器耗时；本次 `bindValue` 改动不影响自动单位路径。

## 后续结构方向

Emotion 的 [css 入口](https://github.com/emotion-js/emotion/blob/%40emotion/css%4011.13.5/packages/css/src/create-instance.ts)仍对每次调用序列化，只避免已插入内容的重复写入；其 [StyleSheet](https://github.com/emotion-js/emotion/blob/%40emotion/sheet%401.4.0/packages/sheet/src/index.ts)对规则分组，本库已有 `insertRule`，但拥有更严格的逐记录事务与恢复合同。[Kysely 编译器](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts)将结构和参数分层可作为设计参考，它并不自动缓存任意动态查询；CSS-wide、空值、无效值及 var fallback 还会改变级联语义。

下一阶段优先在编译器**确实证明结构固定**的子集里研究“结构准备＋当次值”执行计划；必须保持 getter 次数/顺序、null 声明省略、错误时机、宿主验证和 SSR 结果。普通运行时回调仍每次执行，未知形态继续原路径。
