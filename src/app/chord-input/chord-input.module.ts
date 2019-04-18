import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordInputComponent } from './chord-input.component';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    StoreModule.forFeature('chord-input', {})
  ],
  declarations: [
    ChordInputComponent
  ],
  exports: [
    ChordInputComponent
  ]
})
export class ChordInputModule { }
