import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pomme de l\'après midi (:';

  getTitle() {
    return this.title;
  }

  alertDate(date: Date) {
    window.alert(date.toDateString())
  }
}
