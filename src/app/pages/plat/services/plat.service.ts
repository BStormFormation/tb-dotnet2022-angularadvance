import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Subject, Subscription, Observable, map } from 'rxjs';
import { ListState, Plat } from '../models/plat';
import { PageStateService } from 'src/app/modules/shared/services/state.service';
import { PageState } from 'src/app/modules/shared/types/state.type';

const initialState: PageState<Plat> = {
    data: [],
    loading: false,
    pagination: { page: -1, limit: 5 },
    previous: undefined,
    next: undefined,
    totalPages: 0,
    pages: new Map(),
}

@Injectable()
export class PlatService extends PageStateService<Plat> {

    constructor($http: HttpClient) {
        super($http, initialState, "http://localhost:3000/plats")
    }
    // private _state: ListState<Plat> = initialState;
    // private _state$ = new BehaviorSubject<ListState<Plat>>(this._state);

    // get State$(): Observable<ListState<Plat>> { return this._state$; }
    // set State(v: Partial<ListState<Plat>>) {
    //     this._state = { ...this._state, ...v };
    //     this._state$.next(this._state);
    // }

    // constructor(private $http: HttpClient) { }

    // findAll(page: number = 0, limit: number = 5): Observable<ListState<Plat>> {
    //     if (this._state.page == page && this._state.limit == limit) {
    //         this._state$.next(this._state);
    //         return this._state$.asObservable();
    //     } else if (this._state.pages.has(JSON.stringify({ page, limit }))) {
    //         this.State = { data: this._state.pages.get(JSON.stringify({ page, limit })), page, limit };
    //         return this._state$.asObservable();
    //     }

    //     this.State = { loading: true, data: [], page, limit };
    //     const params = new HttpParams().appendAll({ "_page": page, "_limit": limit });
    //     this.$http.get<Plat[]>("http://localhost:3000/plats", { params }).subscribe(data => {
    //         setTimeout(() => {
    //             this._state.pages.set(JSON.stringify({ page, limit }), data);
    //             this.State = { loading: false, data, pages: this._state.pages };
    //         }, 2000)
    //     })
    //     return this._state$.asObservable();
    // }
}
