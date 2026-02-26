import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movie} from '../../movie/movie';
import { HttpErrorResponse } from '@angular/common/http';
import {MovieApi} from './service/movie-api';
import {MovieItem} from '../../movie/movie-item/movie-item';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieItem
  ],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  movieList = signal(new Array<Movie>());
  private subscription: Subscription = new Subscription();

  constructor(private api: MovieApi) { }

  ngOnInit() {
    this.onGetMovieList();
  }

  onDeleteMovie(movieId: number) {
    this.subscription.add(
      this.api.deleteMovie(movieId).subscribe({
        error:(e: HttpErrorResponse) => {
          throw Error(
            `Cannot connect to API: Error: ${e.status} - ${e.message}`
          );
        },
        complete: () => {
          this.onGetMovieList();
        }
      })
    );
  }


  onGetMovieList() {
    this.subscription.add(
      this.api.getMovieList().subscribe({
        next: (movieList: Movie[]) => {
          this.movieList.set(movieList);
        },
        error: (e: HttpErrorResponse) => {
          throw Error(
            `Cannot connect to API: Error: ${e.status} - ${e.message}`
          );
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
