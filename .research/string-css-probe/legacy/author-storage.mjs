import { chromium } from '@playwright/test';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage();
  try {
    const results = await page.evaluate(() => {
      const names = Array.from({ length: 502 }, (_, index) => `p${index}`);
      const chains = names.map((name) =>
        Object.fromEntries(
          Array.from({ length: 25 }, (_, index) => [`k${index}`, `${name}:v${index};`]),
        ),
      );
      class OwnFields {
        constructor() {
          for (let index = 0; index < names.length; index++) this[names[index]] = chains[index];
        }
      }
      class SharedPrototype {}
      Object.assign(
        SharedPrototype.prototype,
        Object.fromEntries(names.map((name, index) => [name, chains[index]])),
      );
      const makers = {
        own: () => new OwnFields(),
        prototype: () => new SharedPrototype(),
        ownProxy: () => new Proxy(new OwnFields(), {}),
        prototypeProxy: () => new Proxy(new SharedPrototype(), {}),
      };
      const create = (make) => {
        const start = performance.now();
        const instances = [];
        for (let index = 0; index < 2_000; index++) instances.push(make());
        return { ms: performance.now() - start, last: instances[instances.length - 1] };
      };
      const read = (author) => {
        const start = performance.now();
        let checksum = 0;
        for (let index = 0; index < 3_000_000; index++)
          checksum += author.p0.k0.length + author.p250.k12.length + author.p501.k24.length;
        return { ms: performance.now() - start, checksum };
      };
      for (const make of Object.values(makers)) {
        create(make);
        read(make());
      }
      const namesByMode = Object.keys(makers);
      const samples = Object.fromEntries(namesByMode.map((name) => [name, []]));
      for (let round = 0; round < 3; round++) {
        const order = [...namesByMode.slice(round), ...namesByMode.slice(0, round)];
        for (const name of order) {
          const created = create(makers[name]);
          const accessed = read(created.last);
          samples[name].push({
            createMs: created.ms,
            readMs: accessed.ms,
            checksum: accessed.checksum,
          });
        }
      }
      const median = (rows, key) => rows.map((row) => row[key]).sort((a, b) => a - b)[1];
      return Object.fromEntries(
        Object.entries(samples).map(([name, rows]) => [
          name,
          { createMs: median(rows, 'createMs'), readMs: median(rows, 'readMs') },
        ]),
      );
    });
    console.log(JSON.stringify({ browser: browser.version(), results }, null, 2));
  } finally {
    await page.close();
  }
} finally {
  await browser.close();
}
