import { RomanPipe } from './pipes/roman.pipe';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChordDisplayComponent } from './chord-display/chord-display.component';
import { ChordInputComponent } from './chord-input/chord-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ChordDisplayComponent,
    ChordInputComponent,
    RomanPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
