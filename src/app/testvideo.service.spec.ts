import { TestBed } from '@angular/core/testing';

import { TestvideoService } from './testvideo.service';

describe('TestvideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestvideoService = TestBed.get(TestvideoService);
    expect(service).toBeTruthy();
  });
});
