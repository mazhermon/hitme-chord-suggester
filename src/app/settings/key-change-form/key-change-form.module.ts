import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyChangeFormComponent } from './key-change-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    KeyChangeFormComponent
  ],
  exports: [
    KeyChangeFormComponent
  ]
})
export class KeyChangeFormModule { }
