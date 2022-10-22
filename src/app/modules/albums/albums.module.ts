import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumComponent} from './components/album/album.component';
import {AlbumsRoutingModule} from "./albums-routing.module";
import {HttpModule} from "../http/http.module";
import {AlbumsService} from "./services/albums.service";
import {HeaderComponent} from "./components/header/header.component";
import {LikesComponent} from "./components/likes/likes.component";
import {SearchInputComponent} from "./components/search-input/search-input.component";

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    HeaderComponent,
    LikesComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    AlbumsService,
  ]
})
export class AlbumsModule {
}
