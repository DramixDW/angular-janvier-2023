import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie, MovieService } from '../services/movie.service';



@Component({
  selector: 'app-movies-with-service',
  templateUrl: './movies-with-service.component.html',
  styleUrls: ['./movies-with-service.component.css']
})
export class MoviesWithServiceComponent {
  declare movies: Movie[];
  declare newMovieTitle: string;
  url = 'http://localhost:3000/movies';
  constructor(private http: HttpClient, private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getAll().subscribe((response: Movie[]) => {
      this.movies = response.reverse();
    })
  }

  createMovie() {
    this.movieService.create({
      title: this.newMovieTitle,
      description: '',
      rating: 0,
      isSeen: false,
    }).subscribe((res: Movie) => {
      this.loadMovies();
      this.newMovieTitle = '';
    });
  }

  updateIsSeen(movie: Movie) {
    this.movieService.update({
      isSeen: !movie.isSeen,
    }, movie.id!).subscribe((res: Movie) => {
      this.loadMovies();
    })
  }

  deleteMovie(movie: Movie) {
    this.movieService.delete(movie.id!).subscribe(() => {
      this.loadMovies();
    })
  }
}
