import { Chord } from "src/app/models/chord.model";
import * as fromRoot from '../../state/app.state';
import * as hitMeActions from './hitme.actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends fromRoot.State {
    hitMe: HitMeState
}

// don't think displayChords really needs to live here 🤔
export interface HitMeState {
    displayChords: Array<Chord>,
    userChords: Array<Chord>,
    hitMeChords: Array<Chord>,
    inputMode: boolean
}

const initialState: HitMeState = {
    displayChords: [],
    userChords: [],
    hitMeChords: [],
    inputMode: true
}

const getHitMeFeatureState = createFeatureSelector<HitMeState>('hitme');

export const getUserInputMode = createSelector(
    getHitMeFeatureState,
    state => state.inputMode
);

export const getUserChords = createSelector(
    getHitMeFeatureState,
    state => state.userChords
)

export const getHitmeChords = createSelector(
    getHitMeFeatureState,
    state => state.hitMeChords
)


export function reducer(state = initialState, action): HitMeState {
    switch (action.type) {
        case hitMeActions.HitMeActionTypes.ToggleInputMode:
            return {
                ...state,
                inputMode: action.payload
            }

        case hitMeActions.HitMeActionTypes.CreateUserChordSuccess:
            return {
                ...state,
                userChords: [...state.userChords, action.payload]
            }

        case hitMeActions.HitMeActionTypes.ResetChords:
            return {
                ...state,
                userChords: []
            }

        case hitMeActions.HitMeActionTypes.BorrowChordsSuccess:
            return {
                ...state,
                hitMeChords: [...action.payload]
            }

        default:
            return state;
    }
}