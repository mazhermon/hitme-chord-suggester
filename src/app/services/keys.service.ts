import { Injectable } from '@angular/core';
import { KEYS } from '../data/keys.data';
import { Key } from '../models/key.model';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor() { }

  getKeys(): Observable<Key[]> {
    return of([...KEYS]);
  }

  getKey(numeral): Key {
    return KEYS[numeral];
  }
}
