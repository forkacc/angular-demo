import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newProductForm;

  constructor(private formBuilder: FormBuilder, private ps: ProductService) {

    this.newProductForm = this.formBuilder.group({
      name: '',
      brand: '',
      price: 0,
      stock: 0,
      image: ''
    });
  }

  ngOnInit() {

  }

  onSubmit(productInfo) {
    console.log(productInfo);
    const newProduct: Product = productInfo;
    console.log(newProduct);
    this.ps.addProduct(newProduct);
    this.newProductForm.reset();
  }

}
