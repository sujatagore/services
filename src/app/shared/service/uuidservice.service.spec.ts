import { TestBed } from '@angular/core/testing';

import { UuidserviceService } from './uuidservice.service';

describe('UuidserviceService', () => {
  let service: UuidserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UuidserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
