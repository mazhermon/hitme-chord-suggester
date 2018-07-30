import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChordDisplayComponent } from './chord-display/chord-display.component';
import { ChordInputComponent } from './chord-input/chord-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordDisplayComponent,
    ChordInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
