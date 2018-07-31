import { Injectable } from '@angular/core';
import { KEYS } from '../data/keys.data';
import { Key } from '../models/key.model';


@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor() { }

  getKeys(): Key[] {
    return [...KEYS];
  }

  getKey(numeral): Key {
    return KEYS[numeral];
  }
}
