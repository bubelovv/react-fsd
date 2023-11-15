import { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import { buildOptions } from './types/config'

export const buildOptimization = ({ mode }: buildOptions): Configuration['optimization'] => {

    return {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    }
}