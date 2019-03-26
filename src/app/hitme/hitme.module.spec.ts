import { HitmeModule } from './hitme.module';

describe('HitmeModule', () => {
  let hitmeModule: HitmeModule;

  beforeEach(() => {
    hitmeModule = new HitmeModule();
  });

  it('should create an instance', () => {
    expect(hitmeModule).toBeTruthy();
  });
});
