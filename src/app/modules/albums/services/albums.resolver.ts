import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AlbumsService} from "./albums.service";
import {IAlbums} from "../../../interfaces/IAlbums";

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<IAlbums> {

  constructor(private albumsService: AlbumsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbums> | Promise<IAlbums> | IAlbums {
    return this.albumsService.getAll();
  }
}
