import {Component, Input, OnInit} from '@angular/core';
import {ITag} from "../../../../interfaces/ITag";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: ITag;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToAlbums(name: string) {
    this.router.navigate(['albums', name.replace(' ', '+')], )
  }
}
