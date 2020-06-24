import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  songName: string;
}

@Component({
  selector: "hm-save-song-dialog",
  templateUrl: "./save-song-dialog.component.html",
  styleUrls: ["./save-song-dialog.component.scss"]
})
export class SaveSongDialogComponent implements OnInit {
  public saveSongHeadingText: String;

  constructor(
    public dialogRef: MatDialogRef<SaveSongDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.saveSongHeadingText = this.data.songName
      ? "Save Song"
      : "Give your song a name";
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  // song is saved via action dispatch in hitme compoent
}
