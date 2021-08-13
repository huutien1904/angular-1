import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() totalMoney: number | undefined
  Tax = 5.00
  @Input() totalProduct:number|undefined
}
