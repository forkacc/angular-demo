import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // registerFormGroup: FormGroup; // formGroup instance
  // ufc: FormControl;
  // pfc: FormControl;
  // cpfc: FormControl;

  // constructor() { }
  //
  // ngOnInit() {
  //   // here initialize form after it get created.
  //   // FormControl(intialValue, validator.format)
  //   this.ufc = new FormControl('Test initialValue', [Validators.email]);
  //   this.pfc = new FormControl();
  //   this.cpfc = new FormControl();
  //   this.registerFormGroup = new FormGroup( {
  //     username: this.ufc,
  //     password: this.pfc,
  //     confirmPassword: this.cpfc
  //   });
  //
  //   this.ufc.valueChanges
  //     .subscribe(value => console.log(value));
  // }

  // FormBuilder
  registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      // [initialValue, [setOfValidators]]
      // [initialValue, Validator]
      // initialValue
      username: ['initialVal', [Validators.email, Validators.minLength(3)]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ''
      }, {validators: [this.passwordValidator]}) // group: xxx ({}, {[validatorOnThisGroup]})
    });
  }

  // custom validator
  passwordValidator(passwordGroup: FormGroup) {
    console.log((passwordGroup));


    // ES6 destructuring
    // {password: a, confirmPassword: b}
    const {password, confirmPassword} = passwordGroup.value;

    // if (password === confirmPassword) {
    //   return null; // convention for checking passed. If no error, return null; otherwise return object containing error msg.
    // } else {
    //   return {passwordsNotMatch: 'Passwords do not match.'};
    // }
    return password === confirmPassword ? null : {passwordsNotMatch: 'Passwords do not match.'};
  }
}
