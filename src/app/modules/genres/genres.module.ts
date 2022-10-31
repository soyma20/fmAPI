import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

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
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [
    GenreService,
    GenresResolver,
  ]
})
export class GenresModule {
}
