import {Component, OnInit} from '@angular/core';
import {IAlbum} from "../../../../interfaces/IAlbum";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

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
