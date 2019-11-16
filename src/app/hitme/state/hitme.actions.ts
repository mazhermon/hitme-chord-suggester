import { Chord, ChordSetter } from "src/app/models/chord.model";
import { Action } from "@ngrx/store";
import { Song } from "src/app/services/song.service";

export enum HitMeActionTypes {
    ToggleInputMode = '[Hit me] Toggle input mode',
    CreateUserChord = '[Hit me] Create user chord',
    CreateUserChordSuccess = '[Hit me] Create user chord success',
    ResetChords = '[Hit me] Reset chords',
    BorrowChords = '[Hit me] Borrow chords',
    BorrowChordsSuccess = '[Hit me] Borrow chords success',
    SaveSong = '[Hit me] Save song',
    SaveSongSuccess = '[Hit me] Save song success',
    LoadSongs = '[Hit me] Load songs',
    LoadSongsSuccess = '[Hit me] Load songs success',
    HitMeNoOp = '[Hit me] NO OP'
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

export class SaveSong {
    readonly type = HitMeActionTypes.SaveSong;
    constructor(public payload: Song) {}
}

export class SaveSongSuccess {
    readonly type = HitMeActionTypes.SaveSongSuccess;
    constructor(public payload: Song) {}
    // TODO listen in reducer and add this song to state as currentSong
}

export class LoadSongs {
    readonly type = HitMeActionTypes.LoadSongs;
}

export class LoadSongsSuccess {
    readonly type = HitMeActionTypes.LoadSongsSuccess;
    constructor(public payload: Array<Song>) {}
}

export class HitMeNoOp {
    readonly type = HitMeActionTypes.HitMeNoOp;
}

export type HitMeActions = ToggleInputMode
    | CreateUserChord
    | CreateUserChordSuccess
    | ResetChords
    | BorrowChords
    | BorrowChordsSuccess
    | SaveSong
    | SaveSongSuccess
    | LoadSongs
    | LoadSongsSuccess
    | HitMeNoOp;