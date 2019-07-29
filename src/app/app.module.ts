import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HitmeModule } from './hitme/hitme.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModule } from './settings/settings.module';
import { HitmeComponent } from './hitme/hitme.component';
import { SongListModule } from './song-list/song-list.module';
import { SongListComponent } from './song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([      
      {
        path: 'songlist', 
        loadChildren: () => import('./song-list/song-list.module').then(mod => mod.SongListModule)
      },
      {
        path: '', component: HitmeComponent
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
    HitmeModule,
    SongListModule,
    MatSidenavModule,
    SettingsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
