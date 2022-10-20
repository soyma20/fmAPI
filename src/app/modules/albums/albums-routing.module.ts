import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumsResolver} from "./services/albums.resolver";

const routes: Routes = [
  {path: '', resolve: {albumsData:AlbumsResolver},component: AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
