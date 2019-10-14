
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Chord } from './../models/chord.model';
import { ChordService } from './../services/chord.service';

import * as fromHitMe from './state/hitme.reducer';
import * as hitMeActions from './state/hitme.actions';
import { takeUntil, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SaveSongDialogComponent } from './save-song-dialog/save-song-dialog.component';
import { Song, SongService } from '../services/song.service';

// move animation triggers to it's own file
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
    ]),
    trigger('popout', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(10px) scale(0.8)'
        }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(.58,-0.45,.67,.99)', style({
          opacity: 0,
          transform: 'translateY(10px) scale(0.8)'
        }))
      ])
    ])
  ]
})
export class HitmeComponent implements OnInit, OnDestroy {
  private userChords: Array<Chord> = [];
  private hitmeChords: Array<Chord>;
  private inputModeSubscription: Subscription;
  private userChordsSubscription: Subscription;
  private hitmeChordsSubscription: Subscription;
  private destoryed$: Subject<void> = new Subject();

  // change this to use state and do from the app component
  //@HostBinding('class.hm-hitme--gradient-overlay-active') 
  public inputMode: boolean;
  public songName = '';

  constructor(
    public chordService: ChordService,
    private store: Store<fromHitMe.HitMeState>,
    public saveSongDialog: MatDialog,
  ) { }

  ngOnInit() {

    this.store.dispatch(new hitMeActions.LoadSongs());
    

    this.userChordsSubscription = this.store.pipe(
      select(fromHitMe.getUserChords),
      takeUntil(this.destoryed$)
    ).subscribe(
      userChords => {
        this.userChords = userChords;
        this.store.dispatch(new hitMeActions.ToggleInputMode(true));
      }
    );

    this.hitmeChordsSubscription = this.store.pipe(
      select(fromHitMe.getHitmeChords),
      takeUntil(this.destoryed$)
    ).subscribe(
      hitMeChords => this.hitmeChords = hitMeChords
    );

    this.inputModeSubscription = this.store.pipe(
      select(fromHitMe.getUserInputMode),
      takeUntil(this.destoryed$)
    ).subscribe(
      inputMode => this.inputMode = inputMode
    );
  }

  onHitMe(): void {
    let progression = [...this.userChords];
    this.store.dispatch(new hitMeActions.ToggleInputMode(false));
    this.store.dispatch(new hitMeActions.BorrowChords(progression));
  }

  get chordsToDisplay(): Array<Chord> {
    return this.inputMode ? this.userChords : this.hitmeChords;
  }

  onReset(): void {
    this.store.dispatch(new hitMeActions.ToggleInputMode(true));
    this.store.dispatch(new hitMeActions.ResetChords());
  }

  openSaveSongDialog(): void {
    const dialogRef = this.saveSongDialog.open(SaveSongDialogComponent, {
      width: '300px',
      data: { songName : this.songName}
    });

    dialogRef.afterClosed().pipe(
      take(1),
      takeUntil(this.destoryed$)
    ).subscribe(songNameToSave => {
      this.songName = songNameToSave;
      let songToSave: Song = {
        name: this.songName,
        chords: this.chordsToDisplay
      }
      this.store.dispatch(new hitMeActions.SaveSong(songToSave));

      
      
      // to store the current song to save in state as currentSong
      // listen in effects and save the song to the database
      // 
    });
  }

  ngOnDestroy() {
    this.destoryed$.next();
  }
}
