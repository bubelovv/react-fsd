import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'
import { buildOptimization } from './buildOptimization'
import { buildOptions } from './types/config'

export default (options: buildOptions): webpack.Configuration => {
    const { mode, paths } = options
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash:5].js',
            assetModuleFilename: 'assets/[name].[hash:5][ext]',
            chunkFilename: 'chunks/[name].[chunkhash:5].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: isProd ? buildOptimization(options) : undefined,
    }
}