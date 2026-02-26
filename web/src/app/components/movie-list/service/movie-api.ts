import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';
import {Streaming} from '../../../models/streaming';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {
  readonly API_URL = "http://localhost:8000/api"
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_URL}/movies/`)
  }

  getChannelList(): Observable<Streaming[]> {
    return this.http.get<Streaming[]>(`${this.API_URL}/movies/channels/`)
  }

  deleteMovie(movieId: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.API_URL}/movies/${movieId}/`)
  }
}
