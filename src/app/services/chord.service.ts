import { Chord } from './../models/chord.model';
import { ModesService } from './modes.service';
import { KeysService } from './keys.service';
import { Injectable } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { take, flatMap, map, switchMap } from 'rxjs/operators';
import { KeyCentre, INITIAL_KEY } from '../settings/state/settings.reducer';
import { Store, select } from '@ngrx/store';
import * as fromSettings from '../settings/state/settings.reducer';

@Injectable({
  providedIn: 'root'
})
export class ChordService {

  constructor(
    private _keysService: KeysService,
    private _modesService: ModesService,
    private _store: Store<fromSettings.State>
  ) { }

  setChord(chordNumeral: string, key: KeyCentre = INITIAL_KEY, mode: number | null = null) {
    let ionianMode = 0; // should do this with an enum
    let aoleanMode = 5;
    let modeToGet;
    if (mode) {
      modeToGet = mode
    } else {
      modeToGet = key.quality === 'maj' ? ionianMode : aoleanMode;
    }
    // maybe refactor the above into another function

    let moderesult = this._modesService.getMode(modeToGet);
    let modeName = moderesult.name;
    let quality = moderesult.scale[chordNumeral];
    return this._keysService.getKey(key).pipe(
      take(1),
      map(key => {
        let rootNote = key.scale[chordNumeral];
        return {
          numeral: chordNumeral,
          rootNote: rootNote,
          quality: quality,
          key: key,
          modeName: modeName
        }
      })
    );
  }

  hitMe(chords: Array<Chord>): Observable<Array<Chord>> {
    if (!chords.length) {
      return;
    }

    return this._store.pipe(
      select(fromSettings.getGlobalKeyCenter),
      switchMap(globalKey => {
        let key = globalKey; // get key from state
        let newChords = [];
        for (let chord of chords) {
          let randomMode = this._getRandomMode();
          this.setChord(chord.numeral, key, randomMode).pipe(
            take(1)
          ).subscribe(chord => (newChords.push(chord)));
        }

        console.log('hit me chords suggest');

        return of(newChords);
      })
    )
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
