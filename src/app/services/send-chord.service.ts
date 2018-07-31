import { ModesService } from './modes.service';
import { KeysService } from './keys.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendChordService {

  public chord = new Subject<string>();
  
  constructor(
    private _keysService:KeysService,
    private _modesService:ModesService
  ) {}

  sendChord(chordNumeral: string) {
    //let rootNote = this.keys[0].scale[chordNumeral];
    
    let rootNote = this._keysService.getKey(0).scale[chordNumeral];
    let quality = this._modesService.getMode(0).scale[chordNumeral];
    this.chord.next(rootNote + quality);
  }
}
