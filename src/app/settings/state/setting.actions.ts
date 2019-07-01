import { Action } from "@ngrx/store";

import { Key } from '../../models/key.model';
import { KeyCentre } from "./settings.reducer";

export enum UserSettingActionTypes {
    //ToggleInputMode = '[App state] Toggle input mode',
    GetMusicalKeysData = '[User Settings] Get keys data',
    GetMusicalKeysDataSuccess = '[User Settings] Get keys data SUCCESS',
    ChangeGlobalKeyCentre = '[User Settings] Change global key centre',
    UpdateGobalKeyQuality = '[User Settings] Update global key Quality',
    UpdateGobalKeyNote = '[User Settings] Update global key Note',
    UpdateGobalKey = '[User Settings] Update global key',
    UpdateGobalKeySuccess = '[User Settings] Update global key SUCCESS'
}

export class GetMusicalKeysData implements Action {
    readonly type = UserSettingActionTypes.GetMusicalKeysData;
}

export class GetMusicalKeysDataSuccess implements Action {
    readonly type = UserSettingActionTypes.GetMusicalKeysDataSuccess;
    constructor(public payload: Array<KeyCentre>) { }
}

export class UpdateGobalKeyNote implements Action {
    readonly type = UserSettingActionTypes.UpdateGobalKeyNote;
    constructor(public payload: string) { }
}

export class UpdateGobalKeyQuality implements Action {
    readonly type = UserSettingActionTypes.UpdateGobalKeyQuality;
    constructor(public payload: string) { }
}

export class UpdateGobalKey implements Action {
    readonly type = UserSettingActionTypes.UpdateGobalKey;
    constructor(public payload: KeyCentre) { }
}

export class UpdateGlobalKeySuccess implements Action {
    readonly type = UserSettingActionTypes.UpdateGobalKeySuccess;
    constructor(public payload: KeyCentre) { }
}

export type UserSettingsActions =
    | GetMusicalKeysData
    | GetMusicalKeysDataSuccess
    | UpdateGlobalKeySuccess;
    //ToggleInputMode
    //| ChangeGlobalKeyCentre;