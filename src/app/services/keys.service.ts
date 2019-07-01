import { Injectable } from '@angular/core';
import { KEYS } from '../data/keys.data';
//import { Key } from '../models/key.model'; // think about where these use to live
import { of, Observable } from 'rxjs';
import { KeyCentre } from '../settings/state/settings.reducer';
import { Store } from '@ngrx/store';
import * as fromSettings from '../settings/state/settings.reducer';


@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor(
    //private _store: Store<fromSettings.State>
  ) { }

  getKeys(): Observable<KeyCentre[]> {
    return of([...KEYS]);
  }

  getKey(key): Observable<KeyCentre> { // try find instead of filter, will be faster
    let [keyToGet] = KEYS.filter(k => k.name == key.name && k.quality == key.quality);
    if (keyToGet) {
      return of(keyToGet);
    }
  }

  // might need to add a way to get a new scale here by name?
  // getScaleByNewKeyNote(note) {

  // }
}
