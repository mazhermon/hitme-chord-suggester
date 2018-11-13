import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { ChordService } from "src/app/services/chord.service";

@Injectable({
    providedIn: 'root'
})
export class HitMeEffectsService {

    //@Effect()

    constructor (
        private actions$: Actions,
        private chordService: ChordService
    ) {}
}