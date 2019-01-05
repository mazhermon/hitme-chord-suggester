import { Chord } from './../models/chord.model';
import { ChordService } from './../services/chord.service';
import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

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

  @HostBinding('class.hm-hitme--gradient-overlay-active') public inputMode = true;

  constructor(
    public chordService: ChordService,
  ){}

  ngOnInit() {
    // try using async pipe for this
    this.chords$ = this.chordService.chords.subscribe(
      chords => {
        this.userChords = chords;
        this.inputMode = true;
      }
    );
  }

  onHitMe(): void {
    let progression = [...this.userChords];
    this.inputMode = false;
    this.userChordsCache.push(progression);
    this.hitmeChords = this.chordService.hitMe(progression);
  }

  get chordsToDisplay(): Array<Chord> {
    return this.inputMode ? this.userChords : this.hitmeChords;
  }

  onClear(): void {
    this.userChordsCache.push([...this.userChords]);
    this.chordService.resetChords();
    this.inputMode = true;
  }

  ngOnDestroy() {
    this.chords$.unsubscribe();
  }
}
