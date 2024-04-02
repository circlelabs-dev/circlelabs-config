import type { PluginConfig } from '@trivago/prettier-plugin-sort-imports'
import type { Config } from 'prettier'

type FinalConfig = Config & PluginConfig

export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
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
