import webpack, { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildOptions } from './types/config'

export const buildLoaders = ({ mode }: buildOptions): webpack.ModuleOptions['rules'] => {
    const isDev = mode === 'development'

    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: isDev ? [ReactRefreshTypeScript()] : [],
                    }),
                    transpileOnly: isDev,
                },
            },
        ],
    }

    const babelLoader: RuleSetRule = {
        test: /\.(|jsx?|tsx?)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
    }

    const assetsLoader: RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader: RuleSetRule = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    }

    const scssLoader: RuleSetRule = {
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
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }

    return [
        svgLoader,
        assetsLoader,
        typescriptLoader,
        // babelLoader,
        scssLoader,
    ]
}