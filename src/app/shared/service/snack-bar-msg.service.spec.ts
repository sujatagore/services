import { TestBed } from '@angular/core/testing';

import { SnackBarMsgService } from './snack-bar-msg.service';

describe('SnackBarMsgService', () => {
  let service: SnackBarMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
