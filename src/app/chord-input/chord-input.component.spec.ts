import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChordInputComponent } from "./chord-input.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { provideMockStore } from "@ngrx/store/testing";
import { RomanPipe } from "../pipes/roman.pipe";

describe("ChordInputComponent", () => {
  let component: ChordInputComponent;
  let fixture: ComponentFixture<ChordInputComponent>;

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
      declarations: [ChordInputComponent, RomanPipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
