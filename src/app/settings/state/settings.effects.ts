import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { KeysService } from "src/app/services/keys.service";
import * as settingsActions from './setting.actions';
import * as fromSettings from '../state/settings.reducer';
import { switchMap, map, take, flatMap } from "rxjs/operators";
import { Key } from "src/app/models/key.model";
import { KeyCentre } from "./settings.reducer";
import { Store, select } from "@ngrx/store";

@Injectable()
export class SettingsEffects {
    constructor(
        private actions$: Actions,
        private keysService: KeysService,
        private store: Store<fromSettings.State>
    ) { }

    @Effect()
    public getKeysData$ = this.actions$.pipe(
        ofType(settingsActions.UserSettingActionTypes.GetMusicalKeysData),
        switchMap((action: settingsActions.GetMusicalKeysData) => this.keysService.getKeys().pipe(
            map((keysData: Array<KeyCentre>) => (new settingsActions.GetMusicalKeysDataSuccess(keysData)))
        ))
    );

    @Effect()
    public updateGlobalKeyNote$ = this.actions$.pipe(
        ofType(settingsActions.UserSettingActionTypes.UpdateGobalKeyNote),
        switchMap((action: settingsActions.UpdateGobalKeyNote) => {
            return this.store.pipe(
                select(fromSettings.getGlobalKeyCenter),
                take(1),
                flatMap(globalKey => {
                    return this.keysService.getKey({
                        name: action.payload,
                        quality: globalKey.quality
                    });
                }),
                map((newKey: KeyCentre) => new settingsActions.UpdateGlobalKeySuccess(newKey))
            )
        })
    );

    @Effect()
    public updateGlobalKeyQuality$ = this.actions$.pipe(
        ofType(settingsActions.UserSettingActionTypes.UpdateGobalKeyQuality),
        switchMap((action: settingsActions.UpdateGobalKeyQuality) => {
            return this.store.pipe(
                select(fromSettings.getGlobalKeyCenter),
                take(1),
                flatMap(globalKey => {
                    return this.keysService.getKey({
                        name: globalKey.name,
                        quality: action.payload
                    });
                }),
                map((newKey: KeyCentre) => new settingsActions.UpdateGlobalKeySuccess(newKey))
            )
        })
    );
}
