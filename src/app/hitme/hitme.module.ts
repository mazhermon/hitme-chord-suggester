import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HitmeComponent } from './hitme.component';
import { ChordDisplayModule } from '../chord-display/chord-display.module';
import { ChordInputModule } from '../chord-input/chord-input.module';
import { MaterialModule } from '../material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/hitme.reducer';

@NgModule({
  imports: [
    CommonModule,
    ChordDisplayModule,
    ChordInputModule,
    MaterialModule,
    StoreModule.forFeature('hitme', reducer)
  ],
  declarations: [
    HitmeComponent
  ],
  exports: [
    HitmeComponent
  ]
})
export class HitmeModule { }
