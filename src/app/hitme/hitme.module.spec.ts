import { HitmeModule } from "./hitme.module";
import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

describe("HitmeModule", () => {
  let hitmeModule: HitmeModule;

  beforeEach(() => {
    const initialState = {
      hitme: {
        displayChords: [],
        userChords: [],
        hitMeChords: [],
        inputMode: true,
        songs: []
      }
    };
    hitmeModule = new HitmeModule();
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });
  });

  it("should create an instance", () => {
    expect(hitmeModule).toBeTruthy();
  });
});
