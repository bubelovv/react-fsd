export type buildMode = 'development' | 'production'
export type buildPlatform = 'mobile' | 'desktop'

export interface buildPaths {
    entry: Record<string, string> | string,
    output: string,
    html: string,
    src: string,
}

export interface buildEnv {
    port?: number,
    mode?: buildMode,
    platform?: buildPlatform,
    analyze?: boolean,
}

export interface buildOptions {
    port: number,
    mode: buildMode,
    platform: buildPlatform,
    paths: buildPaths,
    analyze: boolean,
    apiUrl?: string
}
