import { TestBed, inject } from '@angular/core/testing';

import { ChordService } from './chord.service';

describe('SendChordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChordService]
    });
  });

  it('should be created', inject([ChordService], (service: ChordService) => {
    expect(service).toBeTruthy();
  }));
});
