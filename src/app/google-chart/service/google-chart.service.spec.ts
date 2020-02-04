import { TestBed } from '@angular/core/testing';

import { GoogleChartService } from './google-chart.service';

describe('GoogleChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleChartService = TestBed.get(GoogleChartService);
    expect(service).toBeTruthy();
  });
});
