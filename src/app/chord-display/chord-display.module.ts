import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChordDisplayComponent } from './chord-display.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    ChordDisplayComponent
  ],
  exports: [
    ChordDisplayComponent
  ]
})
export class ChordDisplayModule { }
