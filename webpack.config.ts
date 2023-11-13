import path from 'path'
import webpack from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import { buildEnv } from './config/build/types/config'

export default (env: buildEnv): webpack.Configuration => {

    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000

    return buildWebpackConfig({
        mode,
        port,
        isDev,
        paths
    })
}