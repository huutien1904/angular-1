import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input() products: any
  @Output() onRemoveProduct = new EventEmitter()
  removeProduct(productId: number){
    this.onRemoveProduct.emit(productId)
  }
  getInput(idProduct:number){

    // var value = element.value
    this.updateProduct.emit(idProduct)
  }
  @Output() updateProduct = new EventEmitter()
}
