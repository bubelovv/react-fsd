import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { buildOptions } from './types/config'

export const buildPlugins = ({ paths }: buildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
    ]
}