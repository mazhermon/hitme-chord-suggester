import { Action } from '@ngrx/store';

export enum AppActionTypes {
    ToggleSideBar = '[App] Toggle sidebar'
}

export class ToggleSideBar implements Action {
    readonly type = AppActionTypes.ToggleSideBar;
}

export type AppActions = ToggleSideBar;