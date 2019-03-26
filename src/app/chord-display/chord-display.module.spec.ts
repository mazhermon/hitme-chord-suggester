import { ChordDisplayModule } from './chord-display.module';

describe('ChordDisplayModule', () => {
  let chordDisplayModule: ChordDisplayModule;

  beforeEach(() => {
    chordDisplayModule = new ChordDisplayModule();
  });

  it('should create an instance', () => {
    expect(chordDisplayModule).toBeTruthy();
  });
});
