import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent {
  texteAComparer = 'banane';
  colors = [{
    name: 'rouge',
    class: 'red'
  }, {
    name: 'mauve',
    class: 'purple'
  }];
  declare case: string;
  declare value: string;
  isDisabled = false;

  updateInputValue(input: HTMLInputElement) {
    this.value = input.value;
  }
  
  addColor() {
    this.colors.push({
      name: this.value,
      class: this.value
    });
    this.value = "";
  }
}
