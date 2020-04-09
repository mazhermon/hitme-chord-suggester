import { RomanPipe } from "./roman.pipe";

describe("RomanPipe", () => {
  let pipe: RomanPipe;
  const romanNumerals: Array<string> = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII"
  ];
  beforeEach(() => {
    pipe = new RomanPipe();
  });
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return a roman numeral when passed a number", () => {
    romanNumerals.forEach((numeral, i) => {
      expect(pipe.transform(i)).toEqual(numeral);
    });
  });
});
