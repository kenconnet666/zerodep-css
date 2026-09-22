# 后续实施路线

当前：阶段 1–3 及阶段 3.5 的目录、命名与基础设施整理已实施。最终验收提交和换机步骤见 handoff.md。当前架构以 architecture.md 和各包 README 为准。

## 下一阶段：显式 ibind 编译

仍然只有 core/vue/svelte 三个产品包。编译代码按需放适配器 src/compiler，并通过独立 exports 子路径提供；默认浏览器入口不能导入 Node/AST/Vite 依赖。没有功能前不创建空插件或虚假导出。

按以下顺序推进：

1. 在两种官方编译链中各做一个可运行探针，识别真正导入的 ibind（包含 alias），保持 source map，验证本地同名函数不被处理。
2. 明确支持矩阵：首批为可静态定位宿主的原生元素 class 回调、单位方法和声明内多绑定。未知拼接、回调局部变量、组件透传等无法保证语义的情况必须给定位诊断。
3. 为每个绑定确定稳定 ID、元素所有权、值序列化和清理方式。普通值继续重算/换 class，绑定值不得进入 class 哈希。
4. 接入 SSR 初值与 hydration、用户已有 style 合并、多实例隔离、解绑与 HMR；沿用独立 tarball + 官方 Vite 消费测试。

候选写法（尚未实现）：

```ts
s.width.px(ibind(width));
s.transform.raw(`translate(${ibind(x)}px, ${ibind(y)}px)`);
```

ibind 绑定 x/y，不能变成绑定整个 translate 字符串。不能生成 var(--x)px：应把 px 编入元素绑定值，或采用语义正确的数值单位转换。引号内插值、标识符片段、任意字符串拼接不能靠简单正则替换。

脚本里生成的 class 可以复用到多个元素，但字符串本身不携带绑定值。编译器需建立定义/使用点映射，否则明确报错；不能默默漏掉变量赋值。多根/组件透传/Teleport、动态 keyframes/global、条件循环依赖分别验收，不自动提升到 :root。

退出条件：只改 ibind 变量时回调计数不增加、class 不变、规则数不增加，元素变量值及计算样式更新；改普通变量仍重算换 class。类型补全、导入别名/作用域、生产构建、source map、HMR、SSR/hydration、生命周期和双实例隔离均有独立夹具。

## 独立后续事项

- 根据 bundle metafile 优化 CSS 解析器/元数据成本，保留语义和失败校验；不因体积大直接删除校验，也不默认 sideEffects:false。
- 流式 SSR、异步 Suspense/boundary 完整流程、Nuxt/SvelteKit 插件单独研究。
- 发布前处理 LICENSE、repository/engines 等元数据、声明地图源码可达性、浏览器支持范围、版本策略。暂不发布、不改 private。
- 如增加跨框架共享编译实现，先证明重复部分值得共享，再建私有工具边界；不提前增加产品包。
