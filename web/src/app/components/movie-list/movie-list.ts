import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movie} from '../../movie/movie';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {MovieApi} from './service/movie-api';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  movieList!: Movie[];
  private subscription: Subscription = new Subscription();

  constructor(private api: MovieApi) { }

  ngOnInit() {
    this.subscription.add(
      this.api.getMovieList().subscribe({
        next: (movieList: Movie[]) => {
          this.movieList = movieList;
        },
        error: (e: HttpErrorResponse) => {
          throw Error(
            `Cannot connect to API: Errpr: ${e.status} - ${e.message}`
          );
        }
      })
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
