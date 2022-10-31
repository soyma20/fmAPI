import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";

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
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [
    AlbumsService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class AlbumsModule {
}
