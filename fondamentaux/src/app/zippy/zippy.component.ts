import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  zippyTitle = '';
  @Input() isDisplayed = false;

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }

  setTitle(input: HTMLInputElement) {
    this.zippyTitle = input.value;
    input.value = ''
;  }
}
