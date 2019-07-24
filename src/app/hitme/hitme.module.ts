import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HitmeComponent } from './hitme.component';
import { ChordDisplayModule } from '../chord-display/chord-display.module';
import { ChordInputModule } from '../chord-input/chord-input.module';
import { MaterialModule } from '../material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/hitme.reducer';
import { HitmeEffects } from './state/hitme.effects';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from '../_shared/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ChordDisplayModule,
    ChordInputModule,
    MaterialModule,
    ButtonModule,
    StoreModule.forFeature('hitme', reducer),
    EffectsModule.forFeature([HitmeEffects])
  ],
  declarations: [
    HitmeComponent
  ],
  exports: [
    HitmeComponent
  ]
})
export class HitmeModule { }
