import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChordService } from "src/app/services/chord.service";
import { switchMap, map } from 'rxjs/operators';

import * as hitMeActions from './hitme.actions';
import { Chord } from "src/app/models/chord.model";

@Injectable()
export class HitmeEffects {

    constructor(
        private actions$: Actions,
        private chordService: ChordService
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

    @Effect() public borrowChords$ = this.actions$.pipe(
        ofType(hitMeActions.HitMeActionTypes.BorrowChords),
        switchMap((action: hitMeActions.BorrowChords) => this.chordService.hitMe(action.payload).pipe(
            map(chords => (new hitMeActions.BorrowChordsSuccess(chords)))
        )));
}
