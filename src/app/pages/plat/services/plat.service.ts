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
}
