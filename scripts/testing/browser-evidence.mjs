import { mkdir, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

/** 每个场景独立留证；失败时的 trace/截图不能依赖整套测试最终成功。 */
export async function withBrowserPage(browser, output, name, task, options = {}) {
  const id = createHash('sha256').update(name).digest('hex').slice(0, 12);
  const folder = resolve(output, 'cases', id);
  await mkdir(folder, { recursive: true });
  // 重跑成功时不能留下同场景上次失败的截图，避免误读报告。
  for (const file of ['failure.png', 'trace.zip']) await rm(resolve(folder, file), { force: true });
  const context = await browser.newContext(options);
  await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
  const page = await context.newPage();
  const diagnostics = [];
  page.on('pageerror', (error) => diagnostics.push({ kind: 'pageerror', message: error.message }));
  page.on('console', (message) => {
    if (['warning', 'error'].includes(message.type()))
      diagnostics.push({ kind: message.type(), message: message.text() });
  });
  page.on('requestfailed', (request) =>
    diagnostics.push({ kind: 'requestfailed', url: request.url(), error: request.failure() }),
  );
  page.on('response', (response) => {
    if (response.status() >= 400)
      diagnostics.push({ kind: 'http', url: response.url(), status: response.status() });
  });
  const report = { name, browser: browser.version(), status: 'running', diagnostics };
  try {
    const result = await task(page);
    report.status = 'passed';
    await context.tracing.stop();
    return result;
  } catch (error) {
    report.status = 'failed';
    report.error = String(error.stack ?? error);
    // 留证失败不覆盖原始断言错误；保留能成功获得的其余证据。
    const captures = await Promise.allSettled([
      page.screenshot({ path: resolve(folder, 'failure.png'), fullPage: true }),
      context.tracing.stop({ path: resolve(folder, 'trace.zip') }),
    ]);
    report.captureErrors = captures
      .filter((r) => r.status === 'rejected')
      .map((r) => String(r.reason));
    throw error;
  } finally {
    try {
      await writeFile(resolve(folder, 'result.json'), JSON.stringify(report, null, 2) + '\n');
    } finally {
      await context.close();
    }
  }
}
