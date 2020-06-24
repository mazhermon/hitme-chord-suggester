import { NgModule } from "@angular/core";
import { SongListComponent } from "./song-list/song-list.component";
import { RouterModule, Routes } from "@angular/router";
import { SongComponent } from "./song/song.component";
import { SongModule } from "./song/song.module";
import { EditSongComponent } from "./edit-song/edit-song.component";
import { EditSongModule } from "./edit-song/edit-song.module";

const routes: Routes = [
  {
    path: ":name/edit",
    component: EditSongComponent
  },
  {
    path: ":name",
    component: SongComponent
  },
  {
    path: "",
    component: SongListComponent
  }
];

@NgModule({
  imports: [SongModule, EditSongModule, RouterModule.forChild(routes)],
  exports: [RouterModule, SongModule]
})
export class SongRoutingModule {}
