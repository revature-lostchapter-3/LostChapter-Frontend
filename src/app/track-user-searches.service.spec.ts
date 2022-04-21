import { TestBed } from '@angular/core/testing';

import { TrackUserSearchesService } from './track-user-searches.service';

describe('TrackUserSearchesService', () => {
  let service: TrackUserSearchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackUserSearchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
