import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(products: Product[], name: string): Product[] {
    console.log(name);
    name = name || '';
    console.log(name);
    return products.filter(p => p.name.includes(name));
  }
}
