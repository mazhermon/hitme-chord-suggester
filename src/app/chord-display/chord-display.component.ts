import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChordService }  from '../services/chord.service';

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss']
})
export class ChordDisplayComponent implements OnInit {

  chords: Array<string> = [];
  subscription: Subscription;
  constructor( public chordService: ChordService) { }

  ngOnInit() {
    this.subscription = this.chordService.chord.subscribe(
      chord => {
        this.chords.push(chord)
      }
    );
  }
}
