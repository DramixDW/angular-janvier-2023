import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-excercie',
  templateUrl: './template-excercie.component.html',
  styleUrls: ['./template-excercie.component.css']
})
export class TemplateExcercieComponent {
  submit(form: NgForm) {
    console.log(form);
  }
}
