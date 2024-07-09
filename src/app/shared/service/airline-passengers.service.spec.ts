import { TestBed } from '@angular/core/testing';

import { AirlinePassengersService } from './airline-passengers.service';

describe('AirlinePassengersService', () => {
  let service: AirlinePassengersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlinePassengersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
