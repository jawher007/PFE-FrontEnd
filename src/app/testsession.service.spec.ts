import { TestBed } from '@angular/core/testing';

import { TestsessionService } from './testsession.service';

describe('TestsessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestsessionService = TestBed.get(TestsessionService);
    expect(service).toBeTruthy();
  });
});
