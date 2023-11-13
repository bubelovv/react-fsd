import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (env: any): webpack.Configuration => {

    return {
        mode: 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: '[name][hash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }
}