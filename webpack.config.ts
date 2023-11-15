import path from 'path'
import webpack from 'webpack'
import dotenv from 'dotenv'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import { buildEnv, buildPaths } from './config/build/types/config'

export default (env: buildEnv): webpack.Configuration => {
    dotenv.config({ path: './.env' })

    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    return buildWebpackConfig({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        analyze: env.analyze,
        platform: env.platform ?? 'desktop',
        apiUrl: process.env['API_URL'],
        paths,
    })
}