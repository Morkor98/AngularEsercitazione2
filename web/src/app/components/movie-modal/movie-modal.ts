import {Component, EventEmitter, input, InputSignal, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Streaming} from '../../models/streaming';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-modal.html',
  styleUrl: './movie-modal.css',
})
export class MovieModal {
  addMovieForm: FormGroup;

  channelList: InputSignal<Streaming[]> =
  input.required<Streaming[]>();

  @Output() addMovieEvent: EventEmitter<Movie[]> = new EventEmitter();


  constructor(private formBuilder: FormBuilder) {
    this.addMovieForm = this.formBuilder.group({
      title: [''],
      description: [''],
      streaming: ['---'],
    });
  }


  onSubmit():void {
    this.addMovieEvent.emit(this.addMovieForm.value);
  }

  protected readonly onsubmit = onsubmit;
}
