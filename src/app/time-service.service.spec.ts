import { TestBed } from '@angular/core/testing';

import { TimeServiceService } from './time-service.service';

describe('TimeServiceService', () => {
  let service: TimeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeServiceService);
  });

  it('should be created', () => {
    const service: TimeServiceService = TestBed.get(TimeServiceService);
    expect(service).toBeTruthy();
  });
});
