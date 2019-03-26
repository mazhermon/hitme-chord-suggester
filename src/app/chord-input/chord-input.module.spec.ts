import { ChordInputModule } from './chord-input.module';

describe('ChordInputModule', () => {
  let chordInputModule: ChordInputModule;

  beforeEach(() => {
    chordInputModule = new ChordInputModule();
  });

  it('should create an instance', () => {
    expect(chordInputModule).toBeTruthy();
  });
});
