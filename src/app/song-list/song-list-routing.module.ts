import { NgModule } from '@angular/core';
import { SongListComponent } from './song-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SongComponent } from '../song/song.component';
import { SongModule } from '../song/song.module';

const routes: Routes = [
  {
    path: ':name',
    component: SongComponent
  },  
  {
    path: '',
    component: SongListComponent
  }
]

@NgModule({
  imports: [
    SongModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    SongModule
  ]
})
export class SongListRoutingModule { }
