import { TestBed } from '@angular/core/testing';

import { CoberturasService } from './coberturas.service';

describe('CoberturasService', () => {
  let service: CoberturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoberturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
