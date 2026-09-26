import { chromium, firefox, webkit } from '@playwright/test';

export function launchBrowser() {
  const channel = process.env.CSS_PROBE_BROWSER_CHANNEL ?? 'chrome';
  const browser = { chromium, firefox, webkit }[channel];
  return browser
    ? browser.launch({ headless: true })
    : chromium.launch({ channel, headless: true });
}
