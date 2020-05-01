import { Component } from '@angular/core';

// decorator is a function that take an object
@Component({
  selector: '[app-root]', // select an element or an attribute or a class as a component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8demo';
}
