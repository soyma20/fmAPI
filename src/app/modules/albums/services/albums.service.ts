import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {IAlbums} from "../../../interfaces/IAlbums";
import {token} from "../../../constants/token";
import {urls} from "../../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private HttpClient: HttpClient) {
  }

  getAll(): Observable<IAlbums>{
    const {data} = history.state;
    return this.HttpClient.get<IAlbums>(urls.albums + data+'&api_key='+ token + '&format=json')
  }
}
