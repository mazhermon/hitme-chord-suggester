import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyChangeFormModule } from './key-change-form/key-change-form.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './state/settings.effects';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    KeyChangeFormModule,
    StoreModule.forFeature('userSettings', reducer),
    EffectsModule.forFeature([SettingsEffects])
  ],
  exports: [
    SidebarComponent
  ]
})
export class SettingsModule { }
