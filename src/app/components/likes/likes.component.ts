import {Component, OnInit} from '@angular/core';
import {IAlbum} from "../../interfaces/IAlbum";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }
  getLikes():void{
    const item = localStorage.getItem('favorite');
    if (!item) return;
    const parse: IAlbum[] = JSON.parse(item);
    this.likes = parse.length
  }

}
