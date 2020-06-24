import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SongListComponent } from "./song-list.component";
import { SongRoutingModule } from "../song-routing.module";

@NgModule({
  declarations: [SongListComponent],
  imports: [CommonModule, SongRoutingModule],
  exports: [SongListComponent]
})
export class SongListModule {}
