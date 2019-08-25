import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';
import { ChordDisplayModule } from '../chord-display/chord-display.module';
import { ButtonModule } from '../_shared/button/button.module';

@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    CommonModule,
    ChordDisplayModule,
    ButtonModule
  ],
  exports: [
    SongComponent
  ]
})
export class SongModule { }
