import { createSelector, ActionReducerMap, createFeatureSelector } from "@ngrx/store"
import * as fromAppReducer from './app.reducer';

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
    shell: fromAppReducer.reducer
}

const getShellState = createFeatureSelector<ShellState>('shell');
export const getSideBarIsOpen = createSelector(
    getShellState,
    state => state.sideBarIsOpen
)