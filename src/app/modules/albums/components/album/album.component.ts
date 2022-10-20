import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {IAlbum} from "../../../../interfaces/IAlbum";
import {IImage} from "../../../../interfaces/IImage";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements DoCheck {

  @Input()
  album: IAlbum;
  small: IImage;
  medium: IImage;
  large: IImage;
  extralarge: IImage;

  constructor() {
  }

  ngDoCheck(): void {
    this.small = this.album.image[0];
    this.medium = this.album.image[1];
    this.large = this.album.image[2];
    this.extralarge = this.album.image[3];
  }

}
