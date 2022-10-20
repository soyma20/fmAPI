import {Component, Input, OnInit} from '@angular/core';
import {ITag} from "../../../../interfaces/ITag";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: ITag;

  constructor() {
  }

  ngOnInit(): void {
  }

}
