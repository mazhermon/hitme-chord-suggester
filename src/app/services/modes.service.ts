import { Injectable } from '@angular/core';
import { MODES } from '../data/modes.data';
import { Mode } from './../models/mode.model';

@Injectable({
  providedIn: 'root'
})
export class ModesService {

  constructor() { }

  getModes(): Mode[] {
    return [...MODES];
  }

  getMode(numeral): Mode {
    return MODES[numeral];
  }
}
