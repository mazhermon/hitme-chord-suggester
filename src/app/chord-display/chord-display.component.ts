import { Chord } from './../models/chord.model';
import { Component, Input } from '@angular/core';

import { chordAnimationTrigger } from './chord-display.animation'; 

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss'],
  animations: [chordAnimationTrigger]
})
export class ChordDisplayComponent {
  @Input() public displayChords: Array<Chord> = [];
}
