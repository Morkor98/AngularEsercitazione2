import {Component, EventEmitter, input, InputSignal, Output} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {
  movie: InputSignal<Movie> = input.required()
  @Output() deleteMovieEvent: EventEmitter<Movie> = new EventEmitter()

  deleteMovie(): void {
    this.deleteMovieEvent.emit(this.movie());
  }
}
