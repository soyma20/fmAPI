import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {GenresResolver} from "./services/genres.resolver";
import {GenresComponent} from "./components/genres/genres.component";

const routes: Routes = [{path: '', resolve: {genresData: GenresResolver}, component: GenresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
