import path from 'path'
import webpack from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'

export default (env: any): webpack.Configuration => {

    const mode = 'development'
    const isDev = mode === 'development'
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    return buildWebpackConfig({
        mode,
        isDev,
        paths
    })
}