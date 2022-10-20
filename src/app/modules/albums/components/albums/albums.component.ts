import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAlbum} from "../../../../interfaces/IAlbum";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:IAlbum[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({albumsData})=>{
      this.albums = albumsData.albums.album
    })

  }

}
