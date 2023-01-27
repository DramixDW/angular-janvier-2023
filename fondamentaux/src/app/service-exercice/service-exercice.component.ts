import { Component } from '@angular/core';
import { MovieService, Movie } from '../services/movie.service';

@Component({
  selector: 'app-service-exercice',
  templateUrl: './service-exercice.component.html',
  styleUrls: ['./service-exercice.component.css']
})
export class ServiceExerciceComponent {
  declare movies: Movie[];
  declare selectedMovie: Movie | undefined;
  constructor(private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getAll().subscribe((response: Movie[]) => {
      this.movies = response;
    })
  }

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
  }

  updateMovie(values: Record<string, string>) {
    this.movieService.update(values, this.selectedMovie!.id!).subscribe((response: Movie) => {
        this.loadMovies();
        this.selectedMovie = undefined;
    })
  }

  deleteMovie() {
    this.movieService.delete(this.selectedMovie!.id!).subscribe((response: unknown) => {
      this.loadMovies();
      this.selectedMovie = undefined;
  })
  }
}
