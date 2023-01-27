import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like-counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.css']
})
export class LikeCounterComponent {
  @Input() likeCount = 0;
  hasClicked = false;
  @Output() incrementLike = new EventEmitter();

  incrementLikeCount() {
    this.hasClicked = true;
    this.incrementLike.emit();
  }
}
