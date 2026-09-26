# 验收与性能工具

此目录是测试基础设施，包含 Vue/Svelte 的真实组件夹具、打包与浏览器启动器，以及性能对照脚本。公开 API 与接入说明以根目录 docs 为准；这里的探针不作为产品 API。

独立依赖保持锁定。在仓库根执行 pnpm build，随后在本目录执行 pnpm install --frozen-lockfile。耗时场景由 CI 运行，本地只执行当前改动相关的焦点检查。

## CI 职责

- test:compiler-instances / test:vfor-style / test:keyword-variants：编译器实例、列表缓存与研究副本正确性。
- test:selectors / test:author-api / test:bindings：三浏览器原生 CSS、作者 API、bx 和 CSP。
- test:mup:* / test:examples:* / test:transport：包产物、SSR、hydration 和主题。
- test:metaframeworks：真实 Nuxt/Kit 应用；CSS_TEST_FRAMEWORK 可以单独选择其中一个。
- probe:bindings：200/1,000 行，bx、普通运行时、内联变量与 Emotion 同场对照。
- probe:keywords / probe:template-derived / probe:template-conditional / probe:vfor-style：作者表示方式与模板派生的成本。

CSS_PROBE_BROWSER_CHANNEL 可选 chromium、firefox、webkit，未设置时保留本机 Chrome 使用方式。CI 时间只做诊断，正确性和资源计数分别断言。结果写入 test-results 并作为任务独立 artifact 上传。

历史性能样本在 results，历史决策在 ../../.research。已失效的单宿主 legacy 实现和命令已从当前工作树删除，可从 Git 历史恢复。
