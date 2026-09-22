# bx 更新路径比较

此探针比较手写的候选降级结果，不替代产品宏转换测试。运行前先 `pnpm build`，再执行 `node .research/bx/probe.mjs`；默认使用已安装 Chrome。

2026-09-22，本机 Node 24 / Chrome 153 的结果：

| 路径                    | 初始回调次数 | 仅绑定值变化 | 再改无关状态 | 再改普通颜色 |
| ----------------------- | ------------ | ------------ | ------------ | ------------ |
| Vue 模板直接 css        | 1            | 2            | 3            | 4            |
| Vue computed            | 1            | 1            | 1            | 2            |
| Svelte 原生 class/style | 1            | 1            | 1            | 2            |

三条路径在仅绑定值变化时 class/规则数均不变，但 Vue 直接求值仍执行了回调。因此产品选择 Vue 稳定 computed 和 Svelte 原生 style 指令。不同请求的 SSR 初值及客户端 hydration 也已验收。

产物写到忽略的 `test-results/bx-probe`，其中 results.json 保留回调次数、class、规则统计和计算宽度。真实宏的别名、作用域、源码映射及限制由 `internal/compiler/test/transform.test.mjs` 验证；真实组件、独立消费和 HMR 测试入口见 `.design/bx-compiler.md`。
