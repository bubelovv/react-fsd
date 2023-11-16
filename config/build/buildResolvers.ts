import { Configuration } from 'webpack'
import { buildOptions } from './types/config'

export const buildResolvers = (options: buildOptions): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}