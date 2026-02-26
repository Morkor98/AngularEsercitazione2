import {Streaming} from './streaming';

export interface Movie {
  id: number;
  title: string;
  description: string;
  streaming_channel: Streaming;
}
