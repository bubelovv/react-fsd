import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'
import { buildOptions } from './types/config'

export default (options: buildOptions): webpack.Configuration => {
    const { mode, paths } = options
    const isDev = mode === 'development'

    console.log(isDev ? buildDevServer(options) : undefined)
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash:8].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}