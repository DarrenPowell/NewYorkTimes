import { TestBed } from '@angular/core/testing';

import { NytService } from './nyt.service';

describe('NytService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NytService = TestBed.get(NytService);
    expect(service).toBeTruthy();
  });
});
