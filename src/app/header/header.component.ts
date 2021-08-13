import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  numberItem = 4
  constructor() { }
  @Input() title:string | undefined
  @Input() totalNumber:number|undefined


}
