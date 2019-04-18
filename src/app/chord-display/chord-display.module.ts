import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChordDisplayComponent } from './chord-display.component';
import { PipesModule } from '../pipes/pipes.module';

import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    StoreModule.forFeature('chord-display', {})
  ],
  declarations: [
    ChordDisplayComponent
  ],
  exports: [
    ChordDisplayComponent
  ]
})
export class ChordDisplayModule { }
