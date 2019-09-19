import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyChangeFormModule } from './key-change-form/key-change-form.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './state/settings.effects';
import { RouterModule } from '@angular/router';
import { TitleBarModule } from '../_shared/title-bar/title-bar.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    KeyChangeFormModule,
    StoreModule.forFeature('userSettings', reducer),
    EffectsModule.forFeature([SettingsEffects]),
    TitleBarModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SettingsModule { }
