import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  data: string[] = [
    'https://images.unsplash.com/photo-1564176802023-5d48669e5998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'https://images.unsplash.com/photo-1555119837-e1576c30d60f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80'
  ];
  constructor() { }

  ngOnInit() {
  }

  update(newData: string) {
    // tslint:disable-next-line:max-line-length
    this.data.push('https://images.unsplash.com/photo-1573131382472-1317cb6c0610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
  }

}
