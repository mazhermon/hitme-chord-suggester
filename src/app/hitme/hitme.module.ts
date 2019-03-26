import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HitmeComponent } from './hitme.component';
import { ChordDisplayModule } from '../chord-display/chord-display.module';
import { ChordInputModule } from '../chord-input/chord-input.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    ChordDisplayModule,
    ChordInputModule,
    MaterialModule
  ],
  declarations: [
    HitmeComponent
  ],
  exports: [
    HitmeComponent
  ]
})
export class HitmeModule { }
