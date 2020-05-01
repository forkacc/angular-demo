import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'priceRange',
  pure: false
})
export class PriceRangePipe implements PipeTransform {

  // filter out product from products that not in this range
  transform(products: Product[], min: number, max: number): Product[] {
    // when min/max has no input which make then has default value 0 and it is falsy value
    // in this case, we wanna display all products.
    min = min || Number.MIN_VALUE;
    max = max || Number.MAX_VALUE; // if max is falsy value, set it max value;
    return products.filter(p => p.price >= min && p.price <= max);
  }

}
