import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
