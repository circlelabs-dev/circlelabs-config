// @ts-expect-error `with` keyword is currently not working and specifying a different module type breaks other imports
import config from './prettier.config.macro' with { type: 'macro' }

export default config;
