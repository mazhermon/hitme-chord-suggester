import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SongComponent } from "./song.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SongService } from "../../services/song.service";
import { of } from "rxjs";

describe("SongComponent", () => {
  let component: SongComponent;
  let fixture: ComponentFixture<SongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => ({})
              }
            }
          }
        },
        {
          provide: SongService,
          useValue: {
            getSong: name => of([{ name: "songname", chords: [] }])
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
