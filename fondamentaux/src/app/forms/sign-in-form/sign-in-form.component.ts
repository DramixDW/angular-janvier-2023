import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { confirmShouldBeEqualToPassword } from './password.validator';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  formSignIn = new FormGroup({
    passwords: new FormGroup({
      desiredPassword: new FormControl(),
      confirmPassword: new FormControl()
    }, confirmShouldBeEqualToPassword as ValidatorFn)
  })

  get Passwords() {
    return this.formSignIn.get('passwords');
  }
}
