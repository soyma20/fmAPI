import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

import {IAlbum} from "../../../../interfaces/IAlbum";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input()
  album: IAlbum;
  liked: boolean;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.checkLikes()
  }

  checkLikes(): void {
    const item = localStorage.getItem('favorite');
    if (!item) return
    const parse: IAlbum[] = JSON.parse(item);
    for (const iAlbum of parse) {
      if (iAlbum.name === this.album.name) {
        this.liked = true;
      }
    }
  }

  addToFavorite(name: string): void {
    const item = localStorage.getItem('favorite');
    if (item) {
      const parse: IAlbum[] = JSON.parse(item);
      let isPresent: boolean = false;
      for (let i = 0; i < parse.length; i++) {
        const parseElement = parse[i];
        if (parseElement.name === this.album.name) {
          isPresent = true
          parse.splice(i, 1)
        }
      }
      if (isPresent) {
        localStorage.setItem('favorite', JSON.stringify(parse))
        this.liked = false
      } else {
        parse.push(this.album)
        localStorage.setItem('favorite', JSON.stringify(parse))
        this.liked = true
        this.snackBar.open(name)
      }
    } else {
      const favorite = [this.album]
      localStorage.setItem('favorite', JSON.stringify(favorite))
      this.liked = true
      this.snackBar.open(name)
    }
  }
}
