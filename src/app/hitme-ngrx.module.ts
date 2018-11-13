import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HitMeReducer, HITME_FEATURE_KEY, INITIAL_STATE } from './state/hitme/hitme.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [storeFreeze] : [] }
    ),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(
      HITME_FEATURE_KEY,
      HitMeReducer,
      {
        initialState: INITIAL_STATE
      }
    ),
    EffectsModule.forFeature([HitMeEffectsService]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class HitmeNgrxModule { }
