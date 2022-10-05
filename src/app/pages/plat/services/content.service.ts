import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageStateService } from 'src/app/modules/shared/services/state.service';
import { PageState } from 'src/app/modules/shared/types/state.type';
import { Content, Plat } from '../models/plat';

const initialState: PageState<Content> = {
  data: [],
  loading: false,
  pagination: { page: -1, limit: 5 },
  previous: undefined,
  next: undefined,
  totalPages: 0,
  pages: new Map(),
}

@Injectable({
  providedIn: 'root'
})
export class ContentService extends PageStateService<Content> {

  constructor($http: HttpClient) { 
    super($http, initialState, "http://localhost:3000/contents");
  }

  findContentsByPlatId(platId: number) {
    return this.findPage(1, 5, {platId, "_expand": "ingredient"})
  }
}
