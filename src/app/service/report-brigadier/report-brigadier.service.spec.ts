import { TestBed } from '@angular/core/testing';

import { ReportBrigadierService } from './report-brigadier.service';

describe('ReportBrigadierService', () => {
  let service: ReportBrigadierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportBrigadierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
