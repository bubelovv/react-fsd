import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { buildOptions } from './types/config'

export const buildLoaders = ({ isDev }: buildOptions): webpack.ModuleOptions['rules'] => {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? '[path][name]__[local]-[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                },
            },
            'sass-loader',
        ],
    }

    return [
        typescriptLoader,
        scssLoader,
    ]
}