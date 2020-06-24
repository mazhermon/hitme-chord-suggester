import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SongComponent } from "./song.component";
import { ChordDisplayModule } from "../../chord-display/chord-display.module";
import { ButtonModule } from "../../_shared/button/button.module";
import { RouterModule } from "@angular/router";
import { SongTitleModule } from "../song-title/song-title.module";

@NgModule({
  declarations: [SongComponent],
  imports: [
    CommonModule,
    ChordDisplayModule,
    ButtonModule,
    RouterModule,
    SongTitleModule
  ],
  exports: [SongComponent]
})
export class SongModule {}
