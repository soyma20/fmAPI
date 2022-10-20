import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {IToptags} from "../../../interfaces/IToptags";
import {urls} from "../../../constants/urls";
import {token} from "../../../constants/token";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IToptags> {
    const params = new HttpParams().set('limit', 6)
    return this.httpClient.get<IToptags>(urls.tags + token + '&format=json', {params})
  }
}
