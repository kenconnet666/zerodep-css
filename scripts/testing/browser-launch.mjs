import { chromium, firefox, webkit } from '@playwright/test';

export const browserEngine = process.env.ZERODEP_BROWSER_ENGINE ?? 'chromium';
const engines = { chromium, firefox, webkit };
if (!Object.hasOwn(engines, browserEngine))
  throw new Error('Unknown browser engine: ' + browserEngine);
export const browserChannel =
  browserEngine === 'chromium' ? (process.env.ZERODEP_BROWSER_CHANNEL ?? 'chrome') : browserEngine;

/** 本地默认使用已安装 Chrome；CI 明确选择 Playwright 的对应引擎。 */
export function launchBrowser() {
  return engines[browserEngine].launch({
    ...(browserEngine === 'chromium' && browserChannel !== 'chromium'
      ? { channel: browserChannel }
      : {}),
    headless: true,
  });
}
