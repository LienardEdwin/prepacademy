export interface Movie{
    title?: string | undefined
    overview?: string
    vote_average?: number
    id: number
    poster_path: string
    release_date?: string
    genres?: ShowType[]
    production_companies?: ShowComapny[]
    spoken_languages?: ShowLanguages[]
    number_of_episodes?: number
    number_of_seasons?: number
    seasons?: Seasons[]
    name?: string
    first_air_date?: string
}

export interface ShowType {
    id: string
    name: string
}

export interface ShowComapny {
    name: string
}

export interface ShowLanguages {
    name: string
}

export interface Seasons {
    id: number
    air_date: string
    episode_count: number
    overview: string
    name: string
}