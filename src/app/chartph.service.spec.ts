import { TestBed } from '@angular/core/testing';

import { ChartphService } from './chartph.service';

describe('ChartphService', () => {
  let service: ChartphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
