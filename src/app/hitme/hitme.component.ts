import { Chord } from './../models/chord.model';
import { ChordService } from './../services/chord.service';
import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { Store, select } from '@ngrx/store';

import * as fromHitMe from './state/hitme.reducer';

@Component({
  selector: 'hm-hitme',
  templateUrl: './hitme.component.html',
  styleUrls: ['./hitme.component.scss'],
  animations: [
    trigger('introText', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(150px) scale(0.7)'
        }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'translateY(150px) scale(0.7)'
        }))
      ])
    ])
  ]
})
export class HitmeComponent implements OnInit {
  private userChords: Array<Chord> = [];
  private hitmeChords: Array<Chord>;
  private chords$: Subscription;
  private userChordsCache: Array<Array<Chord>> = [];

  @HostBinding('class.hm-hitme--gradient-overlay-active') public inputMode: boolean;

  constructor(
    public chordService: ChordService,
    private store: Store<fromHitMe.HitMeState>
  ) { }

  ngOnInit() {
    // try using async pipe for this
    this.chords$ = this.chordService.chords.subscribe(
      chords => {
        this.userChords = chords;
        this.store.dispatch({
          type: 'TOGGLE_INPUT_MODE',
          payload: true
        });
      }
    );

    // TODO: unsubscribe
    this.store.pipe(select(fromHitMe.getUserInputMode)).subscribe(
      inputMode => this.inputMode = inputMode
    );
  }

  onHitMe(): void {
    let progression = [...this.userChords];
    this.store.dispatch({
      type: 'TOGGLE_INPUT_MODE',
      payload: false
    });
    this.userChordsCache.push(progression);
    this.hitmeChords = this.chordService.hitMe(progression);
  }

  get chordsToDisplay(): Array<Chord> {
    return this.inputMode ? this.userChords : this.hitmeChords;

  }

  onClear(): void {
    this.userChordsCache.push([...this.userChords]);
    this.chordService.resetChords();
    this.store.dispatch({
      type: 'TOGGLE_INPUT_MODE',
      payload: true
    });
  }

  ngOnDestroy() {
    this.chords$.unsubscribe();
  }
}
