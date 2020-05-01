// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
// import {DisplayDataComponent} from './display-data/display-data.component';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { DemoComponent } from './demo/demo.component';
// import { ProductOverviewComponent } from './product-overview/product-overview.component';
// import { ProductsComponent } from './products/products.component';
// import { HeaderComponent } from './header/header.component';
// import {Route, RouterModule} from '@angular/router';
// import { TestComponent } from './test/test.component';
// import { ShowDataComponent } from './show-data/show-data.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import {ReversePipe} from './pipes/reverse.pipe';
// import { PriceRangePipe } from './pipes/price-range.pipe';
// import {HttpClientModule} from '@angular/common/http';
// import { NameFilterPipe } from './pipes/name-filter.pipe';
// import { AddProductComponent } from './add-product/add-product.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {CustomStyleModule} from './shared/custom-style/custom-style.module';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
//
// const routes: Route[] = [
//   {
//     path: 'demo',
//     component: DemoComponent
//   },
//   {
//     path: 'products',
//     component: ProductsComponent
//   },
//   {
//     path: 'test',
//     component: TestComponent
//   },
//   { // read ID from URL -> after user refresh, still on this detail page. /product-detail vs /product-detail/name
//     path: 'product-detail/:name',
//     component: ProductDetailComponent
//   },
//   {
//     path: 'add-product',
//     component: AddProductComponent
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'register',
//     component: RegisterComponent
//   },
//   {
//     // any other path, go to demo
//     path: '**',
//     redirectTo: 'demo'
//   }
//
// ];
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     DisplayDataComponent,
//     DemoComponent,
//     ProductOverviewComponent,
//     ProductsComponent,
//     HeaderComponent,
//     TestComponent,
//     ShowDataComponent,
//     ProductDetailComponent,
//     ReversePipe,
//     PriceRangePipe,
//     NameFilterPipe,
//     AddProductComponent,
//     LoginComponent,
//     RegisterComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule, // ngModel and template driven form
//     ReactiveFormsModule, // reactive form
//     RouterModule,
//     RouterModule.forRoot((routes)), // pass `routes` info to angular's router outlet
//     HttpClientModule, // // create httpClient service in container
//     ReactiveFormsModule,
//     BrowserAnimationsModule,
//     CustomStyleModule, // group  all Material module and import it all together
//   ],
//   providers: [],
//   bootstrap: [AppComponent] // make this component load at the first time.
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DisplayDataComponent} from './display-data/display-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import {Route, RouterModule} from '@angular/router';
import { TestComponent } from './test/test.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ReversePipe} from './pipes/reverse.pipe';
import { PriceRangePipe } from './pipes/price-range.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomStyleModule} from './shared/custom-style/custom-style.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Route[] = [
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  { // read ID from URL -> after user refresh, still on this detail page. /product-detail vs /product-detail/name
    path: 'product-detail/:name',
    component: ProductDetailComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    // any other path, go to demo
    path: '**',
    redirectTo: 'demo'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    DemoComponent,
    ProductOverviewComponent,
    ProductsComponent,
    HeaderComponent,
    TestComponent,
    ShowDataComponent,
    ProductDetailComponent,
    ReversePipe,
    PriceRangePipe,
    NameFilterPipe,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // ngModel and template driven form
    ReactiveFormsModule, // reactive form
    RouterModule,
    RouterModule.forRoot((routes)), // pass `routes` info to angular's router outlet
    HttpClientModule, // // create httpClient service in container
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomStyleModule, // group  all Material module and import it all together
  ],
  providers: [],
  bootstrap: [AppComponent] // make this component load at the first time.
})
export class AppModule { }
