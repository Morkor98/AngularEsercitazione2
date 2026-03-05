import {Component, computed, OnDestroy, OnInit, Signal, signal} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movie} from '../../models/movie';
import { HttpErrorResponse } from '@angular/common/http';
import {MovieApi} from './service/movie-api';
import {MovieItem} from '../../movie/movie-item/movie-item';
import {Streaming} from '../../models/streaming';
import {MovieModal} from '../movie-modal/movie-modal';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieItem,
    MovieModal
  ],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
class MovieList implements OnInit, OnDestroy {
  movieList = signal(new Array<Movie>());
  channelList = signal(new Array<Streaming>());

  channelMap : Signal<Map<number,string>> = computed(() => {
    return new Map(
      this.channelList().map(
        (channel) => [channel.id, channel.name]
      )
    )
  })

  private subscription: Subscription = new Subscription();

  constructor(private api: MovieApi) { }

  ngOnInit() {
    this.onGetChannelList();
    this.onGetMovieList();
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

  onGetChannelList() {
    this.subscription.add(
      this.api.getChannelList().subscribe({
        next: (channelList: Streaming[]) => {
          this.channelList.set(channelList);
        },
        error: (e: HttpErrorResponse) => {
          throw Error(
            `Cannot connect to API: Error: ${e.status} - ${e.message}`
          );
        }
      })
    )
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export default MovieList
