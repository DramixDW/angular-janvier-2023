import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Movie } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent  {
  @Input() declare movies: Movie[];
  declare displayedMovies: Movie[] | undefined;
  declare searchedValue: string;
  @Output() onSelectMovie = new EventEmitter();
  declare selectedMovieId: number | undefined;

  searchMovies() {
    this.displayedMovies = this.movies.filter((movie: Movie) => {
     return movie.title.indexOf(this.searchedValue) !== -1;
    })

  }

  get DisplayedMovies() {
    return this.displayedMovies !== undefined ? this.displayedMovies : this.movies;
  }

  selectMovie(movie: Movie) {
    this.selectedMovieId = this.selectedMovieId === movie.id ?  undefined : movie.id;
    this.onSelectMovie.emit(this.selectedMovieId !== undefined ? movie : undefined);
  }
}
