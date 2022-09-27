export type Plat = {
    id: number,
    title: string,
    description: string,
    nbPerson: number,
    createdAt: string,
    updatedAt: string
}

export type ListState<T> = {
    loading: boolean,
    data: T[],
    page: number,
    limit: number
    pages: Map<string, T[]>
}