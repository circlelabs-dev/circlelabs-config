import baseConfig from '@circlelabs/prettier-config'
import deepmerge from 'deepmerge'
import { Options } from 'prettier'

const config: Options = {
  plugins: ['prettier-plugin-astro'],
}

export default deepmerge(config, baseConfig)
