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

  constructor(
    private _keysService:KeysService,
    private _modesService:ModesService
  ) {}

  sendChord (chordNumeral: string): void {
    let namedChord: Chord = this.setChord(chordNumeral)
    this.chord.next(namedChord);
  }

  setChord (chordNumeral: string, key: number = 0, mode: number = 0) {
    let rootNote = this._keysService.getKey(key).scale[chordNumeral];
    let quality = this._modesService.getMode(mode).scale[chordNumeral];
    let numeral = chordNumeral;
    return {
      numeral,
      rootNote,
      quality,
    }
  }

  hitMe (chords: Array<Chord>): Array<Chord> {
    let key = 0;
    let newChords = [];
    for ( let chord of chords ) {
      let randomMode = this._getRandomMode();
      console.log('mode is => ',randomMode);
      newChords.push(this.setChord(chord.numeral, key, randomMode));
    }
    return newChords;
  }

  _getRandomMode (): number {
    return Math.floor(Math.random() * 7);
  }

}
