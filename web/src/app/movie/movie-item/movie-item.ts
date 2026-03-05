import {Component, EventEmitter, input, InputSignal, Output} from '@angular/core';
import {Movie} from '../../models/movie';
import {Streaming} from '../../models/streaming';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {
  movie: InputSignal<Movie> = input.required()
  streaming: InputSignal<string | undefined> = input.required()
  @Output() deleteMovieEvent: EventEmitter<Movie> = new EventEmitter()

  deleteMovie(): void {
    this.deleteMovieEvent.emit(this.movie());
  }
}
