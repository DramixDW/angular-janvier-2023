import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  id?: number;
  title: string;
  description: string;
  rating: number;
  isSeen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Movie[]>(this.url);
  }

  getOne(id: number) {
    return this.http.get<Movie[]>(`${this.url}/${id}`)
  }

  create(body: Movie) {
    return this.http.post<Movie>(this.url, body)
  }

  update(body: Partial<Movie>, id: number) {
    return this.http.patch<Movie>(`${this.url}/${id}`, body);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
