import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// 构建、生成和测试共享的工作区/进程边界，不依赖任何测试框架。
export const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export function run(file, args, options = {}) {
  const result = spawnSync(file, args, {
    cwd: root,
    stdio: 'inherit',
    windowsHide: true,
    ...options,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${file} failed (${result.status ?? result.signal})`);
  return result;
}
export function pnpm(args, options) {
  // 通过当前 pnpm 的 JS 入口启动，避免 Windows .cmd 与 shell 字符串转义差异。
  const cli = process.env.npm_execpath;
  if (!cli || !/pnpm\.(?:c?js|mjs)$/.test(cli)) throw new Error('Run this command through pnpm.');
  return run(process.execPath, [cli, ...args], options);
}
