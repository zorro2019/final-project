import { TestBed } from '@angular/core/testing';

import { MesRdvService } from './mes-rdv.service';

describe('MesRdvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesRdvService = TestBed.get(MesRdvService);
    expect(service).toBeTruthy();
  });
});
