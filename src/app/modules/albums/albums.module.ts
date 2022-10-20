import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumComponent} from './components/album/album.component';
import {AlbumsRoutingModule} from "./albums-routing.module";
import {HttpModule} from "../http/http.module";
import {AlbumsService} from "./services/albums.service";
import {AlbumsResolver} from "./services/albums.resolver";

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpModule
  ],
  providers: [
    AlbumsService,
    AlbumsResolver
  ]
})
export class AlbumsModule {
}
