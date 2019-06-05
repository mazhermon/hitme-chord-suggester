import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { KeyChangeFormModule } from '../key-change-form/key-change-form.module';

@NgModule({
  imports: [
    CommonModule,
    KeyChangeFormModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
