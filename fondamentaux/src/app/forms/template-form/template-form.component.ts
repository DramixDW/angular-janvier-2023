import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  submit(form: NgForm) {
    console.log(form);
  }
}

/*
  Formulaire
    Champ prénom: Requis, min 5 char, max 25 char
    Champ mot de passe: Requis
    Button Submit désactivé si formulaire invalide
    la fonction ne doit pas s'éxécuter entièrement si on appuie
    sur enter alors que le form est invalide
*/



