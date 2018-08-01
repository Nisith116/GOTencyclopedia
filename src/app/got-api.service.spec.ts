import { TestBed, inject } from '@angular/core/testing';

import { GotAPIService } from './got-api.service';

describe('GotAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotAPIService]
    });
  });

  it('should be created', inject([GotAPIService], (service: GotAPIService) => {
    expect(service).toBeTruthy();
  }));
});
