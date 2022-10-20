import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes:Routes=[
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'genres', pathMatch:'full'},
      {path: 'genres', loadChildren:()=> import('./modules').then(value => value.GenresModule) },
      {path: 'albums', loadChildren:()=> import('./modules').then(value => value.AlbumsModule) },
      {path: 'likes', loadChildren:()=> import('./modules').then(value => value.LikesModule) },
    ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }