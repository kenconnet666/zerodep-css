/** 仅保存下一次提示阈值；样式记录及其生命周期仍由 runtime 拥有。 */
export function createRecordWarning(
  namespace: string,
  enabled: boolean,
  warnAt: number | false | undefined,
  initialCount: number,
): (count: number) => void {
  if (warnAt !== undefined && warnAt !== false && (!Number.isSafeInteger(warnAt) || warnAt < 1))
    throw new TypeError('Style warning threshold must be a positive safe integer or false.');
  if (!enabled || warnAt === false) return () => {};
  let next = warnAt ?? 10_000;
  const advance = () => {
    next = next > Number.MAX_SAFE_INTEGER / 2 ? Infinity : next * 2;
  };
  // SSR 恢复记录已经存在，不把恢复过程当作新的增长事件。
  while (next <= initialCount) advance();

  return (count) => {
    if (count < next) return;
    // 一次新增即使越过多个桶也只提示一次；失败的输出同样不重复刷屏。
    do advance();
    while (next <= count);
    try {
      console.warn(
        `[zerodep-css] namespace=${namespace} 现有 ${count} 条样式记录。` +
          '记录可能仍被 class 使用，增长不直接表示泄漏；请检查动态值、可选变量绑定和 host.stats()。',
      );
    } catch {
      // 诊断通道故障不能把已经成功的 CSS 写入变成失败调用。
    }
  };
}
