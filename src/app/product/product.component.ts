import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  currentIndex:number=1;
  product: Product = {} as Product;
   
  
  constructor() { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    const products = localStorage.getItem("product") ?? JSON.stringify({} as Product);
    this.products = JSON.parse(products);
  }

  saveProduct(){
    if(this.product.id > 0){
      localStorage.setItem("product", JSON.stringify(this.products));
      var product = {} as Product;
      this.product = product;
    }else{
    this.product.id = this.currentIndex;
    this.products.push(this.product);
    localStorage.setItem("product", JSON.stringify(this.products));
    var product = {} as Product;
    this.product = product;
    this.currentIndex++;
    }
    
  }

  editProduct(product: Product){
    this.product = product;
  }

  deleteProduct(product:Product){
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    localStorage.setItem("product", JSON.stringify(this.products));
  }

  clearProduct(){
    localStorage.clear();
    this.product={} as Product;
  }
}

export interface Product{
   id:number;
   name : string;
   description: string;
   price: number;
   quantity: number;
}