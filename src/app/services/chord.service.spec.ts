import { TestBed, inject } from "@angular/core/testing";

import { ChordService } from "./chord.service";
import { ModesService } from "./modes.service";
import { KeysService } from "./keys.service";
import { provideMockStore } from "@ngrx/store/testing";

describe("SendChordService", () => {
  beforeEach(() => {
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
      providers: [
        ChordService,
        provideMockStore({ initialState }),
        { provide: ModesService, useValue: {} },
        { provide: KeysService, useValue: {} }
      ]
    });
  });

  it("should be created", inject([ChordService], (service: ChordService) => {
    expect(service).toBeTruthy();
  }));
});
