# 运行时主线跨版本重测

2026-09-24，在同一台 Windows 机器上比较 P4c 前的 `050d075` 与当前 `889b315`。当前提交只在已验收产品代码之上做文档/旧样本清理；两版的 `compare-engines.mjs`、`frameworks.mjs` 与 benchmark catalog 相同。基线由 Git archive 放入忽略的隔离目录，分别安装、构建，不使用另一版的 dist。两版横向 benchmark 生成的 `pnpm-lock.yaml` 字节相同。

浏览器为 Chrome 153.0.8010.53，Node 24.12.0，pnpm 10.34.5，Vue 3.5.43，Svelte 5.57.0。按基线 A → 当前 A → 当前 B → 基线 B 串行运行；每个报告对每个场景预跑一次，再轮换顺序做 5 轮，取中位数。普通场景是 200 元素、5 批预热、30 批更新；持续新值是 200 元素、1 批预热、5 批更新。计时含框架调度与每批布局读取，不含资源网络下载和首次 JS 解析。各报告均为 `passed`，实际计算值、类名、主题、记录数、清理和编译命中均通过脚本断言。

文件：

- `browser-baseline-a.json` / `browser-baseline-b.json`：优化前两次完整浏览器报告；`browser-current-a.json` / `browser-current-b.json`：当前两次报告。
- `compiler-baseline.json` / `compiler-current.json`：静态准备、变量绑定与运行时回退分类。两个版本在本次夹具中的分类相同。
- `pnpm-lock.yaml`：四次浏览器报告一致的 benchmark 依赖锁。
- `node-registration-current.json`：同一 Node 进程里交替测量两套独立打包源码；`node-registration-control.json`：旧版与旧版的噪声对照。各场景 64 次预热、2000 次操作、7 轮交替，完整 snapshot 与工厂调用次数必须相等。
- `size-baseline.json` / `size-current.json`：相同 esbuild 入口的 minified/gzip 体积与模块图。

## 结果边界

Node 注册微基准中，全新单属性为 190.4 → 169.4 ms（−11.0%），全新嵌套为 291.9 → 257.5 ms（−11.8%）；旧版对照分别波动 +0.9% / +0.5%。重复动画 −1.2% 不作结论，重复组合 −9.8% 但控制组 +5.3%，也不据此声称稳定收益。Node 结果不含 DOM、框架和布局。

浏览器跨进程结果波动较大。例如 Vue 原生变量更新，基线 A → 当前 A 由 72.8 变为 61.0 ms，而基线 B → 当前 B 由 61.4 变为 68.2 ms。两次顺序反转后不能证明当前版本有统一的页面级提速。当前两轮中，有限值运行时和自动变量、持续新值及主题场景的绝对耗时见 [性能文档](../../../../docs/performance.md)。同样不能把全部差异归因于 P4c：当前版本还包含之后的语义与元框架改动。

持续新值时，自动变量路径只保留 1 条记录，直接运行时新规则达到 1400 条；它们提供不同的语义与 CSP 选择，不能只凭一个数字替代另一种写法。浏览器 `records` 是宿主逻辑记录数，不代表网络下载量或 style 节点数量。

完整 css 入口体积由 517610 / 107549 B（minified / gzip）变为 517834 / 107665 B，增加 224 / 116 B；`Css` 小入口仍是 2163 / 828 B。体积不表示运行速度。

复现需先构建两个精确提交，在同一浏览器/依赖下串行运行各自的 `pnpm research:compare`；Node 路径在当前 checkout 使用 `node --expose-gc .research/performance/cache-paired.mjs 050d075 <label> --registration`，旧版对照再加 `--control`。正式计时期间不要并行构建或运行其他压测。
