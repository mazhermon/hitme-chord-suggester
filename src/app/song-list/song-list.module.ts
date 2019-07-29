import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './song-list.component';
import { SongListRoutingModule } from './song-list-routing.module';

@NgModule({
  declarations: [
    SongListComponent
  ],
  imports: [
    CommonModule,
    SongListRoutingModule
  ],
  exports: [
    SongListComponent
  ]
})
export class SongListModule { }
