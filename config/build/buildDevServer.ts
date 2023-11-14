import { buildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (options: buildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}