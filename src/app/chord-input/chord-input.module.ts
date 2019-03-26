import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordInputComponent } from './chord-input.component';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule
  ],
  declarations: [
    ChordInputComponent
  ],
  exports: [
    ChordInputComponent
  ]
})
export class ChordInputModule { }
