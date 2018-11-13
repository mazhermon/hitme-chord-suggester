import { Chord } from "src/app/models/chord.model";
import { HitMeActions, HitMeActionTypes } from './hitme.actions';

// could refactor to have this live in the hitme dir with the component
export const HITME_FEATURE_KEY = 'hitme_feature_key';

export interface HitMeState {
    userChords: Array<Chord>,
    hitmeChords: Array<Chord>,
    userChordsCache: Array<Array<Chord>>
}

export const INITIAL_STATE: HitMeState = {
    userChords: [],
    hitmeChords: [],
    userChordsCache: [[]]
}

export function HitMeReducer (state: HitMeState = INITIAL_STATE, action: HitMeActions) {
    
    switch (action.type) {
        case HitMeActionTypes.ADD_USER_CHORD :
            console.log('add user action hit in reducer');
            return {
                ...state,
                userChords: [...state.userChords, action.payload]
            }

        case HitMeActionTypes.CLEAR_CHORDS :
            return {
                ...state,
                userChords: []
            }

        default: 
            return state;

    }

}

