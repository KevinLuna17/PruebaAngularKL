export interface IPokemon { 
    count: number
    next: string
    previous: string
    results: IDataPokemon[]
}

export interface IDataPokemon { 
    name: string
    url: string
}