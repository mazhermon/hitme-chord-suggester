import { TestBed, inject } from '@angular/core/testing';

import { ModesService } from './modes.service';

describe('ModesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModesService]
    });
  });

  it('should be created', inject([ModesService], (service: ModesService) => {
    expect(service).toBeTruthy();
  }));
});
