import { KeyChangeFormModule } from './key-change-form.module';

describe('KeyChangeFormModule', () => {
  let keyChangeFormModule: KeyChangeFormModule;

  beforeEach(() => {
    keyChangeFormModule = new KeyChangeFormModule();
  });

  it('should create an instance', () => {
    expect(keyChangeFormModule).toBeTruthy();
  });
});
