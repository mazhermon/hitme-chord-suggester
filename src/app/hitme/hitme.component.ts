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

  //public inputMode = true;
  private userChords: Array<Chord> = [];
  private hitmeChords: Array<Chord>;
  private chords$: Subscription;
  private userChordsCache: Array<Array<Chord>> = [];

  @HostBinding('class.hm-hitme--gradient-overlay-active') public inputMode = true;

  constructor(
    public chordService: ChordService,
  ){}

  ngOnInit() {
    this.chords$ = this.chordService.chord.subscribe(
      chord => {
        this.userChords.push(chord);
        this.inputMode = true;
      }
    );
  }

  onHitMe(): void {
    let progression = [...this.userChords];
    this.inputMode = false;
    this.userChordsCache.push(progression);
    this.hitmeChords = this.chordService.hitMe(progression);
    //this.overlayGradientVisible = !this.overlayGradientVisible;
  }

  get chordsToDisplay(): Array<Chord> {
    return this.inputMode ? this.userChords : this.hitmeChords;
  }

  onClear(): void {
    this.userChordsCache.push([...this.userChords]);
    this.userChords = [];
    this.inputMode = true;
  }

  ngOnDestroy() {
    this.chords$.unsubscribe();
  }
}
