import {Component, Input} from '@angular/core';

import {IAlbum} from "../../../../interfaces/IAlbum";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input()
  album: IAlbum;

  addToFavorite() {
    const item = localStorage.getItem('favorite');
    if (item) {
      console.log(item)
      const parse: IAlbum[] = JSON.parse(item);
      for (const iAlbum of parse) {
        if (iAlbum.name === this.album.name) return;
      }
      parse.push(this.album)
      localStorage.setItem('favorite', JSON.stringify(parse))
    } else {
      const favorite = [this.album]
      localStorage.setItem('favorite', JSON.stringify(favorite))
    }
  }
}
