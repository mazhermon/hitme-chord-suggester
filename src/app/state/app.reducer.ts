import * as fromAppActions from './app.actions';

import { createSelector, ActionReducerMap, createFeatureSelector } from "@ngrx/store"

export interface State {
    shell: ShellState
    // this is extended in feature state files
}

export interface ShellState {
    sideBarIsOpen: boolean
}

export const initialShellState = {
    sideBarIsOpen: false
}

export const reducers: ActionReducerMap<State> = {
    shell: reducer
}

const getShellState = createFeatureSelector<ShellState>('shell');
export const getSideBarIsOpen = createSelector(
    getShellState,
    state => state.sideBarIsOpen
)

export function reducer(state = initialShellState, action): ShellState {
    switch (action.type) {
        case fromAppActions.AppActionTypes.ToggleSideBar:
            return {
                ...state,
                sideBarIsOpen: !state.sideBarIsOpen
            }

        default:
            return state
    }
}