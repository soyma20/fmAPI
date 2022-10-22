import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenresComponent} from './components/genres/genres.component';
import {GenresRoutingModule} from "./genres-routing.module";
import {GenreService} from "./services/genre.service";
import {GenresResolver} from "./services/genres.resolver";
import {HttpModule} from "../http/http.module";
import {GenreComponent} from './components/genre/genre.component';


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    GenresRoutingModule,
  ],
  providers: [
    GenreService,
    GenresResolver,
  ]
})
export class GenresModule {
}
