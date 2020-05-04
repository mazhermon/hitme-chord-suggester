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
export class SaveSongDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SaveSongDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  // song is saved via action dispatch in hitme compoent
}
