import { TestBed } from '@angular/core/testing';

import { MedicamentService } from './medicament.service';

describe('MedicamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicamentService = TestBed.get(MedicamentService);
    expect(service).toBeTruthy();
  });
});
