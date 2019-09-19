import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  songName: string
}

@Component({
  selector: 'hm-save-song-dialog',
  templateUrl: './save-song-dialog.component.html',
  styleUrls: ['./save-song-dialog.component.scss']
})
export class SaveSongDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SaveSongDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  // onSave(): void {
  //   this.dialogRef.close('')
  // }

}
