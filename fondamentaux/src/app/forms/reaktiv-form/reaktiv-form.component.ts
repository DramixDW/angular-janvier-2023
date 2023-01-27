import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { UserValidator } from './username.validator';

@Component({
  selector: 'app-reaktiv-form',
  templateUrl: './reaktiv-form.component.html',
  styleUrls: ['./reaktiv-form.component.css']
})
export class ReaktivFormComponent {
  form = new FormGroup({
    username: new FormControl('',
     [Validators.required,
      Validators.minLength(5),
      UserValidator.cannotContainSpace,
      UserValidator.cannotContain('banane')],
      UserValidator.shouldBeAuthorized),
    comment: new FormControl()
  });

  get Username() {
    return this.form.get('username');
  }

  submit() {
    console.log(this.form);
  }
}

/*

  Formulaire Login

  Email
    - Vérifier Email
    - Vérifier de manière asynchrone que l'email existe bien dans la base de données
    - Afficher un petit message pour montrer qu'on vérifie
  mot de passe
    - Requis
    - Vérifier qu'il ne contient pas '1=1'

*/
