import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
const { outputFiles } = await build({
  stdin: {
    contents:
      "export * from './registry.ts'; export * from './names.ts'; export * from './serialization.ts';",
    resolveDir: fileURLToPath(new URL('../../src', import.meta.url)),
  },
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
});
const runtime = await import(
  `data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`
);
export const { createRuleRegistry, className, hash, ruleText, serializeCssRules } = runtime;
