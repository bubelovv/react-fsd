import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildOptions } from './types/config'

export default (options: buildOptions): webpack.Configuration => {
    const { mode, paths } = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name][hash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    }
}