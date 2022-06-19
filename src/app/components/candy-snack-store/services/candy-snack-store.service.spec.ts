import { TestBed } from '@angular/core/testing';

import { CandySnackStoreService } from './candy-snack-store.service';

describe('CandySnackStoreService', () => {
  let service: CandySnackStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandySnackStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
