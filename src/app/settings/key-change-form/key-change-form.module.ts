import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyChangeFormComponent } from './key-change-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    KeyChangeFormComponent
  ],
  exports: [
    KeyChangeFormComponent
  ]
})
export class KeyChangeFormModule { }
