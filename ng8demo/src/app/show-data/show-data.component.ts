import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  toggle: boolean = false;
  @Input()
  paths: string[] = [];
  path: string = 'empty';
  @Output() // indicate which variable as output to parent component for pre-compile/compile
  addToParentPaths: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log(this.path);
  }

  ngOnInit() {
    this.path = this.paths[0];
    console.log(this.path);
  }

  switchImg() {
    switch (this.path) {
      case this.paths[0]: {
        this.path = this.paths[1];
        break;
      }
      case this.paths[1]: {
        this.path = this.paths[0];
        break;
      }
      case 'empty': {
        console.log('what happen');
        break;
      }

      default: {
        this.path = this.paths[0];
      }
    }
  }

  addImg() {
    // tslint:disable-next-line:max-line-length
    this.addToParentPaths.emit('https://images.unsplash.com/photo-1562886929-86cfbf136cf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80');

  }
}
