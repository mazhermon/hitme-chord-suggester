import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { SongService } from "./song.service";

describe("SongService", () => {
  const initialState = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideMockStore({initialState})]
    }));

  it("should be created", () => {
    const service: SongService = TestBed.get(SongService);
    expect(service).toBeTruthy();
  });
});
