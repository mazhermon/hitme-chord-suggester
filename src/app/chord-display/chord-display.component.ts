import { Chord } from './../models/chord.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss']
})
export class ChordDisplayComponent {
  @Input() displayChords: Array<Chord>;
}
