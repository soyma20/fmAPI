import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {token} from "../../../constants/token";
import {urls} from "../../../constants/urls";
import {IResponse} from "../../../interfaces/IResponse";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private HttpClient: HttpClient) {
  }

  getAll(genre: string): Observable<IResponse> {
    return this.HttpClient.get<IResponse>(urls.albums + genre + '&api_key=' + token + '&format=json')
  }
}
