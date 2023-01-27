import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../services/movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  @Input() movie: Movie | undefined;
  @Output() saveMovie = new EventEmitter();
  @Output() deleteMovie = new EventEmitter();

  get isAMovieSelected() {
    return this.movie !== undefined;
  }

  get movieTitle() {
    return this.movie?.title ?? ''
  }

  get movieDescription() {
    return this.movie?.description ?? ''
  }

  submit(form: NgForm) {
    this.saveMovie.emit(form.value);
  }

  delete() {
    this.deleteMovie.emit();
  }
}
