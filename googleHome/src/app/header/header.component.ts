import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hidden: boolean;
  searchControl = new FormControl();
  value: Subscription;
  query: string;


  constructor() {
    this.query = '';
  }

  ngOnInit() {
    this.value = this.searchControl.valueChanges
      .pipe(
      debounceTime(500)
      )
      .subscribe(newValue => {
        this.query = newValue;
        console.log(this.query);
      });
  }

  display() {
    // const input = document.getElementById('search');
    // console.log('haha', input.getAttribute('display') );
    // if (!input.getAttribute('display')) {
    //   console.log('111haha');
    //   input.setAttribute('display', 'block');
    // }
    const x = document.getElementById('search');
    console.log(x.className);
    if (x.className === 'input') {
      x.className += ' responsive';
    } else {
      x.className = 'input';
    }
  }
}
