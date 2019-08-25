import { Injectable } from '@angular/core';
import { Chord } from '../models/chord.model';
import { of, Observable } from 'rxjs';

export interface Song {
  name: string,
  chords: Array<Chord>
}

//temp data
const SONGS: Array<Song> = [
  {
    name: 'panda dog',
    chords: [
      {
        key: { name: "C", quality: "maj", scale: Array(7) },
        modeName: "ionian",
        numeral: "1",
        quality: "min7",
        rootNote: "D",
      },
      {
        key: { name: "C", quality: "maj", scale: Array(7) },
        modeName: "ionian",
        numeral: "4",
        quality: "7",
        rootNote: "G"
      }
    ]
  },
  {
    name: 'elephants',
    chords: [
      {
        key: { name: "C", quality: "maj", scale: Array(7) },
        modeName: "ionian",
        numeral: "0",
        quality: "maj7",
        rootNote: "C",
      },
      {
        key: { name: "C", quality: "maj", scale: Array(7) },
        modeName: "ionian",
        numeral: "4",
        quality: "7",
        rootNote: "G"
      }
    ]
  }

];


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs(): Observable<Array<Song>> {
    return of(SONGS)
  }; 

  getSong(name): Observable<Song> {
    return of(...SONGS.filter(song => song.name === name));
  }
}
