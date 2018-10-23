import { animate, AnimationBuilder, style } from '@angular/animations'

import { Chord } from './../models/chord.model';
import { ChordService } from './../services/chord.service';
import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hm-hitme',
  templateUrl: './hitme.component.html',
  styleUrls: ['./hitme.component.scss']
})
export class HitmeComponent implements OnInit {
  private userChords: Array<Chord> = [];
  private hitmeChords: Array<Chord>;
  private chords$: Subscription;
  private userChordsCache: Array<Array<Chord>> = [];

  @HostBinding('class.hm-hitme--gradient-overlay-active') public inputMode = true;

  constructor(
    public chordService: ChordService,
    private animationBuilder: AnimationBuilder
  ){}

  ngOnInit() {
    this.chords$ = this.chordService.chords.subscribe(
      chords => {
        this.userChords = chords;
        this.inputMode = true;
      }
    );
  }

  onHitMe(test: any): void {
    let progression = [...this.userChords];
    this.inputMode = false;
    this.userChordsCache.push(progression);
    this.hitmeChords = this.chordService.hitMe(progression);

    //see if some of this can be moved outside of here once working
    const animation = this.animationBuilder.build([
      style({
        backgroundColor: 'tomato'
      }),
      animate(300, style({
        backgroundColor: 'deepskyblue'
      })),
      animate(300)
    ]);

    let onHitMePlayer = animation.create(test);
    onHitMePlayer.play();
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
