import { NgModule } from '@angular/core';
import { SongListComponent } from './song-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SongListComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SongListRoutingModule { }
