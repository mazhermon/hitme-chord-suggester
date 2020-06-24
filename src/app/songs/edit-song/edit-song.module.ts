import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HitmeModule } from "src/app/hitme/hitme.module";
import { EditSongComponent } from "./edit-song.component";
import { SongTitleModule } from "../song-title/song-title.module";

@NgModule({
  declarations: [EditSongComponent],
  imports: [CommonModule, HitmeModule, SongTitleModule],
  exports: [EditSongComponent]
})
export class EditSongModule {}
