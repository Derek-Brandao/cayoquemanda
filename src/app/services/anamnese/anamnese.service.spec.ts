import { TestBed } from '@angular/core/testing';

import { AnamneseService } from './anamnese.service';

describe('AnamneseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnamneseService = TestBed.get(AnamneseService);
    expect(service).toBeTruthy();
  });
});
