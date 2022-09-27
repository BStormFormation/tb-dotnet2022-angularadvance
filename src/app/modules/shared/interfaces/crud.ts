import { CrudParams } from "../types/crud.type";
import { Page } from "../types/page.type";

export interface Crud<T> {
    findAll(): void;
    findOne(id: number): T
    findPredicate(predicate: CrudParams): T[]
}

export interface PageCrud<T> extends Crud<T> {
    findPage(page: number, limit: number): Page<T>;
    findPredicatePage(predicate: CrudParams, page: number, limit: number): Page<T>
}