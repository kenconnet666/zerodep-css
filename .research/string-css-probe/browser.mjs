import { chromium } from '@playwright/test';

export function launchBrowser() {
  const channel = process.env.CSS_PROBE_BROWSER_CHANNEL ?? 'chrome';
  return chromium.launch(channel === 'chromium' ? { headless: true } : { channel, headless: true });
}
