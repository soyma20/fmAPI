import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  inputEmitter = new EventEmitter<string>();

  constructor(private router: Router) { }

  goBack():void {
    this.router.navigate(['./'])
  }
  catchInputEmitt(search:string):void{
    this.inputEmitter.emit(search)
  }
}
