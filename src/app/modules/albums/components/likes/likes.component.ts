import {Component} from '@angular/core';

import {IAlbum} from "../../../../interfaces/IAlbum";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  getLikes(): number {
    const item = localStorage.getItem('favorite');
    if (!item) {
      return 0
    } else {
      const parse: IAlbum[] = JSON.parse(item);
      return parse.length
    }
  }

}
