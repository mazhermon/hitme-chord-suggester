import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HitmeComponent } from "./hitme.component";
import { of } from "rxjs/internal/observable/of";
import { provideMockStore } from "@ngrx/store/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("HitmeComponent", () => {
  let component: HitmeComponent;
  let fixture: ComponentFixture<HitmeComponent>;

  beforeEach(async(() => {
    const initialState = {
      displayChords: [],
      userChords: [],
      hitMeChords: [],
      inputMode: true,
      songs: []
    };

    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [HitmeComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
