import { Chord } from './../models/chord.model';
import { ModesService } from './modes.service';
import { KeysService } from './keys.service';
import { Injectable } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChordService {

  public chords = new Subject<Array<Chord>>();

  private _chords = [];

  constructor(
    private _keysService: KeysService,
    private _modesService: ModesService
  ) { }

  resetChords(): void {
    this._chords = [];
    this.chords.next([...this._chords]);
  }

  setChord(chordNumeral: string, key: number = 0, mode: number = 0) {
    let rootNote = this._keysService.getKey(key).scale[chordNumeral];
    let quality = this._modesService.getMode(mode).scale[chordNumeral];
    let numeral = chordNumeral;
    let modeName = this._modesService.getMode(mode).name;
    return of({
      numeral,
      rootNote,
      quality,
      modeName
    });
  }

  hitMe(chords: Array<Chord>): Observable<Array<Chord>> {
    if (!chords.length) {
      return;
    }
    let key = 0;
    let _currentChordsChecker = [];
    let newChords = [];
    for (let chord of chords) {
      let randomMode = this._getRandomMode();
      //_currentChordsChecker.push(this.setChord(chord.numeral, key, this._getCurrentMode()));
      // refactor how get current mode is working on previous line
      this.setChord(chord.numeral, key, randomMode).subscribe(chord => (newChords.push(chord)));
    }

    return of(newChords);
    //ensure the same progression is not returned
    //return isEqual(newChords, _currentChordsChecker) ? of(this.hitMe(chords)) : of(newChords);
  }

  _getRandomMode(): number {
    let randomMode = this._getRandomNumber(6);
    let currentMode = this._getCurrentMode();
    let diceRoll = this._getRandomNumber(6);
    // shift the balance slightly towards staying in the same mode
    // this should avoid too many chord changes at once
    return diceRoll > 2 ? randomMode : currentMode;
  }

  _getRandomNumber(limit): number {
    return Math.floor(Math.random() * limit) + 1;
  }

  _getCurrentMode(): number { // move to mode service
    return 0; // eventually let user set the current mode and key
  }

}
