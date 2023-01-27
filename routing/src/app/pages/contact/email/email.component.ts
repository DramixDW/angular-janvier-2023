import { Component } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  constructor(private router: ActivatedRoute) {
    console.log(this.router.snapshot.params);
  }
}
