import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { buildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = ({ paths, isDev }: buildOptions): Configuration['plugins'] => {

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].css',
        }))
    }

    return plugins
}