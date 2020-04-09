import { TestBed, inject } from "@angular/core/testing";

import { ModesService } from "./modes.service";

describe("ModesService", () => {
  let modes;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModesService]
    });
    modes = [
      {
        name: "ionian",
        scale: ["maj7", "min7", "min7", "maj7", "7", "min7", "min7(b5)"]
      },
      {
        name: "dorian",
        scale: ["min7", "min7", "maj7", "7", "min7", "min7(b5)", "maj7"]
      }
    ];
  });

  it("should be created", inject([ModesService], (service: ModesService) => {
    expect(service).toBeTruthy();
  }));

  it("should return a mode name when getMode is called with a valid number", inject(
    [ModesService],
    (service: ModesService) => {
      // Arrange
      const modeToGet = 0;
      const expectedModeName = "ionian";

      //Act
      const modeResult = service.getMode(modeToGet);

      // Asset
      expect(modeResult.name).toEqual(expectedModeName);
    }
  ));
});
