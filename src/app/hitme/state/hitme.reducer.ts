import { Chord } from "src/app/models/chord.model";
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends fromRoot.State {
    hitMe: HitMeState
}

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
)

export function reducer(state = initialState, action): HitMeState {
    switch (action.type) {
        case 'TOGGLE_INPUT_MODE':
            return {
                ...state,
                inputMode: action.payload
            }

        default:
            return state;
    }
}