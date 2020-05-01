import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-display-data',
  // template: '<h3>Display Data</h3>' // make this component have a h3 tag, a html string.
  templateUrl: './display-data.component.html' // make this component use a HTML file as a template
})
export class DisplayDataComponent {
  name: string = 'Bob';
  @Input() // Get input from parent component
  data: string[] = [];
  flag: boolean = false;
  count: number = 0;
  @Output() // indicate which variable as output to parent component for pre-compile/compile
  updateTotalEvent: EventEmitter<number> = new EventEmitter<number>();
  // Custom Event, an object that can carry data from child to direct parent.

  // constructor() {
  //   this.name = name;
  //   setTimeout(function() {
  //     this.name = 'Alex'; // 'this' -> window, because setTimeout belongs to window (window.setTimeout).
  //   }, 3000);
  // }

  constructor() {
    setTimeout(() => {
      this.name = 'Alex'; // 'this' -> DisplayDataComponent's object.
    }, 3000);
  }

  myLink: string = 'https://www.amazon.com';

  updateMyLink(newLink) {
    this.myLink = newLink;
  }

  increase() {
    this.count++;
  }

  send() {
    // create an `updateTotal` event which carries `count` in child component, and then emit this event to parent.
    this.updateTotalEvent.emit(this.count);
  }
}
