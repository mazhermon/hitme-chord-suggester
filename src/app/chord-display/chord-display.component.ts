import { Chord } from './../models/chord.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChordService }  from '../services/chord.service';

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss']
})
export class ChordDisplayComponent implements OnInit, OnDestroy {

  chords: Array<Chord> = [];
  chords$: Subscription;
  hits$: Subscription;
  constructor( 
    public chordService: ChordService,
  ){}

  ngOnInit() {
    this.chords$ = this.chordService.chord.subscribe(
      chord => {
        this.chords.push(chord)
      }
    );

    this.hits$ = this.chordService.hit.subscribe(
      hit => {
        this.hitMe()
      }
    )
  }

  hitMe(): void {
       let chordsCopy = this.chords.slice(0);
      this.chordService.hitMe(chordsCopy);
  }

  ngOnDestroy() {
    this.chords$.unsubscribe();
    this.hits$.unsubscribe();
  }
}
