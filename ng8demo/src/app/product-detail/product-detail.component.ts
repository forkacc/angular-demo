import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  name;
  constructor(ar: ActivatedRoute, public ps: ProductService) {
    // Angular creates ActivatedRoute object in container to store info about current activated route.
    // We can get path from that object. (get path param from url)
     this.name = ar.snapshot.paramMap.get('name');
    // search product data from products by name
    // this.product = ps.products.find(p => p.name === name);
    // this.product = ps.getProduct(name);
    // ps.getProduct(name)
    //   .then((data: Product) => {
    //     this.product = data;
    //   });

    // this.ps.getProducts()
    //   .subscribe(data => {
    //     this.product  = data.find(p => p.name === name);
    //   });
  }

  ngOnInit() {
    this.ps.getProduct(this.name)
      .subscribe(product => {
        this.product = product;
      });
  }

}
