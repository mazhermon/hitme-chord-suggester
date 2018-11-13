import { Chord } from './../models/chord.model';
import { ChordService } from './../services/chord.service';
import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../state/app-state';
import { HitMeSelectors } from '../state/hitme/hitme.selectors';

@Component({
  selector: 'hm-hitme',
  templateUrl: './hitme.component.html',
  styleUrls: ['./hitme.component.scss']
})
export class HitmeComponent implements OnInit {
  private userChords: Array<Chord> = [];
  private hitmeChords: Array<Chord>;
  private store: Store<ApplicationState>;
  private chords$: Subscription;
  private userChordsCache: Array<Array<Chord>> = [];

  public chordsToDisplay$ = this.store.pipe(select(HitMeSelectors.getUserChords));

  @HostBinding('class.hm-hitme--gradient-overlay-active') public inputMode = true;

  constructor(
    public chordService: ChordService,
  ){}

  ngOnInit() {
    // this.chords$ = this.chordService.chords.subscribe(
    //   chords => {
    //     this.userChords = chords;
    //     this.inputMode = true;
    //   }
    // );
  }

  onHitMe(): void {
    let progression = [...this.userChords];
    //this.inputMode = false; // need to add this to state ?
    //this.userChordsCache.push(progression);
    this.hitmeChords = this.chordService.hitMe(progression);
  }

  // get chordsToDisplay(): Observable<Array<Chord>> {
  //   //return this.inputMode ? this.userChords : this.hitmeChords;
  //   return this.store.pipe(select(HitMeSelectors.getUserChords));
  // }

  onClear(): void {
    this.userChordsCache.push([...this.userChords]);
    this.chordService.resetChords();
    this.inputMode = true;
  }

  ngOnDestroy() {
    this.chords$.unsubscribe();
  }
}
