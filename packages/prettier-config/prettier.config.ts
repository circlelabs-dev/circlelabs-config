import type { Config } from "prettier"

type FinalConfig = Config

export default {
    semi: false,
    trailingComma: "all",
    singleQuote: false,
    printWidth: 80,
    tabWidth: 4,
} satisfies FinalConfig
