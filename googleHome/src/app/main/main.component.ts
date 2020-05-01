import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private imgs =
    ['../assets/Screen Shot 2020-02-21 at 2.09.07 PM.png', '../assets/Screen Shot 2020-02-21 at 2.09.11 PM.png'];
  private i = 0;
  img = this.imgs[this.i];
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.i = this.i === 0 ? 1 : 0;
      this.img = this.imgs[this.i];
    }, 1000);
  }

}
