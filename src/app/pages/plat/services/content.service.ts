import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ContentService {

  constructor(private $http: HttpClient) { 
  }

  findContentsByPlatId(platId: number, opts?: any): Observable<Content[]> {
    // const opts = {nom: "Flavian", "prenom": "Blop"}
    const params = new HttpParams()
      .appendAll({platId, "_expand": "ingredient", ...opts});
    return this.$http.get<Content[]>("http://localhost:3000/contents", {params})
  }
}
