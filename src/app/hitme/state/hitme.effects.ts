import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChordService } from "src/app/services/chord.service";
import { switchMap, map, tap } from 'rxjs/operators';

import * as hitMeActions from './hitme.actions';
import { Chord } from "src/app/models/chord.model";
import { SongService } from "src/app/services/song.service";
import { Router } from "@angular/router";

@Injectable()
export class HitmeEffects {

    constructor(
        private actions$: Actions,
        private chordService: ChordService,
        private songService: SongService,
        private router:Router
    ) { }

    @Effect()
    public createChord$ = this.actions$.pipe(
        ofType(hitMeActions.HitMeActionTypes.CreateUserChord),
        switchMap((action: hitMeActions.CreateUserChord) => {
            let { numeral, key } = action.payload;
            return this.chordService.setChord(numeral, key).pipe(
                map((chord: Chord) => (new hitMeActions.CreateUserChordSuccess(chord)))
            )
        }));

    @Effect() 
    public borrowChords$ = this.actions$.pipe(
        ofType(hitMeActions.HitMeActionTypes.BorrowChords),
        switchMap((action: hitMeActions.BorrowChords) => this.chordService.hitMe(action.payload).pipe(
            map(chords => (new hitMeActions.BorrowChordsSuccess(chords)))
        )));
    
    // success action not firing yet
    @Effect()
    public saveSong$ = this.actions$.pipe(
        ofType(hitMeActions.HitMeActionTypes.SaveSong),
        switchMap((action: hitMeActions.SaveSong) =>  this.songService.saveSong(action.payload).pipe(
            tap(song => this.router.navigate(['/songs/', song.name])),
            map(song => (new hitMeActions.SaveSongSuccess(song)))
        )));
    
        //working on loading songs from local storage
        // need to map them from object to array of songs I think
    // @Effect()
    // public loadSongs$ = this.actions$.pipe(
    //     ofType(hitMeActions.HitMeActionTypes.LoadSongs),
    //     switchMap( () => this.songService.loadSongs().pipe(
    //         map(songs => (new hitMeActions.LoadSongsSuccess(songs)))
    //     )));
}
