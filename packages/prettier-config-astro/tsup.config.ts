import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["prettier.config.ts"],
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: true,
    clean: true,
    cjsInterop: true,
    dts: true,
});
