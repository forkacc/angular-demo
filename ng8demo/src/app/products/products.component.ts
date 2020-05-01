import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  min: number;
  max: number;
  name: string;

  // tslint:disable-next-line:max-line-length
  // constructor injection: Angular scan constructor for which constructor need a arguement; if needed, Angular inject the object from container into constructor
  // constructor(ps: ProductService) {
  //   // this.products = ps.getProducts();
  //   ps.getProducts()
  //    .then((data) => {
  //     this.products = data;
  //   });
  //   }

  // Constructor in component or directive: only do dependency injection.
  // public: add a instance on this component and can be use inside ngOnInit().
  constructor(public ps: ProductService) {
  }

  // ngOnInit Lifecycle hook method: do something(logic/initialization) when ng is on init phase.
  ngOnInit() {
    this.ps.getProducts()
      .subscribe(products => { // next callback
        this.products = products;
      });
  }

  addProduct() {
    const newProduct = {
      name: 'iPhone11',
      brand: 'Apple',
      price: 999,
      stock: 888,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341343_sd.jpg;maxHeight=640;maxWidth=550'
    };
    // this.products.push(newProduct); // impure change
    this.products = [...this.products, newProduct]; // pure change ****
  }

}
