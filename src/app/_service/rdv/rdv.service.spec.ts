import { TestBed } from '@angular/core/testing';

import { RdvService } from './rdv.service';

describe('RdvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RdvService = TestBed.get(RdvService);
    expect(service).toBeTruthy();
  });
});
