import { Action } from "@ngrx/store";

import { Key } from '../../models/key.model';

export enum UserSettingActionTypes {
    //ToggleInputMode = '[App state] Toggle input mode',
    GetMusicalKeysData = '[User Settings] Get keys data',
    GetMusicalKeysDataSuccess = '[User Settings] Get keys data SUCCESS',
    ChangeGlobalKeyCentre = '[User Settings] Change global key centre'
}

export class GetMusicalKeysData implements Action {
    readonly type = UserSettingActionTypes.GetMusicalKeysData;
}

export class GetMusicalKeysDataSuccess implements Action {
    readonly type = UserSettingActionTypes.GetMusicalKeysDataSuccess;
    constructor(public payload: Array<Key>) { }
}

export type UserSettingsActions =
    | GetMusicalKeysData
    | GetMusicalKeysDataSuccess;
    //ToggleInputMode
    //| ChangeGlobalKeyCentre;