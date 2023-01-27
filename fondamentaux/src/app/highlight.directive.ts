import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef<HTMLDivElement>) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.backgroundColor = 'purple';
  }
}
