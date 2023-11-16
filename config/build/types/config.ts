export type buildMode = 'development' | 'production'
export type buildPlatform = 'mobile' | 'desktop'

export interface buildPaths {
    entry: Record<string, string> | string,
    output: string,
    src: string,
    public: string
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
    analyze: boolean,
    paths: buildPaths,
    apiUrl?: string
}
