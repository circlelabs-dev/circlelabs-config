import type { PluginConfig } from '@trivago/prettier-plugin-sort-imports'
import SortImportsPlugin from '@trivago/prettier-plugin-sort-imports'
import type { Config } from 'prettier'

type FinalConfig = Config & PluginConfig

export default {
  plugins: [SortImportsPlugin],
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 4,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^#lib/(.*)$',
    '^#components/(.*)$',
    '^#/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
} satisfies FinalConfig
