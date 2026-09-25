import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { compile } from 'svelte/compiler';

const directory = dirname(fileURLToPath(import.meta.url));

export async function bundle(framework, platform) {
  const browser = platform === 'browser';
  const result = await build({
    entryPoints: [resolve(directory, `${framework}-mup-${browser ? 'driver' : 'server'}.ts`)],
    bundle: true,
    write: false,
    format: browser ? 'iife' : 'esm',
    ...(browser ? { globalName: 'mupBundle' } : {}),
    platform,
    alias: {
      [framework === 'vue' ? '@zerodep-css/vue' : '@zerodep-css/svelte']: resolve(
        directory,
        `../../${framework}/src/${browser ? 'index' : 'server'}.ts`,
      ),
    },
    target: 'es2023',
    define: {
      'process.env.NODE_ENV': '"production"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },
    plugins:
      framework === 'svelte'
        ? [
            {
              name: 'single-svelte-runtime',
              setup(bundler) {
                bundler.onResolve({ filter: /^svelte(?:\/.*)?$/ }, async (args) => {
                  if (args.pluginData?.singleSvelte) return;
                  const result = await bundler.resolve(args.path, {
                    resolveDir: directory,
                    kind: args.kind,
                    pluginData: { singleSvelte: true },
                  });
                  return { path: result.path, errors: result.errors };
                });
              },
            },
            {
              name: 'svelte-compiler',
              setup(bundler) {
                bundler.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
                  const source = await readFile(path, 'utf8');
                  const result = compile(source, {
                    filename: path,
                    generate: browser ? 'client' : 'server',
                    dev: false,
                  });
                  assert.deepEqual(
                    result.warnings.filter((item) => item.code !== 'state_referenced_locally'),
                    [],
                  );
                  return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
                });
              },
            },
          ]
        : [],
  });
  return result.outputFiles[0].text;
}
