import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendChordService {

  public chord = new Subject<string>();

  sendChord(chordToSend: string) {
    this.chord.next(chordToSend);
  }
}
