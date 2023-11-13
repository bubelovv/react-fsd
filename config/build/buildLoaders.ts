import webpack from 'webpack'
import { buildOptions } from './types/config'

export const buildLoaders = (options: buildOptions): webpack.RuleSetRule[] => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}