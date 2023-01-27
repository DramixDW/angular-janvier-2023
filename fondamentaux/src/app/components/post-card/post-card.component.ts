import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() declare title: string;
  likeCount = 25;

  incrementLike() {
    this.likeCount++;
  }
}
