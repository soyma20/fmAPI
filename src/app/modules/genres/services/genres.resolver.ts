import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {GenresModule} from "../genres.module";
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
