import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {ITag} from "../../../../interfaces/ITag";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {

  @Input()
  genre: ITag;

  constructor(private router: Router) {
  }

  navigateToAlbums(name: string) {
    this.router.navigate(['albums', name.replace(' ', '+')], )
  }
}
