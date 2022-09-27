export type Page<T> = {
    data: T[],
    totalPages: number
    pagination: Pagination,
    previous?: Pagination,
    next?: Pagination,
}

export type Pagination = { page: number, limit: number };