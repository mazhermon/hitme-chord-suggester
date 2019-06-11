import * as fromRoot from '../../state/app.state';
import * as settingsActions from './setting.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Key } from 'src/app/models/key.model';

export interface State extends fromRoot.State {
    userSettings: UserSettingState
}

export interface UserSettingState {
    keysData: Array<Key>,
    globalKeyCentre: Array<string>,
}

const initialState: UserSettingState = {
    keysData: [],
    globalKeyCentre: ['C', 'Maj']
}

//selectors
const getSettingsFeatureState = createFeatureSelector<UserSettingState>('userSettings');

export const getKeysData = createSelector(
    getSettingsFeatureState,
    state => state.keysData
)

export function reducer(state = initialState, action): UserSettingState {
    switch (action.type) {
        case settingsActions.UserSettingActionTypes.GetMusicalKeysDataSuccess:
            return {
                ...state,
                keysData: action.payload
            }

        default:
            return state;
    }


}