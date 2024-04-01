import { defineConfig } from 'tsup'
// @ts-expect-error: somehow the flag from the tsconfig.json does not matter
import macros from 'unplugin-macros/esbuild'

export default defineConfig({
  esbuildPlugins: [macros()],
  entry: ['prettier.config.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  cjsInterop: true,
  dts: true,
})
