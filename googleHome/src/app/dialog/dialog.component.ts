import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit, AfterContentInit {



  constructor(public er: ElementRef) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // const div = this.er.nativeElement.querySelector('formDiv');
    // if (div.className === 'modal') {
    //   div.className = 'view-modal';
    // } else {
    //   div.className = 'modal';
    // }
  }
}
