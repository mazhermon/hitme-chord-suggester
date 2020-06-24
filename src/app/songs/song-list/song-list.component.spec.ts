import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SongListComponent } from "./song-list.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { provideMockStore } from "@ngrx/store/testing";

describe("SongListComponent", () => {
  let component: SongListComponent;
  let fixture: ComponentFixture<SongListComponent>;

  beforeEach(async(() => {
    const initialState = {
      hitme: {
        displayChords: [],
        userChords: [],
        hitMeChords: [],
        inputMode: true,
        songs: []
      }
    };
    TestBed.configureTestingModule({
      declarations: [SongListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
