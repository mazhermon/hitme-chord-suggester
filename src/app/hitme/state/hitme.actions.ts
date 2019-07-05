import { Chord, ChordSetter } from "src/app/models/chord.model";
import { Action } from "@ngrx/store";

export enum HitMeActionTypes {
    ToggleInputMode = '[Hit me] Toggle input mode',
    CreateUserChord = '[Hit me] Create user chord',
    CreateUserChordSuccess = '[Hit me] Create user chord success',
    ResetChords = '[Hit me] Reset chords',
    BorrowChords = '[Hit me] Borrow chords',
    BorrowChordsSuccess = '[Hit me] Borrow chords success'
}

export class ToggleInputMode implements Action {
    readonly type = HitMeActionTypes.ToggleInputMode;
    constructor(public payload: boolean) { }
}

//check type of the payload for this one, number or string?
export class CreateUserChord {
    readonly type = HitMeActionTypes.CreateUserChord;
    constructor(public payload: ChordSetter) { }
}

export class CreateUserChordSuccess {
    readonly type = HitMeActionTypes.CreateUserChordSuccess;
    constructor(public payload: Chord) { }
}

export class ResetChords {
    readonly type = HitMeActionTypes.ResetChords;
}

export class BorrowChords {
    readonly type = HitMeActionTypes.BorrowChords;
    constructor(public payload: Array<Chord>) { }
}

export class BorrowChordsSuccess {
    readonly type = HitMeActionTypes.BorrowChordsSuccess;
    constructor(public payload: Array<Chord>) { }
}

export type HitMeActions = ToggleInputMode
    | CreateUserChord
    | CreateUserChordSuccess
    | ResetChords;