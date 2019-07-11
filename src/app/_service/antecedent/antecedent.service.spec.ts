import { TestBed } from '@angular/core/testing';

import { AntecedentService } from './antecedent.service';

describe('AntecedentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntecedentService = TestBed.get(AntecedentService);
    expect(service).toBeTruthy();
  });
});
