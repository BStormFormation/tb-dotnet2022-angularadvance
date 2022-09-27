import { Page, Pagination } from "./page.type";

export type ListState<T> = {
}

export type PageState<T> = Page<T> & {
    loading: boolean,
    pages: Map<string, Page<T>>
};