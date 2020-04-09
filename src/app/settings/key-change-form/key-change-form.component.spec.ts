import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { KeyChangeFormComponent } from "./key-change-form.component";
import { provideMockStore } from "@ngrx/store/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("KeyChangeFormComponent", () => {
  let component: KeyChangeFormComponent;
  let fixture: ComponentFixture<KeyChangeFormComponent>;

  beforeEach(async(() => {
    const initialState = {
      userSettings: {
        keysData: [],
        globalKeyCentre: {
          name: "C",
          quality: "maj",
          scale: ["C", "D", "E", "F", "G", "A", "B"]
        }
      }
    };
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [KeyChangeFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
