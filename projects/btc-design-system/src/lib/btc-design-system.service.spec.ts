import { TestBed } from '@angular/core/testing';

import { BtcDesignSystemService } from './btc-design-system.service';

describe('BtcDesignSystemService', () => {
  let service: BtcDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtcDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
