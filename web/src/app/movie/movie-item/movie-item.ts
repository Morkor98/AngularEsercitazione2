import {Component, input, InputSignal} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {
  movie: InputSignal<Movie> = input.required()
}
