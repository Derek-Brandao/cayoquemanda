import { TestBed } from '@angular/core/testing';

import { RegiService } from './regi.service';

describe('RegiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegiService = TestBed.get(RegiService);
    expect(service).toBeTruthy();
  });
});
