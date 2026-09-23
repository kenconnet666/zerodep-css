# 性能对照与未解决项

本轮已按用户要求停止继续优化；以下记录是已完成的测试结果，不表示所有性能问题已经解决。

## 方法与环境

- 环境：win32，Node v24.18.0，Chrome 153.0.8010.53；Vue 3.5.43、Svelte 5.57.0。
- 对照：Emotion CSS 11.13.5、goober 2.1.19、vanilla-extract 1.21.2，官方 esbuild 插件 2.3.22。
- 两套真实 SFC 分别经过官方 Vue/Svelte 编译器；我们的自动路径额外验证确实生成绑定/准备代码，vanilla-extract 使用实际提取的 CSS。
- 每套 200 个元素，5 批预热后执行 30 批状态更新，5 轮轮换次序取中位数。Vue 等待 nextTick，Svelte 等待 tick，每批强制布局刷新。
- 挂载数值表示库已加载、JS 已预热后的新实例挂载；没有测网络下载、JS 首次解析、FCP、真实绘制和复杂业务页面。计时不并行竞争 CPU，依赖准备和构建并行。
- 有限值场景循环 16 个宽度；growing 场景各元素取不同整数值且逐批增长，运行时类名方案最终累计 235 条规则。它不是无限唯一值的长期压力测试。
- 主题对照使用同一份固定主题变量，主题本身不切换。native/emotion/goober 的主题类预先声明；我们的 scoped-auto 使用标准 Css，theme-class 使用 ThemeCss 并保留运行时回退。

## 本机结果

单位均为毫秒；更新是 30 批总时间，原生/编译产物的规则数 0 表示测量时没有新增规则，并非没有预加载 CSS。

| 场景                    | Vue 挂载 | Vue 更新 | Svelte 挂载 | Svelte 更新 | 运行时规则数 |
| ----------------------- | -------: | -------: | ----------: | ----------: | -----------: |
| native-static           |      1.5 |      2.1 |         1.8 |         0.2 |            0 |
| vanilla-static          |      1.4 |      1.9 |         1.7 |         0.2 |            0 |
| zerodep-auto-static     |      2.3 |      9.3 |         2.8 |         0.3 |            1 |
| zerodep-runtime-static  |      3.9 |     38.8 |         4.5 |         0.3 |            1 |
| emotion-static          |      1.9 |      7.3 |         2.3 |         0.3 |            1 |
| goober-static           |      1.7 |      6.8 |         2.2 |         0.3 |            1 |
| zerodep-once-static     |      2.2 |      1.9 |         2.1 |         0.3 |            1 |
| emotion-once-static     |      1.6 |      1.9 |         1.8 |         0.2 |            1 |
| goober-once-static      |      1.4 |      1.9 |         1.9 |         0.3 |            1 |
| native-vars             |      1.9 |     71.5 |         2.5 |        72.5 |            0 |
| vanilla-vars            |      1.9 |     71.0 |         2.6 |        73.9 |            0 |
| emotion-vars            |      2.1 |     75.2 |         2.7 |        76.1 |            1 |
| goober-vars             |      2.2 |     72.3 |         2.7 |        72.4 |            1 |
| zerodep-auto            |      3.5 |     80.5 |         4.8 |        81.3 |            1 |
| native-classes          |      1.5 |     32.3 |         1.8 |        32.4 |            0 |
| vanilla-classes         |      1.5 |     31.5 |         1.7 |        32.8 |            0 |
| emotion-object          |      2.2 |     38.0 |         2.9 |        42.8 |           16 |
| goober-object           |      2.1 |     38.2 |         2.8 |        43.0 |           16 |
| zerodep-runtime         |      7.2 |     70.0 |         8.9 |        88.7 |           16 |
| native-growing-vars     |      2.8 |     72.0 |         3.5 |        73.8 |            0 |
| vanilla-growing-vars    |      2.8 |     72.0 |         3.6 |        77.1 |            0 |
| emotion-growing         |      4.1 |     78.7 |         6.0 |        82.2 |          235 |
| goober-growing          |     16.8 |     57.8 |        18.6 |        64.1 |          235 |
| zerodep-growing-auto    |      4.5 |     80.1 |         5.5 |        79.3 |            1 |
| zerodep-growing-runtime |     33.8 |    133.4 |        34.9 |       147.1 |          235 |
| native-themed-vars      |      2.2 |    135.8 |         2.7 |       133.4 |            0 |
| native-themed-classes   |      1.8 |     35.0 |         2.1 |        35.9 |            0 |
| emotion-themed          |      2.4 |     40.7 |         3.1 |        45.5 |           16 |
| goober-themed           |      2.2 |     41.7 |         3.1 |        48.6 |           16 |
| zerodep-scoped-auto     |     21.3 |    136.9 |        24.5 |       140.0 |            2 |
| zerodep-theme-class     |     23.7 |    483.0 |        25.6 |       525.6 |           17 |

场景说明：auto 为实际自动编译路径；runtime 为不启用 CSS 插件的回退；vars 为已创建类名加原生 CSS 变量；object 为每次调用 CSS 对象 API；once-static 为初始化生成一次静态类名后复用。

## 结论与剩余差距

- vue：自动变量路径比原生变量基线多 12.6%；普通运行时类名更新耗时为原生有限类名切换的 2.17 倍、Emotion 对象路径的 1.84 倍。
- vue：ThemeCss 回退耗时为对应原生主题类名路径的 13.80 倍，仍是明显瓶颈；scoped-auto 的热更新接近原生主题变量，但挂载仍有额外成本。
- svelte：自动变量路径比原生变量基线多 12.1%；普通运行时类名更新耗时为原生有限类名切换的 2.74 倍、Emotion 对象路径的 2.07 倍。
- svelte：ThemeCss 回退耗时为对应原生主题类名路径的 14.64 倍，仍是明显瓶颈；scoped-auto 的热更新接近原生主题变量，但挂载仍有额外成本。
- 静态类名初始化一次后复用，各方案可以接近原生。Vue 模板中重复调用 css 仍有成本；Svelte 在静态表达式无相关依赖变化时不重新计算，不能套用同一个倍数。
- vanilla-extract 在本场景生成静态 CSS，运行时接近原生。CSS 变量与有限类名切换的浏览器成本本身不同，不能跨策略把全部差异都算给样式库。
- 当前准备缓存仍保留 CSS 运行时，不是零运行时静态提取。已有功能与正确性验证不等于性能已经追平原生或 Emotion。

## 体积

| 产物                         | minify 字节 | gzip 字节 |
| ---------------------------- | ----------: | --------: |
| zerodep createRuntime 单入口 |      498586 |    100825 |
| emotion.js                   |       15589 |      6436 |
| goober.js                    |        2329 |      1324 |
| vanilla.js                   |         785 |       433 |
| vanilla.css                  |         416 |       147 |

Emotion/goober 是本次保活入口；vanilla 的 JS/CSS 是本次 18 个样式的提取结果，不能把它当成任意应用的固定总大小。zerodep 的完整运行时包含 CSS 元数据和语法处理，首包体积差距仍显著；这里没有测首屏耗时。

## 复现与证据

- 执行 `pnpm build` 后运行 `pnpm research:compare`。版本集中在 pnpm-workspace.yaml 的 benchmark catalog；依赖装入独占临时目录，成功后自动清理。
- 本机默认 Chrome。没有 Chrome 时可安装 Playwright Chromium 并设置 ZERODEP_BROWSER_CHANNEL=chromium；换机结果受硬件和浏览器版本影响。
- 原始样本、版本、编译路径与对照依赖锁已提交到 `.research/performance/results/2026-09-23-*`，新机器不依赖本机忽略目录。
- `browser-native.mjs` 是隔离 core 的低层探针，不能代替此页的 Vue/Svelte 结果；其他 Node 探针见 validation。
- 官方接入依据：[Emotion create-instance](https://github.com/emotion-js/emotion/blob/main/packages/css/README.md)、[goober targets](https://github.com/cristianbote/goober/blob/master/docs/docs/api/targets.md)、[vanilla-extract esbuild 插件](https://github.com/vanilla-extract-css/vanilla-extract/blob/master/site/docs/integrations/esbuild.md)。

接续优先级：先核对最终提交 CI；随后审视固定主题类的重复构建、Vue 静态表达式的重复求值、普通运行时热路径及元数据/解析器体积。任何优化继续保留两重继承、运行时回退、宿主校验和 SSR 隔离；本轮未继续实施这些项。
