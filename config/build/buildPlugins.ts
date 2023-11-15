import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { buildOptions } from './types/config'

export const buildPlugins = ({ paths, mode, analyze, platform, apiUrl }: buildOptions): Configuration['plugins'] => {
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.DefinePlugin({
            PLATFORM: JSON.stringify(platform),
            API_URL: JSON.stringify(apiUrl)
        }),
    ]

    if (isDev) {
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:5].css',
            chunkFilename: 'css/[name].[contenthash:5].css',
        }))
        plugins.push(new webpack.ProgressPlugin())
    }

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}