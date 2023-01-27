import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-example',
  templateUrl: './reusable-example.component.html',
  styleUrls: ['./reusable-example.component.css']
})
export class ReusableExampleComponent {
  @Input('title') header = 'Header par défaut';
  @Output('sendDate') alert = new EventEmitter();

  displayDate() {
    this.alert.emit(new Date('01/01/1403'));
  }
}
