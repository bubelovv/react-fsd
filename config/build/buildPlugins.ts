import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { buildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = ({ paths, isDev }: buildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ].concat(isDev ? [] : [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].css',
        }),
    ])
}