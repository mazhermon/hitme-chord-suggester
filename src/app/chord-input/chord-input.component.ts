import { Component, OnInit } from '@angular/core';
import { ChordService } from '../services/chord.service';

@Component({
  selector: 'hm-chord-input',
  templateUrl: './chord-input.component.html',
  styleUrls: ['./chord-input.component.scss']
})
export class ChordInputComponent {

  constructor( public chordService: ChordService) { }

  onChordSelect(event) {
    this.chordService.sendChord(event.currentTarget.value);
  }
}
