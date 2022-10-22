import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IToptags} from "../../../interfaces/IToptags";
import {GenreService} from "./genre.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IToptags> {

  constructor(private genreService: GenreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IToptags> | Promise<IToptags> | IToptags {
    return this.genreService.getAll();
  }
}
