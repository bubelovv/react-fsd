import { ResolveOptions } from 'webpack'
import { buildOptions } from './types/config'

export const buildResolvers = (options: buildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}