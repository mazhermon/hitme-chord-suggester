import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendChordService }  from '../services/send-chord.service';

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss']
})
export class ChordDisplayComponent implements OnInit {

  chords: string[] = [];
  subscription: Subscription;
  constructor( public sendChordService: SendChordService) { }

  ngOnInit() {
    this.subscription = this.sendChordService.chord.subscribe(
      chord => {
        this.chords.push(chord)
      }
    );
  }
}
