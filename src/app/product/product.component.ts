import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {} as Product; 
  
  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(){
    localStorage.setItem("product", JSON.stringify(this.product))
  }
}

export interface Product{
   name : string;
   description: string;
   price: number;
   quantity: number;
}