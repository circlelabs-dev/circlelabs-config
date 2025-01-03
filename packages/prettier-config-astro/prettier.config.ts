import baseConfig from "@circlelabs/prettier-config"
import deepmerge from "deepmerge"
import type { Config } from "prettier"
// @ts-expect-error astro plugin is not typed yet
import * as AstroPlugin from "prettier-plugin-astro"

const config: Config = {
    plugins: [AstroPlugin],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    astroSkipFrontmatter: true, // front-matter gets formatted with biome.js
}

export default deepmerge(baseConfig, config)
