import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-upper-dialog',
  templateUrl: './upper-dialog.component.html',
  styleUrls: ['./upper-dialog.component.css']
})
export class UpperDialogComponent implements OnInit, AfterViewInit {

  @ViewChild('formElement', {static: false})
  formElement: ElementRef;

  @ViewChild('dialogComponent', {static: false})
  dialogComponent: DialogComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.formElement.nativeElement.className =
    // console.log(this.dialogComponent.er.nativeElement.firstChild);
  }

  display() {
    // this.dialogComponent.er.nativeElement.firstChild.styles.display = 'block';
    // this.dialogComponent.er.nativeElement.firstChild.style.display = 'block';
    this.dialogComponent.er.nativeElement.firstChild.className = 'view-modal';
  }
}
