import { TestBed } from '@angular/core/testing';

import { BtcComponentsService } from './btc-components.service';

describe('BtcComponentsService', () => {
  let service: BtcComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtcComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
