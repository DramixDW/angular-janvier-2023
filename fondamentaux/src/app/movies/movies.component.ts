import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  isVisible = true;
  isSeen = true;
  movies = [
    'Forrest Gump',
    'Alice au pays des merveilles',
    "L'attaque des bananes martiennes"
  ];

  changeColor() {
    console.log(this.isSeen);
    this.isSeen = !this.isSeen;
  }
}
