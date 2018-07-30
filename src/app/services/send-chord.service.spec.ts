import { TestBed, inject } from '@angular/core/testing';

import { SendChordService } from './send-chord.service';

describe('SendChordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendChordService]
    });
  });

  it('should be created', inject([SendChordService], (service: SendChordService) => {
    expect(service).toBeTruthy();
  }));
});
