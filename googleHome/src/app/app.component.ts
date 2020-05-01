import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleHome';
  // TODO create copyright fixed in sidebar bottom
  // todo toggle sidebar with hamber button that belongs to header
  // todo auto suggestion in header with request fetch
  constructor() {
  }


}
