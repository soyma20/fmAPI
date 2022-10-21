import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IAlbum} from "../../interfaces/IAlbum";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  form: FormGroup;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this._createForm()
  }

  _createForm(): void {
    this.form = new FormGroup({
      input: new FormControl(),
    })
  }

  search() {
    this.dataService.storage = this.form.getRawValue().input
  }
}
