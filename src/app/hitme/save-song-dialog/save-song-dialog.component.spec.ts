import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSongDialogComponent } from './save-song-dialog.component';

describe('SaveSongDialogComponent', () => {
  let component: SaveSongDialogComponent;
  let fixture: ComponentFixture<SaveSongDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSongDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
