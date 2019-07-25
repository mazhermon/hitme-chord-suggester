import { Chord } from './../models/chord.model';
import { Component, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

import { chordAnimationTrigger } from './chord-display.animation'; 

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss'],
  animations: [chordAnimationTrigger]
})
export class ChordDisplayComponent implements OnChanges {
  @Input() public displayChords: Array<Chord> = [];

  @HostBinding('class.hm-chord-display--compact') public compact: boolean;

  ngOnChanges(changes: SimpleChanges) {
    let { displayChords } = changes;
    this.compact = displayChords.currentValue.length > 4;
  }
}
