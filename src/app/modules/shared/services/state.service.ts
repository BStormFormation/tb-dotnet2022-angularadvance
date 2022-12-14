import { PageCrud } from "../interfaces/crud";
import { QueryParams } from "../types/crud.type";
import { Page } from "../types/page.type";
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageState } from "../types/state.type";
import { BehaviorSubject, map, Observable } from "rxjs";

export abstract class PageStateService<T> implements PageCrud<T> {
    protected _state$: BehaviorSubject<PageState<T>>;
    get State$(): Observable<PageState<T>> { return this._state$.asObservable() }
    set State(v: Partial<PageState<T>>) {
        this.$state = { ...this.$state, ...v };
        this._state$.next(this.$state);
    }

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

    findPage(page: number = 1, limit: number = 5, opts: any = {}): Page<T> {
        if (this.hasPage(page, limit)) {
            const newState = this.$state.pages.get(JSON.stringify({ page, limit }))!
            this.State = { ...this.$state, ...newState };
        } else if (!this.isCurrentPage(page, limit)) {
            this.State = { ...this.$state, loading: true };
            const params = new HttpParams().appendAll({ "_page": page, "_limit": limit, ...opts });
            this.$http
                .get<Page<T>>(this.$url, { params })
                //TODO ATTENTION A RETIRER DANS LE CADRE D4UNE VREAI API
                .pipe(
                    map((data: any) => ({
                        next: { page: page + 1, limit },
                        previous: { page: page - 1, limit },
                        pagination: { page, limit },
                        data,
                        totalPages: 500
                    }) as Page<T>)
                )
                .subscribe((data: Page<T>) => this.pageSubscriber(data));
        }

        return this.$state;
    }
    private pageSubscriber(page: Page<T>) {
        const { next, data, previous, pagination, totalPages } = page;
        this.$state.pages.set(JSON.stringify(pagination), { next, data, previous, pagination, totalPages })
        this.$state = { ...this.$state, loading: false, data, next, previous, pagination };
        setTimeout(() => this._state$.next(this.$state), 3000);
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