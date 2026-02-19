import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../../../movie/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {
  readonly API_URL = "http://localhost:8000/api/v1/movies"
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_URL}/movies`)
  }
}
