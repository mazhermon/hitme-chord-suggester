import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SaveSongDialogComponent } from "./save-song-dialog.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatInput } from "@angular/material/input";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

describe("SaveSongDialogComponent", () => {
  let component: SaveSongDialogComponent;
  let fixture: ComponentFixture<SaveSongDialogComponent>;

  beforeEach(async(() => {
    const dialogData = {
      songName: "song title"
    };

    TestBed.configureTestingModule({
      declarations: [SaveSongDialogComponent, MatInput],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: dialogData }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
