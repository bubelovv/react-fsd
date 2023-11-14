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
    analyze?: boolean
}

export interface buildOptions {
    port: number
    mode: buildMode,
    paths: buildPaths,
    analyze?: boolean
}
