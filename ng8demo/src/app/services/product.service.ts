import {Product} from '../models/product';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root' // service will be available in root module(AppModule). Create ProductService object in container.
})
export class ProductService {
  // private products: Product[] = [
  //   { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
  //   { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg' },
  // tslint:disable-next-line:max-line-length
  //   { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg' },
  //   { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg' },
  //   { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg' },
  //   { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg' },
  //   { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png' },
  //   { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg' },
  //   { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg' }
  // ];
  //
  // getProducts(): Product[] {
  //   return this.products;
  // }
  //
  // getProduct(name: string): Product {
  //   return this.products.find(p => p.name === name);
  // }
  // declare class's field in constructor when injection equal to declare class's field but without declaring separately.
  constructor(public hc: HttpClient) {
  }

  // getProducts() {
  //   this.hc.get('http://localhost:8080/products').toPromise()
  //     .then((data) = > {
  //       return data; // this return belong this anonymous function and will not get return to outside
  //   });
  // }

  // getProducts(): Promise<Product[]> {
  //   return this.hc.get<Product[]>('http://localhost:8080/products').toPromise();
  // }
  //
  // getProduct(name: string): Promise<Product> {
  //   return this.hc.get<Product>(`http://localhost:8080/products/name/${name}`).toPromise();
  // }

  getProducts(): Observable<Product[]> {
    // use operator to preprocess
    return this.hc.get<Product[]>('http://localhost:8080/products')
    // get a new observable and loop through the array; map will not modify data.
    // this first map is rxJS operator and the second is array method.
      // the first one get the copy data from observable
      .pipe(map((data: Product[]) => {
        return data.map(p => {
          p.price *= 0.5;
          return p;
        });
      }));
  }

  getProduct(name: string): Observable<Product> {
    return this.hc.get<Product>(`http://localhost:8080/products/name/${name}`)
      .pipe(map(data => {
        return data ;
      }));
  }

  addProduct(product: Product) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    console.log('Posting..');
    return this.hc.post<Product>('http://localhost:8080/products', product, httpOptions)
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }
}
