import { TestBed } from '@angular/core/testing';

import { DetailedItemDataService } from './detailed-item-data.service';

describe('DetailedItemDataService', () => {
  let service: DetailedItemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedItemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
