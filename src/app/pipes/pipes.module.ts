import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RomanPipe } from './roman.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RomanPipe
  ],
  exports: [
    RomanPipe
  ]
})
export class PipesModule { }
