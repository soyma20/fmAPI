import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ITag} from "../../../../interfaces/ITag";
import {Images} from "../../../../constants/images";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: ITag[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genresData: {tags: {tag}}}) => {
      const tags = tag as ITag[];
      tags.map((value, index) => {
        value.img = Images[index];
      })
      this.genres = tags
    })
  }

}
