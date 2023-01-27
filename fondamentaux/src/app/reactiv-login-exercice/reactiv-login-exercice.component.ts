import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidator, checkSqlInjection } from './login-form.validator';

@Component({
  selector: 'app-reactiv-login-exercice',
  templateUrl: './reactiv-login-exercice.component.html',
  styleUrls: ['./reactiv-login-exercice.component.css']
})
export class ReactivLoginExerciceComponent {
  form= new FormGroup({
    email: new FormControl('', [Validators.email], EmailValidator.shouldExists),
    password: new FormControl('', [Validators.required, checkSqlInjection])
  })

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
