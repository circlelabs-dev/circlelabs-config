import baseConfig from '@circlelabs/prettier-config'
import deepmerge from 'deepmerge'
import { Config } from 'prettier'

const config: Config = {
  plugins: ['prettier-plugin-astro'],
}

export default deepmerge(config, baseConfig)
