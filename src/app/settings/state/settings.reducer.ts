import * as fromRoot from '../../state/app.state';
import * as settingsActions from './setting.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Key } from 'src/app/models/key.model';

export interface State extends fromRoot.State {
    userSettings: UserSettingState
}

export interface UserSettingState {
    keysData: Array<Key>,
    globalKeyCentre: KeyCentre,
}

export interface KeyCentre {
    name: string,
    quality: string
    scale: Array<string>
}

export const INITIAL_KEY = {
    name: 'C',
    quality: 'maj',
    scale: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
}

const INITIAL_STATE: UserSettingState = {
    keysData: [],
    globalKeyCentre: INITIAL_KEY
}

//selectors
const getSettingsFeatureState = createFeatureSelector<UserSettingState>('userSettings');

export const getKeysData = createSelector(
    getSettingsFeatureState,
    state => state.keysData
);

export const getGlobalKeyName = createSelector(
    getSettingsFeatureState,
    state => state.globalKeyCentre.name
);

export const getGlobalKeyQuality = createSelector(
    getSettingsFeatureState,
    state => state.globalKeyCentre.quality
);

export const getGlobalKeyCenter = createSelector(
    getSettingsFeatureState,
    state => state.globalKeyCentre
);

export function reducer(state = INITIAL_STATE, action): UserSettingState {
    switch (action.type) {
        case settingsActions.UserSettingActionTypes.GetMusicalKeysDataSuccess:
            return {
                ...state,
                keysData: action.payload
            }


        case settingsActions.UserSettingActionTypes.UpdateGobalKeySuccess:
            return {
                ...state,
                globalKeyCentre: action.payload
            }


        default:
            return state;
    }


}
