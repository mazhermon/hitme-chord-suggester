import { Chord } from './../models/chord.model';
import { ModesService } from './modes.service';
import { KeysService } from './keys.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChordService {

  public chord = new Subject<Chord>();
  public hit = new Subject<boolean>();
  
  constructor(
    private _keysService:KeysService,
    private _modesService:ModesService
  ) {}

  sendChord(chordNumeral: string) {    
    let namedChord: Chord = this.setChord(chordNumeral)
    this.chord.next(namedChord);
  }

  setChord(chordNumeral: string, key: number = 0, mode: number = 0) {
    let rootNote = this._keysService.getKey(key).scale[chordNumeral];
    let quality = this._modesService.getMode(mode).scale[chordNumeral];
    let numeral = chordNumeral;
    return {
      numeral,
      rootNote,
      quality,
    }
  }

  hitMe(chords: Array<Chord>): Array<Chord> {
    let newChords = [];
    for ( let chord of chords ) {
      newChords.push(this.setChord(chord.numeral, 0, 2)); // randomise
    }
    return newChords;
  }
}
