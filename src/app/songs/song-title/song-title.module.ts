import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SongTitleComponent } from "./song-title.component";

@NgModule({
  declarations: [SongTitleComponent],
  imports: [CommonModule],
  exports: [SongTitleComponent]
})
export class SongTitleModule {}
