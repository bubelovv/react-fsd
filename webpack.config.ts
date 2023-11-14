import path from 'path'
import webpack from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import { buildEnv, buildPaths } from './config/build/types/config'

export default (env: buildEnv): webpack.Configuration => {

    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const port = env.port ?? 3000
    const mode = env.mode ?? 'development'
    const isDev = mode === 'development'

    return buildWebpackConfig({ mode, port, isDev, paths })
}