export type buildMode = 'development' | 'production'

export interface buildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
}

export interface buildOptions {
    mode: buildMode,
    paths: buildPaths,
    isDev: boolean
}