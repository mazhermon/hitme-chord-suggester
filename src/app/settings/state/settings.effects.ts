import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { KeysService } from "src/app/services/keys.service";
import * as settingsActions from './setting.actions';
import { switchMap, map } from "rxjs/operators";
import { Key } from "src/app/models/key.model";

@Injectable()
export class SettingsEffects {
    constructor(
        private actions$: Actions,
        private keysService: KeysService
    ) { }

    @Effect()
    public getKeysData$ = this.actions$.pipe(
        ofType(settingsActions.UserSettingActionTypes.GetMusicalKeysData),
        switchMap((action: settingsActions.GetMusicalKeysData) => this.keysService.getKeys().pipe(
            map((keysData: Array<Key>) => (new settingsActions.GetMusicalKeysDataSuccess(keysData)))
        ))
    )
}