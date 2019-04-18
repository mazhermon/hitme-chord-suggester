import { Chord } from "src/app/models/chord.model";

export interface chordState {
    displayChords: Array<Chord>,
    userChords: Array<Chord>,
    hitMeChords: Array<Chord>,
    inputMode: boolean
}

const initialState: chordState = {
    displayChords: [],
    userChords: [],
    hitMeChords: [],
    inputMode: true
}

export function reducer(state = initialState, action): any {
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