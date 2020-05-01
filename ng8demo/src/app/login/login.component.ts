import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  submit(f) {
    // get form instance
    console.log(f); // f.value is the form data
    this.authService.login(f.value)
      .subscribe(res => {
      // manually redirect page
        console.log(res);
        // TODO: Add Typing for login function
        // if (res.success) {
        //   this.router.navigate(['/home']).catch();
        // }
      });
  }

}
