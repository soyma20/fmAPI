import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  inputEmitter = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack():void {
    this.router.navigate(['./'])
  }
  catchInputEmitt(search:string):void{
    this.inputEmitter.emit(search)
  }
}
