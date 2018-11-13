import { Action } from '@ngrx/store';
import { Chord } from '../../models/chord.model';

export enum HitMeActionTypes {
    HITME_WITH_CHORD_SUBS = '[Hitme] get chord subs',
    ADD_USER_CHORD = '[Hitme] add user chord',
    CLEAR_CHORDS = '[Hitme] clear chords'
}

export class HitMeWithChordSubsAction implements Action {
    readonly type = HitMeActionTypes.HITME_WITH_CHORD_SUBS;
    constructor ( readonly payload: Array<Chord>) {}
}

export class AddUserChordAction implements Action {
    readonly type = HitMeActionTypes.ADD_USER_CHORD;
    constructor ( readonly payload: Chord ) {}
}

export class ClearChordsAction implements Action {
    readonly type = HitMeActionTypes.CLEAR_CHORDS;
}

export type HitMeActions =
    HitMeWithChordSubsAction
    | AddUserChordAction
    | ClearChordsAction;