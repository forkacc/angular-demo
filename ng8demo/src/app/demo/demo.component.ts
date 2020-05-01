import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  books: string[] = ['JS', 'JAVA', 'SPRING'];
  fruits: string[] = ['apple', 'pear', 'banana', 'grape'];
  total: number = 0;

  constructor() { }

  ngOnInit() {
  }

  update(count) {
    this.total += count;
  }

}
