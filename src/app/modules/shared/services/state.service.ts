import { PageCrud } from "../interfaces/crud";
import { QueryParams } from "../types/crud.type";
import { Page } from "../types/page.type";
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageState } from "../types/state.type";
import { BehaviorSubject, Observable } from "rxjs";

export abstract class StateService<T> implements PageCrud<T> {
    protected _state$: BehaviorSubject<PageState<T>>;
    get State$(): Observable<PageState<T>> { return this._state$.asObservable() }

    constructor(protected $http: HttpClient, protected $state: PageState<T>, protected $url: string) {
        this._state$ = new BehaviorSubject<PageState<T>>(this.$state);
    }

    private hasPage(page: number, limit: number): boolean {
        return this.$state.pages.has(JSON.stringify({ page, limit }));
    }
    private isCurrentPage(page: number, limit: number): boolean {
        const pagination = { page, limit };
        const statePagination = this.$state.pagination;

        return JSON.stringify(statePagination) == JSON.stringify(pagination);
    }

    findPage(page: number, limit: number): Page<T> {
        if (this.hasPage(page, limit)) {
            const newState = this.$state.pages.get(JSON.stringify({ page, limit }))!
            this.$state = { ...this.$state, ...newState };
        } else if (!this.isCurrentPage(page, limit)) {
            this.$state = { ...this.$state, loading: true };
            const params = new HttpParams().appendAll({ "_page": page, "_limit": limit });
            this.$http
                .get<Page<T>>(this.$url, { params })
                .subscribe((data: Page<T>) => this.pageSubscriber(data));
        }

        return this.$state;
    }
    private pageSubscriber(page: Page<T>) {
        const { next, data, previous, pagination, totalPages } = page;
        this.$state.pages.set(JSON.stringify(pagination), { next, data, previous, pagination, totalPages })
        this.$state = { ...this.$state, loading: false, data, next, previous, pagination };
        this._state$.next(this.$state);
    }
    findPredicatePage(predicate: Partial<{ where: QueryParams; sort: QueryParams; }>, page: number, limit: number): Page<T> {
        throw new Error("Method not implemented.");
    }
    findAll(): void {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): T {
        throw new Error("Method not implemented.");
    }
    findPredicate(predicate: Partial<{ where: QueryParams; sort: QueryParams; }>): T[] {
        throw new Error("Method not implemented.");
    }

}