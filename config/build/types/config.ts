export type buildMode = 'development' | 'production'

export interface buildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
}

export interface buildEnv {
    port: number,
    mode: buildMode
}

export interface buildOptions {
    mode: buildMode,
    paths: buildPaths,
    isDev: boolean,
    port: number
}