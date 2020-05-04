import { NgModule } from "@angular/core";
import { SongListComponent } from "./song-list.component";
import { RouterModule, Routes } from "@angular/router";
import { SongComponent } from "../song/song.component";
import { SongModule } from "../song/song.module";
import { HitmeComponent } from "../hitme/hitme.component";

const routes: Routes = [
  {
    path: ":name",
    component: SongComponent
  },
  {
    path: ":name/edit",
    component: HitmeComponent
  },
  {
    path: "",
    component: SongListComponent
  }
];

@NgModule({
  imports: [SongModule, RouterModule.forChild(routes)],
  exports: [RouterModule, SongModule]
})
export class SongListRoutingModule {}
